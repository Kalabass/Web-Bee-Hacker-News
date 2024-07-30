import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getLatest() {
    return this.articlesService.getLatest();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.articlesService.getOne(+id);
  }

  @Get('/comments/:id')
  getArticleComments(@Param('id') id: string) {
    return this.articlesService.getArticleComments(+id);
  }
}
