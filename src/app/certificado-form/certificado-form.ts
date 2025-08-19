import { Component, viewChild } from '@angular/core';
import { Primarybutton } from "../primarybutton/primarybutton";
import { Secundarybutton } from '../secundarybutton/secondarybutton';
// biome-ignore lint/style/useImportType: <explanation>
import { FormsModule, NgForm, type NgModel} from "@angular/forms"
import { CommonModule } from '@angular/common';
// biome-ignore lint/style/useImportType: <explanation>
import { Certificado } from '../interfaces/certificado';
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from '../_services/certificado';
import {v4 as uuidv4} from 'uuid'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-certificado-form',
  standalone:true,
  imports: [Primarybutton, Secundarybutton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})

export class CertificadoForm {

  constructor(private certificadoService: CertificadoService){}

@ViewChild('form') form!: NgForm

certificado: Certificado ={
  id:'',
  atividades:[],
  nome: '',
  dataEmissao:''
};
atividade= '';

campoInvalido(control:NgModel){
  return control.invalid && control.touched
}
formValido(){
  return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
}
adicionarAtividade(){
  if(this.atividade.length === 0){
    return;
  }
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
this.certificado.dataEmissao = this.dataAtual();
this.certificado.id = uuidv4();
this.certificadoService.adicionarCertificado(this.certificado)

this.certificado = this.estadoInicialCertificado()
this.form.resetForm();

}
dataAtual(){
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2,'0')
  const mes = String(dataAtual.getMonth()+ 1).padStart(2,'0')
  const ano = dataAtual.getFullYear();

  const dataFormatada = `${dia}/${mes}/${ano}`
  return dataFormatada
}

estadoInicialCertificado (): Certificado{
  return{
  id:'',
  atividades:[],
  nome: '',
  dataEmissao:''
  }
}
}
