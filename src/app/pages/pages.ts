import { Component } from '@angular/core';
import { Secundarybutton } from "../secundarybutton/secondarybutton";
import { ItemCertificado } from "../item-certificado/item-certificado";

@Component({
  selector: 'app-pages',
  imports: [Secundarybutton, ItemCertificado],
  templateUrl: './pages.html',
  styleUrl: './pages.css'
})
export class Pages {

}
