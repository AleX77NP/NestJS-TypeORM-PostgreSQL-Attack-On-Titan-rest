import { CreateTitanDto } from './dto/titan.dto';
import { Titan } from './entities/titan.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class AotService {
    constructor(
        @InjectRepository(Titan)
        private readonly titanRepository: Repository<Titan>,
    ) {}

    public async findAll(): Promise<Titan[]> {
        return await this.titanRepository.find()
    }

    public async findById(id: number): Promise<Titan | null> {
        return await this.titanRepository.findOneOrFail(id)
    }

    public async create(titan: CreateTitanDto): Promise<Titan> {
        return await this.titanRepository.save(titan)
    }

    public async update(id: number, newTitanValue: CreateTitanDto): Promise<Titan | null> {
        const titan = await this.titanRepository.findOne(id);
        if(!titan.id) {
            console.error("Titan does not exist!")
        }
        await this.titanRepository.update(id, newTitanValue)
        return await this.titanRepository.findOne(id)
    }

    public async delete(id: number): Promise<DeleteResult> {
        return await this.titanRepository.delete(id)
    }
}
