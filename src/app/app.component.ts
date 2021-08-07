import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-app';
  Count = 0;
  reset(){
    this.Count = 0;
  }
  increment(){
    this.Count +=1;
  }

  decrement(){
    this.Count -=1;
  }
}
