import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  componentTitle: string = "Addieren im Zahlenraum bis 100";

  constructor() { }

  ngOnInit(): void {
  }

}
