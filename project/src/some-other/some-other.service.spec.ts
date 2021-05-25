import { Test, TestingModule } from '@nestjs/testing';
import { SomeOtherService } from './some-other.service';

describe('SomeOtherService', () => {
  let service: SomeOtherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomeOtherService],
    }).compile();

    service = module.get<SomeOtherService>(SomeOtherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
