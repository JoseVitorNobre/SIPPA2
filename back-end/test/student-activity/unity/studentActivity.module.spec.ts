import { Test } from '@nestjs/testing';
import { StudentActivityModule } from '../../../src/application/modules/student-activity.module';

describe('StudentActivityModule', () => {
  let module: StudentActivityModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [StudentActivityModule],
    }).compile();

    module = moduleRef.get(StudentActivityModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});