import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  noteIndex = 0;
  importantnotes=["first", "second", "third"];

  leftClick(){
    if(this.noteIndex===0){
      this.noteIndex = this.importantnotes.length-1;
    }else{
    this.noteIndex--;
    }
  }

  rightClick(){
    if(this.noteIndex===this.importantnotes.length-1){
      this.noteIndex = 0;
    }else{
    this.noteIndex++;
    }
  }

}
