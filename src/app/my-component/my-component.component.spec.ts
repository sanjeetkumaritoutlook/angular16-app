import { ComponentFixture, TestBed,async } from '@angular/core/testing';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   declarations: [MyComponentComponent]
    // });
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should display the correct title', () => {
    // expect(fixture).toMatchSnapshot();
    (<any>expect(fixture)).toMatchSnapshot();
    //https://github.com/thymikee/jest-preset-angular/issues/259
  });
});
