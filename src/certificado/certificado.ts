// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { Secundarybutton } from "../app/secundarybutton/secondarybutton";
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from '../app/_services/certificado';
import type { Certificado } from '../app/interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [Secundarybutton],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class CertificadosComponent implements OnInit {

  certificados: Certificado [] = []
  constructor(private certificadoService: CertificadoService){

  }
  ngOnInit(): void {
      this.certificados = this.certificadoService.certificados
  }

}
