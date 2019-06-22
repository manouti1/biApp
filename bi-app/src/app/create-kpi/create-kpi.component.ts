import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { TreeModel, NodeEvent } from 'ng2-tree';

@Component({
  selector: "app-create-kpi",
  templateUrl: "./create-kpi.component.html",
  styleUrls: ["./create-kpi.component.css"]
})
export class CreateKpiComponent implements OnInit {
  public createForm: FormGroup;
  public tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [{ value: 'Java' }, { value: 'C++' }, { value: 'C#' }]
      },
      {
        value: 'Prototype-based programming',
        children: [{ value: 'JavaScript' }, { value: 'CoffeeScript' }, { value: 'Lua' }]
      }
    ]
  };
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

  logEvent(e: NodeEvent): void {
    console.log(e);
  }
}
