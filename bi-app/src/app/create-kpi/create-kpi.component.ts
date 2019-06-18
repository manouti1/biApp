import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-create-kpi",
  templateUrl: "./create-kpi.component.html",
  styleUrls: ["./create-kpi.component.css"]
})
export class CreateKpiComponent implements OnInit {
  public createForm: FormGroup;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.createForm = this.fb.group({
      kpiName: ["", Validators.required]
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

  saveKPI() {
    // TODO: Use EventEmitter with form value
    console.log(this.createForm.value);
  }
}
