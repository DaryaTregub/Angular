import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { AdminRecipesResolver } from './admin-recipes.resolver';

describe('adminRecipesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => new AdminRecipesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
