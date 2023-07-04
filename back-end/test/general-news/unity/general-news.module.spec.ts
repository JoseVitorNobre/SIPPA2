import { Test } from '@nestjs/testing';
import { GeneralNewsModule } from '../../../src/application/modules/general-news.module';

describe('GeneralNewsModule', () => {
  let module: GeneralNewsModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [GeneralNewsModule],
    }).compile();

    module = moduleRef.get(GeneralNewsModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});