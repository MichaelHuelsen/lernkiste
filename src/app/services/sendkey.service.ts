import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class SendkeyService {

  constructor() {
    console.log("SendkeyService constructor");
  }

  private sentKeySource = new Subject<string>();

  keySent$ = this.sentKeySource.asObservable();

  sendKey(k: string) {
    this.sentKeySource.next(k);
    console.log("next for key with id " + k + " was called");
  }



}