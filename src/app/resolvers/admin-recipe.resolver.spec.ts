import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { AdminRecipeResolver } from './admin-recipe.resolver';

describe('adminRecipeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => new AdminRecipeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
