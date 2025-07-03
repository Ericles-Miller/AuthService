import { Module } from '@nestjs/common';
import { dataSourceOptions } from './database/database-provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), AuthModule],
})
export class AppModule {}
