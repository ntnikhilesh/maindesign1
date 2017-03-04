import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent implements OnInit {
days = [
    {value: 'unit-0', viewValue: 'Today'},
    {value: 'unit-1', viewValue: 'Yesterday'},
    {value: 'unit-2', viewValue: '4/3/2017'},
    {value: 'unit-2', viewValue: '3/3/2017'},
    {value: 'unit-2', viewValue: '2/3/2017'},
    {value: 'unit-2', viewValue: '1/3/2017'},
    {value: 'unit-2', viewValue: '28/2/2017'},
    {value: 'unit-2', viewValue: '27/2/2017'},
    {value: 'unit-2', viewValue: '26/2/2017'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
