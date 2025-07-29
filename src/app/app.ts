import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { Primarybutton } from "./primarybutton/primarybutton";
import { Secundarybutton } from "./secundarybutton/secondarybutton";
import { ItemCertificado } from "./item-certificado/item-certificado";
import { BaseUi } from "./base-ui/base-ui";
import { Pages } from "./pages/pages";
import { CertificadoForm } from "./certificado-form/certificado-form";
import { Certificado } from "../certificado/certificado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Primarybutton, Secundarybutton, ItemCertificado, BaseUi, Pages, CertificadoForm, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-1';
  exibeNavbar = true;

}
