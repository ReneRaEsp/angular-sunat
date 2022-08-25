import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaRucComponent } from './components/consulta-ruc/consulta-ruc.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consulta-ruc' },
  { path: 'consulta-ruc', component: ConsultaRucComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
