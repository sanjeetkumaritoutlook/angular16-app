import { Component } from '@angular/core';

@Component({
  selector: 'app-app-template-favorite-color',
  //In template-driven forms, the form model is implicit, using [(ngModel)] directive
  //In a template-driven form the source of truth is the template. 
  //You do not have direct programmatic access to the FormControl instance
  //sync view (UI) and data model
  template: ` Favorite Color: <input type="text" [(ngModel)]="favoriteColor">`,
  // templateUrl: './app-template-favorite-color.component.html',
  // styleUrls: ['./app-template-favorite-color.component.scss']
})
export class AppTemplateFavoriteColorComponent {
  favoriteColor = 'black';
}
