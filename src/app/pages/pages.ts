// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { Secundarybutton } from "../secundarybutton/secondarybutton";
import { ItemCertificado } from "../item-certificado/item-certificado";
// biome-ignore lint/style/useImportType: <explanation>
import { ActivatedRoute, RouterLink } from '@angular/router';
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from '../_services/certificado';
// biome-ignore lint/style/useImportType: <explanation>
import { Certificado } from '../interfaces/certificado';

@Component({
  selector: 'app-pages',
  imports: [ItemCertificado],
  templateUrl: './pages.html',
  styleUrl: './pages.css'
})
export class Pages implements OnInit{
  id:string | null = null
  certificado: Certificado | undefined
constructor(private certificadoService : CertificadoService, private route: ActivatedRoute){

}
ngOnInit(): void {
this.route.paramMap.subscribe(param=>{
  this.id = param.get('id');
  this.certificado = this.certificadoService.certificados.find(item => item.id ===this.id)
console.log(this.certificado)

})
}
}
