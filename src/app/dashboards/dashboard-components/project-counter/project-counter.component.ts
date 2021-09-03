import { Component } from '@angular/core';
@Component({
  selector: 'app-project-counter',
  templateUrl: './project-counter.component.html'
})
export class ProjectCounterComponent {
  calls: boolean = false
  constructor() {}

  Calls(e){
    console.log(e.target.value)
    if(e.target.value == 'first') {
      this.calls= true
    } else {
      this.calls = false
    }
  }
}
