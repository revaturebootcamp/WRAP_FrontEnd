import { TestBed } from '@angular/core/testing';

import { SpoonacularService } from './spoonacular.service';

describe('SpoonacularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpoonacularService = TestBed.get(SpoonacularService);
    expect(service).toBeTruthy();
  });
});
