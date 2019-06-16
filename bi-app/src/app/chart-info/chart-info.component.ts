import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { Router } from '@angular/router';

@Component({
  selector: "app-chart-info",
  templateUrl: "./chart-info.component.html",
  styleUrls: ["./chart-info.component.css"]
})
export class ChartInfoComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: "line"
      }
    ]
  };
  constructor(private router: Router) {}

  ngOnInit() {}

  public goBackToKPI() {
    this.router.navigateByUrl("").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
