// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { Secundarybutton } from "../secundarybutton/secondarybutton";
import { ItemCertificado } from "../item-certificado/item-certificado";
import { ActivatedRoute, RouterLink } from '@angular/router';
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from '../_services/certificado';
// biome-ignore lint/style/useImportType: <explanation>
import { Certificado } from '../interfaces/certificado';

@Component({
  selector: 'app-pages',
  imports: [ItemCertificado, Secundarybutton],
  templateUrl: './pages.html',
  styleUrl: './pages.css'
})
export class pages implements OnInit{
  certificados : Certificado[] = [];

constructor(private certificadoService: CertificadoService){
}
ngOnInit(): void {
    this.certificados= this.certificadoService.certificados;
    console.log(this.certificados)
}
}

