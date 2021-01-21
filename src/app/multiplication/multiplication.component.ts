import { Component, OnInit } from '@angular/core';
import { SendkeyService } from '../services/sendkey.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css'],
})
export class MultiplicationComponent implements OnInit {

  componentTitle: string = "Das kleine Einmaleins";
  a: number;
  b: number;
  result: string;
  currentTask: number = 1;

  min: number;
  max: number;

  playerLevel: number;
  tasksPerLevel: number = 5;

  correctAnswers: number = 0;
  incorrectAnswers: number = 0;

  lastSentKey: string;
  message: string;

  constructor(private sendkeyService: SendkeyService) {
    this.min = 1;
    this.max = 10;
    this.currentTask = 1;
    this.playerLevel = 1;
    this.getNewNumbers();
  }

  getRandomInt(min: number, max: number): number {
    let r = this.min + Math.floor(Math.random() * Math.floor(max));
    console.log("Random number " + r);
    return r;
  }

  getNewNumbers(): void {
    this.a = this.getRandomInt(this.min, this.max);
    this.b = this.getRandomInt(this.min, this.max);
    this.result = undefined;
  }

  nextOnePlease(): void {
    this.getNewNumbers();
  }

  resetLevel(): void {
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.currentTask = 1;
    this.getNewNumbers();
  }

  levelUp(): void {
    this.playerLevel += 1;
  }

  checkLevel(): void {
    this.currentTask += 1;
    if (this.correctAnswers + this.incorrectAnswers == 5) {
      if (this.correctAnswers == this.tasksPerLevel) {
        this.levelUp();
      }
      this.resetLevel();
    }
  }

  checkResult(): void {
    console.log("Checking the result " +
      this.result + " for " + this.a + " x " + this.b);
    if (this.a * this.b == parseInt(this.result)) {
      this.message = "KORREKT";
      this.correctAnswers += 1;
      this.getNewNumbers();
      this.checkLevel();
    }
    else {
      this.incorrectAnswers += 1;
      this.message = "FALSCH";
      this.resetLevel();
    }
    console.log(this.message)
  }

  modifyResultInput(i: string) {
    if (!this.result) {
      this.result = "";
    }
    let s: string = this.result.toString();
    this.result = s + i;
    console.log("new value: " + s);
  }

  deleteInput() {
    console.log("deleting the input");
    this.result = "";
  }

  deleteLastCharacter() {
    console.log("delete last char");
    if (this.result) {
      let s: string = this.result.toString();
      this.result = s.slice(0, -1);
    }
  }


  ngOnInit(): void {
    this.sendkeyService.keySent$.subscribe(
      i => {
        console.log("subscription updated value " + i);
        this.lastSentKey = i;
        switch (i.toString()) {
          case "back":
            this.deleteLastCharacter();
            break;
          case "clear":
            this.deleteInput();
            break;
          default:
            this.modifyResultInput(i);
            break;
        }

      }
    );
  }
}
