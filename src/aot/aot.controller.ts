import { CreateTitanDto } from './dto/titan.dto';
import { AotService } from './aot.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Titan } from './entities/titan.entity';
import { DeleteResult } from 'typeorm';

@Controller('aot')
export class AotController {

    constructor(private readonly aotService: AotService) {}

    @Get()
    findAll(): Promise<Titan[]> {
        return this.aotService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Titan | null> {
        return this.aotService.findById(id)
    }

    @Post()
    create(@Body() createdTitan: CreateTitanDto): Promise<Titan> {
        return this.aotService.create(createdTitan)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<DeleteResult> {
        return this.aotService.delete(id)
    }

    @Put(':id')
    update(@Param('id') id, @Body() newTitanValue: CreateTitanDto): Promise<Titan | null> {
        return this.aotService.update(id, newTitanValue)
    }
}
