import { Test } from '@nestjs/testing';
import { ActivityModule } from '../../../src/application/modules/activity.module';

describe('ActivityModule', () => {
  let module: ActivityModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ActivityModule],
    }).compile();

    module = moduleRef.get(ActivityModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
