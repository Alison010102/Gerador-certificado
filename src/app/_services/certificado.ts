import { Injectable } from '@angular/core';
// biome-ignore lint/style/useImportType: <explanation>
import { Certificado } from '../interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
  certificados : Certificado[] = []

  adicionarCertificado(certificado: Certificado){
    this.certificados.unshift({...certificado})
    localStorage.setItem('certificados', JSON.stringify(this.certificados));
  }
}
