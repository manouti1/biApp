export class KPI {
  public kpiid: number;
  public name: string;
  public formula: string;
  constructor(name: string, formula: string) {
    this.name = name;
    this.formula = formula;
  }
}
