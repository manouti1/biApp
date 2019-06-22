import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { Router, ActivatedRoute } from "@angular/router";

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
    ],
    title: {
      text: "KPI Chart Results"
    }
  };
  public kpiID: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.kpiID = Number(this.route.snapshot.paramMap.get("id"));
    console.log(this.kpiID);
  }

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
