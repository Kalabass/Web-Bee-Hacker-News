import {
  FeedItem,
  IndividualArticleData,
  Item,
} from '../model/article-interfaces/interfaces';
import instance from './axios-instance';

class ArticleService {
  async getAll() {
    return await instance.get<FeedItem[]>('articles');
  }

  async getOne(id: number) {
    return await instance.get<IndividualArticleData>(`articles/${id}`);
  }

  async getComments(id: number) {
    return await instance.get<Item[]>(`articles/comments/${id}`);
  }
}

export const articleService = new ArticleService();
