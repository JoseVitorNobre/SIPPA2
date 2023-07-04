import { Test } from '@nestjs/testing';
import { ClassPlanModule } from '../../../src/application/modules/class-plan.module';

describe('ClassPlanModule', () => {
  let module: ClassPlanModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ClassPlanModule],
    }).compile();

    module = moduleRef.get(ClassPlanModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});