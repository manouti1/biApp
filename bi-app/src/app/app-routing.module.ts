import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { KpiListingComponent } from './kpi-listing/kpi-listing.component';
const routes: Routes = [
  { path: '', component: KpiListingComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
