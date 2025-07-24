import { Component } from '@angular/core';
import { Primarybutton } from "../primarybutton/primarybutton";
import { Secundarybutton } from '../secundarybutton/secondarybutton';

@Component({
  selector: 'app-certificado-form',
  imports: [Primarybutton, Secundarybutton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
