import { FormControl, FormGroup } from '@angular/forms';
import { Note } from '../model/notes';
import { NoteService } from './../services/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  constructor(private noteService:NoteService){
  }
  ngOnInit(){
    this.fetchNotes();
  }
  allNotes: Note[] = [];
  noteClickedVal= !false;
  note:Note ={title:'', body:'', dateCreated:null, id:null, important:false};
  newFormHide = true;

 fetchNotes(){
    this.noteService.getNotes().subscribe(
      (notes) => {
        this.allNotes = notes;
      }
    );
  
}


noteClicked(id:any){
  this.allNotes.forEach((note)=>{
    if(note.id == id){
      console.log("Found")
      console.log(note);
      this.noteClickedVal = false;
      this.newFormHide = true;
      this.noteForm.setValue({title: note.title, body: note.body,important:note.important,id: note.id, dateCreated: note.dateCreated});
      this.note.id = note.id;
      this.note.body = note.body;
      this.note.dateCreated = note.dateCreated;
      this.note.important = note.important;
      this.note.title = note.title;
    }
  })

}

noteForm = new FormGroup({
  title: new FormControl(''),
  body: new FormControl(''),
  important: new FormControl(false),
  id: new FormControl(null),
  dateCreated: new FormControl(null)
});

onSubmit(){
  console.log(this.noteForm.value);
  this.saveNote();
  console.log("saved note: id: " + this.note.id + ",title: " + this.note.title + ", date created: " + this.note.dateCreated + ",body: " + this.note.body + ",important: " + this.note.important);
  this.noteClickedVal = true;
  window.location.reload();
}

private saveNote(){
  this.note.title = this.noteForm.value.title;
  this.note.body = this.noteForm.value.body;
  this.note.important = this.noteForm.value.important;
  this.note.dateCreated = this.noteForm.value.dateCreated;
  this.note.id = this.noteForm.value.id;
  this.noteService.createNote(this.note).subscribe((res)=>{
  })
}  

newNoteClicked(){
  this.noteClickedVal = true;
  this.newFormHide = false;
}

deleteNote(){
  console.log("Deleting id: " + this.note.id);
  this.noteService.deleteNote(this.note.id).subscribe();
  this.noteClickedVal = true;
  //  Reload page
  window.location.reload();
}

}