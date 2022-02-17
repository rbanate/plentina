import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadService {
  /**
   *
   */
  constructor(@InjectRepository(Lead) private repo: Repository<Lead>) {}
  create(createLeadDto: CreateLeadDto) {
    const lead = this.repo.create(createLeadDto);
    return this.repo.save(lead);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    return await this.repo.findOne(id);
  }

  async update(id: number, updateLeadDto: UpdateLeadDto) {
    const lead = await this.findOne(id);
    if (!lead) throw new NotFoundException('lead not found');

    Object.assign(lead, updateLeadDto);
    return this.repo.save(lead);
  }

  async remove(id: number) {
    const lead = await this.findOne(id);
    if (!lead) throw new NotFoundException('lead not found');

    return this.repo.remove(lead);
  }
}
