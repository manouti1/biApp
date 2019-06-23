import { Component, OnInit } from "@angular/core";
import { KPI } from "src/classes/KPI";
import { Router } from "@angular/router";
import { KpiService } from "../services/kpi/kpi.service";

@Component({
  selector: "app-kpi-listing",
  templateUrl: "./kpi-listing.component.html",
  styleUrls: ["./kpi-listing.component.css"]
})
export class KpiListingComponent implements OnInit {
  public KPIs: KPI[] = [];
  public pageSize: number = 10;
  public pageIndex: number = 1;

  constructor(private router: Router, private kpiService: KpiService) {}

  ngOnInit() {
    this.getKPIData();
  }

  getKPIData() {
    this.kpiService
      .findAllPaginated("list", this.pageIndex, this.pageSize)
      .subscribe(kpiList => {
        this.KPIs = kpiList;
      });
  }
  goBack() {
    if (this.pageIndex !== 1) {
      this.pageIndex--;
      this.getKPIData();
    }
  }
  goNext() {
    if (this.pageIndex < this.KPIs.length) {
      this.pageIndex++;
      this.getKPIData();
    }
  }
  onChangeEvent(ev) {
    this.getKPIData();
  }
  goToCreateKPI() {
    this.router.navigateByUrl("create-kpi").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
