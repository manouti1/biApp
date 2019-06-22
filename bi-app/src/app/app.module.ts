import { Component } from "@angular/core";
import { TreeModule } from "ng2-tree";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from "highcharts-angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { KpiListingComponent } from "./kpi-listing/kpi-listing.component";
import { ChartInfoComponent } from "./chart-info/chart-info.component";
import { EditKpiComponent } from "./edit-kpi/edit-kpi.component";
import { CreateKpiComponent } from "./create-kpi/create-kpi.component";

@NgModule({
  declarations: [
    AppComponent,
    KpiListingComponent,
    ChartInfoComponent,
    EditKpiComponent,
    CreateKpiComponent
  ],
  imports: [
    TreeModule,
    BrowserModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
