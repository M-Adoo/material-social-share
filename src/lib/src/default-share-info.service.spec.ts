import { TestBed, inject } from '@angular/core/testing';

import { DefaultShareInfoService } from './default-share-info.service';

describe('DefaultShareInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultShareInfoService]
    });
  });

  it('should be created', inject([DefaultShareInfoService], (service: DefaultShareInfoService) => {
    expect(service).toBeTruthy();
  }));
});
