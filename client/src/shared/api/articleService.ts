import {
  ArticleData,
  CommentData,
  IndividualArticleData,
} from '../model/articleInterfaces/interfaces';
import instance from './axiosInstance';

class ArticleService {
  private handleError(error: any, message: string) {
    console.error(message, error);
  }

  async getAll(): Promise<ArticleData[]> {
    try {
      const response = await instance.get<ArticleData[]>('articles');
      return response.data;
    } catch (e) {
      this.handleError(e, 'Failed to fetch all articles');
      throw e;
    }
  }

  async getOne(id: number): Promise<IndividualArticleData> {
    try {
      const response = await instance.get<IndividualArticleData>(
        `articles/${id}`,
      );
      return response.data;
    } catch (e) {
      this.handleError(e, 'Failed to fetch individual article');
      throw e;
    }
  }

  async getComments(id: number): Promise<CommentData[]> {
    try {
      const response = await instance.get<CommentData[]>(
        `articles/comments/${id}`,
      );
      return response.data;
    } catch (e) {
      this.handleError(e, 'Failed to fetch article comments');
      throw e;
    }
  }
}

export const articleService = new ArticleService();
