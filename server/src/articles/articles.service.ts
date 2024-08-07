import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
  private readonly PAGES = 12;
  private readonly ARTICLES_NUMBER = 100;
  private readonly UNIX_TIMESTAMP_MULTIPLIER = 1000;
  private readonly API_BASE_URL = 'https://api.hnpwa.com/v0';
  constructor(private readonly httpService: HttpService) {}
  private handleError(e: any, message: string): never {
    console.error(message, e);
    throw new InternalServerErrorException(message);
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
        .slice(0, this.ARTICLES_NUMBER)
        .map(({ id, title, points, user, time_ago }) => ({
          id,
          title,
          points,
          user,
          time_ago,
        }));
    } catch (e) {
      this.handleError(e, 'error fetching articles');
    }
  }

  private formatDate(unixTimestamp: number) {
    return new Date(
      unixTimestamp * this.UNIX_TIMESTAMP_MULTIPLIER,
    ).toLocaleString();
  }

  private async fetchItem(id: number): Promise<Item> {
    try {
      const response = await firstValueFrom(
        this.httpService.get<Item>(`${this.API_BASE_URL}/item/${id}.json`),
      );
      return response.data;
    } catch (e) {
      this.handleError(e, `Failed to fetch item with id ${id}`);
    }
  }

  async getOne(id: number): Promise<IndividualArticleData> {
    try {
      const item = await this.fetchItem(id);

      const { title, url, time, comments_count } = item;

      return { title, url, time: this.formatDate(time), comments_count };
    } catch (e) {
      this.handleError(e, 'Failed to fetch single article');
    }
  }

  private transformComment(comment: Item): CommentData {
    const { id, user, content, comments_count, level, time_ago, comments } =
      comment;
    return {
      id,
      user,
      content,
      comments_count,
      level,
      time_ago,
      comments: comments ? this.transformComments(comments) : [],
    };
  }

  private transformComments(comments: Item[]): CommentData[] {
    return comments.map(this.transformComment.bind(this));
  }

  async getArticleComments(id: number): Promise<CommentData[]> {
    try {
      const item = await this.fetchItem(id);

      if (!item.comments) {
        return [];
      }

      return this.transformComments(item.comments);
    } catch (e) {
      this.handleError(e, 'error fetching article comments');
    }
  }
}
