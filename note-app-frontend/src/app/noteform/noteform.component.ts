import { NoteService } from './../services/note.service';
import { Component,Input } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Note } from '../model/notes';



@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.css']
})
export class NoteformComponent {
  note:Note ={title:'', body:'', dateCreated:null, id:null, important:false};
  
  @Input()
  hide = false;

  constructor(private noteService : NoteService){

  }
  currentDate = new Date();
  noteForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    important: new FormControl(false)
  });

  onSubmit(){
    console.log(this.noteForm.value);
    this.saveNote();
    console.log("saved note: " + this.note.id + ", " + this.note.title + ", " + this.note.dateCreated + ", " + this.note.body + ", " + this.note.important);
    this.noteForm.reset();
  }

  private saveNote(){
    this.note.title = this.noteForm.value.title;
    this.note.body = this.noteForm.value.body;
    this.note.important = this.noteForm.value.important;
    this.note.dateCreated = this.currentDate;
    this.noteService.createNote(this.note).subscribe((res)=>{
    });
  }

}
