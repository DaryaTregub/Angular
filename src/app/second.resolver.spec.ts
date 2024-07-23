import { TestBed } from '@angular/core/testing';

import { SecondResolver } from './second.resolver';

describe('SecondResolver', () => {
  let resolver: SecondResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SecondResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
