import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipewidgetComponent } from './recipewidget.component';

describe('RecipewidgetComponent', () => {
  let component: RecipewidgetComponent;
  let fixture: ComponentFixture<RecipewidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipewidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipewidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
