import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";



import { BaseUi } from "./base-ui/base-ui";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-1';
  exibeNavbar = true;

}
