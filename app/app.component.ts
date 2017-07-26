import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{title}}!</h1>
 <img src="http://lorempixel.com/300/300/" />
  <my-tutorial></my-tutorial>
  <input type="text" [value]="welcomeText" />
  `,
 
})
export class AppComponent {
  public title="World";

  //property binding
  public image="http://lorempixel.com/300/300/";

  public welcomeText="Welcome to Vietnam";
 }