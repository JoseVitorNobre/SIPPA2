import { Test } from '@nestjs/testing';
import { ClassroomModule } from '../../../src/application/modules/classroom.module';

describe('ClassroomModule', () => {
  let module: ClassroomModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ClassroomModule],
    }).compile();

    module = moduleRef.get(ClassroomModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});