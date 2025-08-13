import { Component } from '@angular/core';
import { Secundarybutton } from "../secundarybutton/secondarybutton";
// biome-ignore lint/style/useImportType: <explanation>
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [Secundarybutton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  id = '6'
  constructor(private router:Router) {
    
  }
  redirecionaCertificado(){
    this.router.navigate(["certificados",2]);
  }
}
