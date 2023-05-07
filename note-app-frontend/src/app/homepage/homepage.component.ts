import { Note } from '../model/notes';
import { NoteService } from '../services/note.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  constructor(private noteService:NoteService){

  }

  allNotes:Note[] = [];
  ngOnInit() {
    this.fetchNotes();
  }
  noteIndex = 0;
  importantNoteEmpty = true;
  
  importantnotes:Note[]=[];
  recentnotes:Note[]=[];
 

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
  
  private fetchNotes(){
      this.noteService.getNotes().subscribe((notes)=>{
      this.allNotes = notes;
      this.allNotes.forEach((note)=>{
        if(note.important == true){
          this.importantnotes.push(note);
          this.importantNoteEmpty = false;
        }
      })
      this.allNotes.sort((a, b) => (a.dateCreated < b.dateCreated) ? 1 : -1);
      if(this.allNotes.length >= 4){
        for( let i = 0; i <4; i++){
          this.recentnotes.push(this.allNotes[i]);
        }
      }else{
        for( let i = 0; i <= this.allNotes.length; i++){
          this.recentnotes.push(this.allNotes[i]);
        }
      }
    })
  }

  
}
