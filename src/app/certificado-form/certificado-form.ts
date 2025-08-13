import { Component } from '@angular/core';
import { Primarybutton } from "../primarybutton/primarybutton";
import { Secundarybutton } from '../secundarybutton/secondarybutton';
import { FormsModule, type NgModel} from "@angular/forms"
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-certificado-form',
  standalone:true,
  imports: [Primarybutton, Secundarybutton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
nome = '';
atividade= '';
atividades: string [] = ['Angular','React'];

campoInvalido(control:NgModel){
  return control.invalid && control.touched
}
formValido(){
  return this.atividades.length > 0 && this.nome.length > 0;
}
}
