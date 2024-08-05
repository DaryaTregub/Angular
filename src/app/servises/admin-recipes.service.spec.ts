import { TestBed } from '@angular/core/testing';

import { AdminRecipesService } from './admin-recipes.service';

describe('AdminRecipesService', () => {
  let service: AdminRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
