import { Test } from '@nestjs/testing';
import { DisciplineModule } from '../../../src/application/modules/discipline.module';

describe('DisciplineModule', () => {
  let module: DisciplineModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [DisciplineModule],
    }).compile();

    module = moduleRef.get(DisciplineModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});