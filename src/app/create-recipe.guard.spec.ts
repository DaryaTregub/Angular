import { TestBed } from '@angular/core/testing';

import { CreateRecipeGuard } from './create-recipe.guard';

describe('CreateRecipeGuard', () => {
  let guard: CreateRecipeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateRecipeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
