import type { Routes } from '@angular/router';
import { pages } from './pages/pages';
import { CertificadoForm } from './certificado-form/certificado-form';
import { CertificadosComponent } from '../certificado/certificado';

export const routes: Routes = [
    {
        path:"",
        component: pages
    },
    {
        path:"certificados/novo",
        component: CertificadoForm
    },
    {
        path:"certificados/:id",
        component: CertificadosComponent
    },

];
