import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { KpiListingComponent } from './kpi-listing/kpi-listing.component';
import { EditKpiComponent } from './edit-kpi/edit-kpi.component';
import { ChartInfoComponent } from './chart-info/chart-info.component';
import { CreateKpiComponent } from './create-kpi/create-kpi.component';
const routes: Routes = [
  { path: '', component: KpiListingComponent, pathMatch: 'full'},
  {path: 'edit-kpi/:id', component: EditKpiComponent},
  {path: 'chart-info/:id', component: ChartInfoComponent},
  {path: 'create-kpi', component: CreateKpiComponent},
  {path: '**', component: KpiListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
