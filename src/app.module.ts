import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SeedModule
  ],
})
export class AppModule {}
