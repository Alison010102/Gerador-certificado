import type { Routes } from '@angular/router';
import { Pages } from './pages/pages';
import { CertificadoForm } from './certificado-form/certificado-form';
import { Certificado } from '../certificado/certificado';

export const routes: Routes = [
    {
        path:"",
        component: Pages
    },
    {
        path:"certificados/novo",
        component: CertificadoForm
    },
    {
        path:"certificados/:id",
        component: Certificado
    },

];
