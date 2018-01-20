import { TestBed, inject } from '@angular/core/testing';

import { ImgurApiService } from './imgur-api.service';

describe('ImgurApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgurApiService]
    });
  });

  it('should be created', inject([ImgurApiService], (service: ImgurApiService) => {
    expect(service).toBeTruthy();
  }));
});
