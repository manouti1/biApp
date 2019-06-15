import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "KI Financial Indicator";
  KPIs = [{ name: "KPI1" }, { name: "KPI2" }, { name: "KPI3" }];
}
