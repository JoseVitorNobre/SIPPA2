import { Test } from '@nestjs/testing';
import { ClassroomNewsModule } from '../../../src/application/modules/classroom-news.module';

describe('ClassroomNewsModule', () => {
  let module: ClassroomNewsModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ClassroomNewsModule],
    }).compile();

    module = moduleRef.get(ClassroomNewsModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});