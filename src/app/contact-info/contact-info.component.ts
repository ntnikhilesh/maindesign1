import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
duration = [
    {value: 'cat-0', viewValue: '1 Hour'},
    {value: 'cat-1', viewValue: '2 Hour'},
    {value: 'cat-2', viewValue: '3 Hour'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
