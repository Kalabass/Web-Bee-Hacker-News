import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { FeedItem, IndividualArticleData, Item } from './interfaces/interfaces';

@Injectable()
export class ArticlesService {
  constructor(private readonly httpService: HttpService) {}
  async getLatest(): Promise<FeedItem[]> {
    const BASE_URL = 'https://api.hnpwa.com/v0/newest';
    const PAGES = 12;
    let allNews: FeedItem[] = [];

    for (let page = 1; page <= PAGES; page++) {
      const response = await firstValueFrom(
        this.httpService.get<FeedItem[]>(`${BASE_URL}/${page}.json`),
      );
      allNews = allNews.concat(response.data);

      if (allNews.length >= 100) {
        break;
      }
    }

    allNews = allNews.slice(0, 100);

    return allNews;
  }

  async getOne(id: number): Promise<IndividualArticleData> {
    const response = await firstValueFrom(
      this.httpService.get<Item>(`https://api.hnpwa.com/v0/item/${id}.json`),
    );

    const { comments, ...articleData } = response.data;

    return articleData as IndividualArticleData;
  }

  async getArticleComments(id: number): Promise<Item[]> {
    const response = await firstValueFrom(
      this.httpService.get<Item>(`https://api.hnpwa.com/v0/item/${id}.json`),
    );

    return response.data.comments || [];
  }
}
