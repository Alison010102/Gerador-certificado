// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { Secundarybutton } from "../app/secundarybutton/secondarybutton";
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from '../app/_services/certificado';
import type { Certificado } from '../app/interfaces/certificado';
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [Secundarybutton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadosComponent implements OnInit {

id:string | null = null;
certificado: Certificado | undefined;

  certificados: Certificado [] = []
  constructor(private certificadoService : CertificadoService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
this.route.paramMap.subscribe(param=>{
  this.id = param.get('id');
  this.certificado = this.certificadoService.certificados.find(item => item.id ===this.id)
console.log(this.certificado)

});
}
}
