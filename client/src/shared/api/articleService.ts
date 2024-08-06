import {
  ArticleData,
  CommentData,
  IndividualArticleData,
} from '../model/articleInterfaces/interfaces';
import instance from './axiosInstance';

class ArticleService {
  async getAll() {
    return await instance.get<ArticleData[]>('articles');
  }

  async getOne(id: number) {
    return await instance.get<IndividualArticleData>(`articles/${id}`);
  }

  async getComments(id: number) {
    return await instance.get<CommentData[]>(`articles/comments/${id}`);
  }
}

export const articleService = new ArticleService();
