import { readFileSync, existsSync, writeFileSync } from 'fs';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleType } from '@app/types/article.type';

const ARTICLE_PATH = 'article.json';

@Controller('article')
export class ArticleController {
  constructor() {
    if (!existsSync(ARTICLE_PATH)) {
      writeFileSync(ARTICLE_PATH, '[]');
    }
  }

  @Get()
  readArticle(): ArticleType {
    return JSON.parse(readFileSync(ARTICLE_PATH, { encoding: 'utf-8' }));
  }

  @Post()
  updateArticle(@Body() article: ArticleType): ArticleType {
    writeFileSync(ARTICLE_PATH, JSON.stringify(article, null, 2));
    return article;
  }
}
