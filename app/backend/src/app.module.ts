import { Module } from '@nestjs/common';
import { ArticleModule } from '@app/article';

@Module({
  imports: [ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
