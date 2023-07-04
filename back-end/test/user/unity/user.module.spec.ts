import { Test } from '@nestjs/testing';
import { UserModule } from '../../../src/application/modules/user.module';

describe('UserModule', () => {
  let module: UserModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    module = moduleRef.get(UserModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});