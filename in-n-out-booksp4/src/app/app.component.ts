//Danielle Taplin
//app.component.ts
//11/18/23
//app component for in n out books p1

//import component from angular
import { Component } from '@angular/core';

//create and export component for app root
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //create assignment variable as string
  assignment: string;

  //initialize assignment title variable with a constructor
  constructor(){
    this.assignment = "Welcome to In-N-Out-Books"
  }
}
