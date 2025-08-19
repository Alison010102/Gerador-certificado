// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./_components/navbar/navbar";
import { BaseUi } from "./base-ui/base-ui";
// biome-ignore lint/style/useImportType: <explanation>
import { CertificadoService } from './_services/certificado';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'angular-1';
  exibeNavbar = true;
  constructor(private certificadoService : CertificadoService){}

  ngOnInit(): void {
      const certificados = localStorage.getItem('certificados')
      this.certificadoService.certificados  = certificados? JSON.parse(certificados) : [];
  
    }

}
