// biome-ignore lint/style/useImportType: <explanation>
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Secundarybutton } from "../app/secundarybutton/secondarybutton";
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from '../app/_services/certificado';
import type { Certificado } from '../app/interfaces/certificado';
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute } from '@angular/router';
import html2canvas from "html2canvas"

@Component({
  selector: 'app-certificado',
  imports: [Secundarybutton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadosComponent implements OnInit {

id:string | null = null;
certificado: Certificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement! : ElementRef;

  constructor(private certificadoService : CertificadoService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
this.route.paramMap.subscribe(param=>{
  this.id = param.get('id');
  this.certificado = this.certificadoService.certificados.find(item => item.id ===this.id)


});
}

downloadCertificado(){
  if (this.certificado === undefined){
    return;
  }
  html2canvas(this.certificadoElement.nativeElement,{scale: 2}).then(
    canvas =>{
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `certificado_$+ this.certificado?.nome.replaceAll(' ','_') + .png`;
      link.click();
    }
  )
}

}
