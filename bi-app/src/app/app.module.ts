import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KpiListingComponent } from './kpi-listing/kpi-listing.component';
import { ChartInfoComponent } from './chart-info/chart-info.component';
import { EditKpiComponent } from './edit-kpi/edit-kpi.component';
import { CreateKpiComponent } from './create-kpi/create-kpi.component';

@NgModule({
  declarations: [
    AppComponent,
    KpiListingComponent,
    ChartInfoComponent,
    EditKpiComponent,
    CreateKpiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
