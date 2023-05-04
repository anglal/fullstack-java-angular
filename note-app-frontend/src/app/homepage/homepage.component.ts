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
    // this.filterNotes();
  }
  noteIndex = 0;
  
  
  importantnotes:Note[]=[];
 

  leftClick(){
    if(this.noteIndex===0){
      this.noteIndex = this.allNotes.length-1;
      // this.noteIndex = this.importantnotes.length-1;
    }else{
    this.noteIndex--;
    }
  }

  rightClick(){
    if(this.noteIndex===this.allNotes.length-1){
    // if(this.noteIndex = this.importantnotes.length-1){
      this.noteIndex = 0;
    }else{
    this.noteIndex++;
    }
  }

  private fetchNotes(){
      this.noteService.getNotes().subscribe((notes)=>{
      this.allNotes = notes;
      console.log("Home" + this.allNotes);
    })
  }
}
