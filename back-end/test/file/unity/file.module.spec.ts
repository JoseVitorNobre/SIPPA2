import { Test } from '@nestjs/testing';
import { FileModule } from '../../../src/application/modules/file.module';

describe('StudentActivityModule', () => {
  let module: FileModule;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [FileModule],
    }).compile();

    module = moduleRef.get(FileModule);
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});