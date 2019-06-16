import { Component, OnInit } from "@angular/core";
import { KPI } from "src/classes/KPI";
import { Router } from "@angular/router";

@Component({
  selector: "app-kpi-listing",
  templateUrl: "./kpi-listing.component.html",
  styleUrls: ["./kpi-listing.component.css"]
})
export class KpiListingComponent implements OnInit {
  public KPIs: KPI[] = [
    { kpiid: 1, name: "KPI1", formula: "XXXX" },
    { kpiid: 2, name: "KPI2", formula: "XXXX2" },
    { kpiid: 3, name: "KPI3", formula: "XXXX3" }
  ];
  public pageSize: number = 10;

  constructor(private router: Router) {}

  ngOnInit() {}

  public goToCreateKPI() {
    this.router.navigateByUrl("create-kpi").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
