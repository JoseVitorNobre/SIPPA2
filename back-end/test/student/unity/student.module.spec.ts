import { Test } from '@nestjs/testing';
import { StudentModule } from '../../../src/application/modules/student.module';

describe('StudentModule', () => {
  let module: StudentModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [StudentModule],
    }).compile();

    module = moduleRef.get(StudentModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});