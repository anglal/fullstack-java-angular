import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css']
})
export class NoteformComponent {
  currentDate = new Date();
  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    important: new FormControl('')
  });

  onSubmit(){
    console.log(this.noteForm.value);
    this.noteForm.reset();
  }
}
