import { Test } from '@nestjs/testing';
import { AppModule } from '../../../src/application/modules/app.module';

describe('AuthModule', () => {
  let module: AppModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    module = moduleRef.get(AppModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});