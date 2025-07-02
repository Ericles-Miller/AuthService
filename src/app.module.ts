import { Module } from '@nestjs/common';
import { dataSourceOptions } from './database/database-provider';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions)],
})
export class AppModule {}
