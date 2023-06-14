import { Injectable } from '@nestjs/common';
import { ClassPlanRepository } from '../../infrastructure/repositories/class-plan.repository';

@Injectable()
export class ClassPlanService {
  constructor(private clasPlanRepository: ClassPlanRepository) {}

  async findAll() {
    return this.clasPlanRepository.findAll();
  }

  async findOne(id: number) {
    return this.clasPlanRepository.findById(id);
  }

  async findByPlan(planId: string) {
    const classPlansReturn = (await this.clasPlanRepository.findAll()).filter(
      (classPlan) => {
        if (planId == classPlan.plan_id) return classPlan;
      },
    );
    return classPlansReturn;
  }
}
