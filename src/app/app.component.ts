import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secret: String = "Secret Password = tuna";
  isDisplaySecret: Boolean = false;
  registerClicks: Date[] = [];

  toggleDisplaySecret () {
    this.registerClicks.push(new Date());
    this.isDisplaySecret = !this.isDisplaySecret;
  }

  checkTooMuch (click: Date) {
    if(this.registerClicks.length < 5) {
      return false;
    } else if (click <= this.registerClicks[3]) {
      return false;
    } else {
      return true;
    }
  }
}
