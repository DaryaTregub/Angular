/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TailwindService } from './tailwind.service';

describe('Service: Tailwind', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TailwindService]
    });
  });

  it('should ...', inject([TailwindService], (service: TailwindService) => {
    expect(service).toBeTruthy();
  }));
});
