import { Module } from '@nestjs/common';
import { ArticleModule } from '@app/article';
import { PluginsModule } from '@app/plugins';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ArticleModule, PluginsModule],
  controllers: [],
  providers: [HttpModule],
})
export class AppModule {}
