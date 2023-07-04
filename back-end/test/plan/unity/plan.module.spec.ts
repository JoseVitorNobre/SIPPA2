import { Test } from '@nestjs/testing';
import { PlanModule } from '../../../src/application/modules/plan.module';

describe('StudentActivityModule', () => {
  let module: PlanModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [PlanModule],
    }).compile();

    module = moduleRef.get(PlanModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});