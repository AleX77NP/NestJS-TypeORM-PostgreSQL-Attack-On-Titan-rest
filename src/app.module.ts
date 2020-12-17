import { DatabaseConfig } from './config/database.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AotModule } from './aot/aot.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DatabaseConfig),
    AotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
