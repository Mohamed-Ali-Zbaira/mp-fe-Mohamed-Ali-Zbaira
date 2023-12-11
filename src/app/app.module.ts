import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListClientComponent } from './list-client/list-client.component';
import { NbFactureClientComponent } from './nb-facture-client/nb-facture-client.component';
import { ByAdresseComponent } from './by-adresse/by-adresse.component';
import { FideleClientComponent } from './fidele-client/fidele-client.component';
import { IndexComponent } from './index/index.component';
import { ChartComponent } from './chart/chart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NonactiveComponent } from './nonactive/nonactive.component';
import { Page404Component } from './page404/page404.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NonActiveClientsComponent } from './non-active-clients/non-active-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NavbarComponent,
    ListClientComponent,
    NbFactureClientComponent,
    ByAdresseComponent,
    FideleClientComponent,
    IndexComponent,
    ChartComponent,
    BarchartComponent,
    NonactiveComponent,
    Page404Component,
    NonActiveClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
