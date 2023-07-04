import { Test } from '@nestjs/testing';
import { AuthModule } from '../../../src/application/modules/auth.module';

describe('AuthModule', () => {
  let module: AuthModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AuthModule],
    }).compile();

    module = moduleRef.get(AuthModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});