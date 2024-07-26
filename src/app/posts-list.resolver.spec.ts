import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { postsListResolver } from './posts-list.resolver';

describe('postsListResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => postsListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
