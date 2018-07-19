import { Component, OnInit } from '@angular/core';
import { IData } from './data.interface';
import { DataService } from './data.service';
// http://www.palador.com/2017/02/28/create-a-pie-chart-with-dynamic-data-using-d3-js-angular-2/
//https://github.com/amanjain325/angular-d3-charts/tree/master/src/app
//donut d3 chart examplewith angular 6
@Component({
  selector: 'my-app',
  templateUrl: '/app/app.html'
})
export class AppComponent {
  data: IData[];
  newLabel: string;
  newValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.$data.subscribe(data => {
      this.data = data;
    });
  }

  addData(): void {
    let newData = {
      label: this.newLabel,
      value: this.newValue
    } as IData;

    this.dataService.addData(newData);
  }
}
