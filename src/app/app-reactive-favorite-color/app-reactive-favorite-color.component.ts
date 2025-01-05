import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-reactive-favorite-color',
  // templateUrl: './app-reactive-favorite-color.component.html',
  //[formControl] directive
  //Reactive Forms:  form model is explicit
  //Form Control Instance
  //-  synchronous data flow between the view and the data model, which makes creating large-scale forms easier.
  //form model is the source of truth; it provides the value and status of the form element at any given point in time, through the [formControl] directive on the input element.
   template: ` Favorite Color: <input type="text" [formControl]="favoriteColorControl"> `

})
export class AppReactiveFavoriteColorComponent {
  favoriteColorControl = new FormControl('blue');

}
