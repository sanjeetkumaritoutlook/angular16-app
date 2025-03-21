import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormTemplateComponent } from './hero-form-template.component';

describe('HeroFormTemplateComponent', () => {
  let component: HeroFormTemplateComponent;
  let fixture: ComponentFixture<HeroFormTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroFormTemplateComponent]
    });
    fixture = TestBed.createComponent(HeroFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
