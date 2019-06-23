import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { Router, ActivatedRoute } from "@angular/router";
import { KpiService } from "../services/kpi/kpi.service";

@Component({
  selector: "app-chart-info",
  templateUrl: "./chart-info.component.html",
  styleUrls: ["./chart-info.component.css"]
})
export class ChartInfoComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;
  public chartOptions;

  public kpiID: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private kpiService: KpiService
  ) {}

  ngOnInit() {
    this.kpiID = Number(this.route.snapshot.paramMap.get("id"));
    this.kpiService
      .findOneWithSpecificAction("eval", this.kpiID)
      .subscribe(chartInfo => {
        const chartSeries = [];
        for (const c in chartInfo) {
          chartSeries.push({ name: c, data: chartInfo[c] });
        }

        this.chartOptions = {
          chart: {
            type: "spline"
          },
          title: {
            text: "KPI Chart Result"
          },
          xAxis: {
            categories: Object.keys(chartInfo)
          },
          yAxis: {
            title: {
              text: "Values"
            }
          },
          series: chartSeries
        };
      });
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
