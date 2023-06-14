import { Injectable } from '@nestjs/common';
import { PlanRepository } from '../../infrastructure/repositories/plan.repository';

@Injectable()
export class PlanService {
  constructor(private planRepository: PlanRepository) {}
  async findAll() {
    return this.planRepository.findAll();
  }

  async findOne(id: string) {
    return this.planRepository.findById(id);
  }
}
