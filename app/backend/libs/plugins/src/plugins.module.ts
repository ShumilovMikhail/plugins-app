import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { PluginsService } from './plugins.service';
import { PluginsController } from './plugins.controller';

@Module({
  imports: [HttpModule],
  providers: [PluginsService],
  controllers: [PluginsController],
})
export class PluginsModule {}
