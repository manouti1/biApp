import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kpi-listing',
  templateUrl: './kpi-listing.component.html',
  styleUrls: ['./kpi-listing.component.css']
})
export class KpiListingComponent implements OnInit {
  KPIs = [{ name: "KPI1" }, { name: "KPI2" }, { name: "KPI3" }];

  constructor() { }

  ngOnInit() {
  }

}
