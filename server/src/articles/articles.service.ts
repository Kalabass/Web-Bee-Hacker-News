import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import {
  ArticleData,
  CommentData,
  FeedItem,
  IndividualArticleData,
  Item,
} from './interfaces/interfaces';

@Injectable()
export class ArticlesService {
  private readonly API_BASE_URL: string;
  private readonly PAGES = 12;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.API_BASE_URL =
      this.configService.get<string>('API_BASE_URL') ||
      'https://api.hnpwa.com/v0';
  }

  async getLatest(): Promise<ArticleData[]> {
    try {
      const requests = Array.from({ length: this.PAGES }, (_, i) =>
        firstValueFrom(
          this.httpService.get<FeedItem[]>(
            `${this.API_BASE_URL}/newest/${i + 1}.json`,
          ),
        ),
      );

      const responses = await Promise.all(requests);

      let allNews: FeedItem[] = responses.flatMap((response) => response.data);

      return allNews
        .slice(0, 100)
        .map(({ id, title, points, user, time_ago }) => ({
          id,
          title,
          points,
          user,
          time_ago,
        }));
    } catch (e) {
      console.error('error fetching articles', e);
      throw new InternalServerErrorException('error fetching articles');
    }
  }

  private formatDate(unixTimestamp: number) {
    return new Date(unixTimestamp * 1000).toLocaleString();
  }

  async getOne(id: number): Promise<IndividualArticleData> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Item>(`${this.API_BASE_URL}/item/${id}.json`),
      );

      const { title, url, time, comments_count } = response.data;

      return { title, url, time: this.formatDate(time), comments_count };
    } catch (e) {
      console.error('error fetching single article', e);
      throw new InternalServerErrorException('Failed to fetch single article');
    }
  }

  async getArticleComments(id: number): Promise<CommentData[]> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Item>(`${this.API_BASE_URL}/item/${id}.json`),
      );

      const item = response.data;

      if (!item.comments) {
        return [];
      }

      const transformComments = (comments: Item[]): CommentData[] => {
        return comments.map(
          ({
            id,
            user,
            content,
            comments_count,
            level,
            time_ago,
            comments,
          }) => ({
            id,
            user,
            content,
            comments_count,
            level,
            time_ago,
            comments: comments ? transformComments(comments) : [],
          }),
        );
      };

      return transformComments(item.comments);
    } catch (e) {
      console.error('error fetching article comments', e);
      throw new InternalServerErrorException('error fetching article comments');
    }
  }
}
