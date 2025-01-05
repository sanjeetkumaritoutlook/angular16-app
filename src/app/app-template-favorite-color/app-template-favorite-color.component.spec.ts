import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTemplateFavoriteColorComponent } from './app-template-favorite-color.component';

describe('AppTemplateFavoriteColorComponent', () => {
  let component: AppTemplateFavoriteColorComponent;
  let fixture: ComponentFixture<AppTemplateFavoriteColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTemplateFavoriteColorComponent]
    });
    fixture = TestBed.createComponent(AppTemplateFavoriteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
