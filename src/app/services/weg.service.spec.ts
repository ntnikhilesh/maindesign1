import { TestBed, inject } from '@angular/core/testing';
import { WegService } from './weg.service';

describe('WegService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WegService]
    });
  });

  it('should ...', inject([WegService], (service: WegService) => {
    expect(service).toBeTruthy();
  }));
});
