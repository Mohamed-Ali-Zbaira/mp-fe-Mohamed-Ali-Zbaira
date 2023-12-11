import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NbFactureClientComponent } from './nb-facture-client/nb-facture-client.component';
import { ByAdresseComponent } from './by-adresse/by-adresse.component';
import { FideleClientComponent } from './fidele-client/fidele-client.component';
import { IndexComponent } from './index/index.component';
import { BarchartComponent } from './barchart/barchart.component';
import { ChartComponent } from './chart/chart.component';
import { NonactiveComponent } from './nonactive/nonactive.component';
import { NonActiveClientsComponent } from './non-active-clients/non-active-clients.component';

const routes: Routes = [
  { path: '', redirectTo: 'non-active-clients', pathMatch: 'full' },  // Redirection ajoutée ici
  { path: 'client', component: ClientComponent },
  { path: 'byfacture', component: ListClientComponent },
  { path: 'nbfacture', component: NbFactureClientComponent },
  { path: 'Byadresse', component: ByAdresseComponent },
  { path: 'fidele', component: FideleClientComponent },
  { path: 'barchart', component: BarchartComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'nonactive', component: NonactiveComponent },
  { path: 'non-active-clients', component: NonActiveClientsComponent },
  { path: '**', redirectTo: 'non-active-clients' } // Redirection pour toutes les autres routes non définies
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
