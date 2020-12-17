import { Titan } from './entities/titan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AotController } from './aot.controller';
import { AotService } from './aot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Titan])],
  controllers: [AotController],
  providers: [AotService]
})
export class AotModule {}
