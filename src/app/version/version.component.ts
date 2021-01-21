import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

  constructor() { }

  appVersion: string = "0.2";
  sourceCode: string = "https://github.com/michaelhuelsen/lernkiste";

  ngOnInit(): void {
  }

}
