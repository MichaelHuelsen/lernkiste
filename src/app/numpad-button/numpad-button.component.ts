import { Component, OnInit, Input } from '@angular/core';
import { SendkeyService } from '../services/sendkey.service';

@Component({
  selector: 'app-numpad-button',
  templateUrl: './numpad-button.component.html',
  styleUrls: ['./numpad-button.component.css'],
})
export class NumpadButtonComponent implements OnInit {

  constructor(private sendkeyService: SendkeyService) { }

  @Input() btnLabel = "";
  @Input() btnId = "";
  @Input() altText = "";

  sendKey(): void {
    console.log("Sending key id ", this.btnId);
    this.sendkeyService.sendKey(this.btnId);
  }

  ngOnInit() {
    if (this.btnId == "") {
      this.btnId = this.btnLabel
    }
    console.log("button " + this.btnId + " with label " + this.btnLabel + " initialized");
  }

}
