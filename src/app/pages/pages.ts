import { Component } from '@angular/core';
import { Secundarybutton } from "../secundarybutton/secondarybutton";
import { ItemCertificado } from "../item-certificado/item-certificado";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pages',
  imports: [ItemCertificado, Secundarybutton, RouterLink],
  templateUrl: './pages.html',
  styleUrl: './pages.css'
})
export class Pages {

}
