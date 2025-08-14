import { Component } from '@angular/core';
import { Primarybutton } from "../primarybutton/primarybutton";
import { Secundarybutton } from '../secundarybutton/secondarybutton';
import { FormsModule, type NgModel} from "@angular/forms"
import { CommonModule } from '@angular/common';
// biome-ignore lint/style/useImportType: <explanation>
import { Certificado } from '../interfaces/certificado';
@Component({
  selector: 'app-certificado-form',
  standalone:true,
  imports: [Primarybutton, Secundarybutton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
certificado: Certificado ={
  atividades:[],
  nome: ''
};
atividade= '';

campoInvalido(control:NgModel){
  return control.invalid && control.touched
}
formValido(){
  return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
}
adicionarAtividade(){
  this.certificado.atividades.push(this.atividade);
  this.atividade = '';
}
excluirAtividade($index:number){
this.certificado.atividades.splice($index,1);
}
submit(){
if(!this.formValido()){
  return;
}
console.log(this.certificado)
}
}
