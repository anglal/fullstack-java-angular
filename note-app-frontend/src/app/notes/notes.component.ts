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

 fetchNotes(){
    this.noteService.getNotes().subscribe((notes)=>{
    this.allNotes = notes;
  })
}

}
