import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { KpiService } from "../services/kpi/kpi.service";
import { KPI } from "src/classes/KPI";

@Component({
  selector: "app-edit-kpi",
  templateUrl: "./edit-kpi.component.html",
  styleUrls: ["./edit-kpi.component.css"]
})
export class EditKpiComponent implements OnInit {
  public kpiID: number;
  public editForm: FormGroup;
  public kpi: KPI;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private kpiService: KpiService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.kpiID = Number(this.route.snapshot.paramMap.get("id"));
    this.kpiService.findOne(this.kpiID).subscribe(x => {
      this.kpi = x;
      this.createForm();
    });

  }

  createForm() {
    this.editForm = this.fb.group({
      name: [this.kpi.name, Validators.required],
      formula: [this.kpi.formula, Validators.required]
    });
  }

  updateKPI() {
    // TODO: Use EventEmitter with form value
    this.kpiService.update(this.kpiID, this.editForm.value).subscribe(x => {
      alert(x);
      this.router.navigateByUrl("").then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    });
  }

  closeForm() {
    this.router.navigateByUrl("").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
