/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResponceService } from './responce.service';

describe('Service: Responce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponceService]
    });
  });

  it('should ...', inject([ResponceService], (service: ResponceService) => {
    expect(service).toBeTruthy();
  }));
});
