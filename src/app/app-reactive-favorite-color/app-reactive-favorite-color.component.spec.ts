import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReactiveFavoriteColorComponent } from './app-reactive-favorite-color.component';

describe('AppReactiveFavoriteColorComponent', () => {
  let component: AppReactiveFavoriteColorComponent;
  let fixture: ComponentFixture<AppReactiveFavoriteColorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppReactiveFavoriteColorComponent]
    });
    fixture = TestBed.createComponent(AppReactiveFavoriteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should update the value of the input field', () => {
    const input = fixture.nativeElement.querySelector('input');
   // const event = createNewEvent('input');
  const event = input.dispatchEvent(new Event('input'));
    input.value = 'Red';
    input.dispatchEvent(event);
  
    expect(fixture.componentInstance.favoriteColorControl.value).toEqual('Red');
  });
});
