import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { FeedItem, IndividualArticleData, Item } from './interfaces/interfaces';

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

  async getLatest(): Promise<FeedItem[]> {
    let allNews: FeedItem[] = [];

    for (let page = 1; page <= this.PAGES; page++) {
      const response = await firstValueFrom(
        this.httpService.get<FeedItem[]>(
          `${this.API_BASE_URL}/newest/${page}.json`,
        ),
      );
      allNews = allNews.concat(response.data);

      if (allNews.length >= 100) {
        break;
      }
    }

    return allNews.slice(0, 100);
  }

  async getOne(id: number): Promise<IndividualArticleData> {
    const response = await firstValueFrom(
      this.httpService.get<Item>(`${this.API_BASE_URL}/item/${id}.json`),
    );

    const { comments, ...articleData } = response.data;

    return articleData as IndividualArticleData;
  }

  async getArticleComments(id: number): Promise<Item[]> {
    const response = await firstValueFrom(
      this.httpService.get<Item>(`${this.API_BASE_URL}/item/${id}.json`),
    );

    return response.data.comments || [];
  }
}
