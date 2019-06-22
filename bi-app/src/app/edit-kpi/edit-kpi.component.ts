import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-kpi",
  templateUrl: "./edit-kpi.component.html",
  styleUrls: ["./edit-kpi.component.css"]
})
export class EditKpiComponent implements OnInit {
  public kpiID: number;
  public editForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.kpiID = Number(this.route.snapshot.paramMap.get("id"));
    this.createForm();
  }

  createForm() {
    this.editForm = this.fb.group({
      name: ["", Validators.required],
      formula: ["", Validators.required]
    });
  }

  updateKPI() {
    // TODO: Use EventEmitter with form value
    console.log(this.editForm.value);
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
