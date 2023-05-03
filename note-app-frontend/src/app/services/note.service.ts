import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Note } from '../model/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  notes:any;
  readonly ROOT_URL = "http://localhost:8080/api";

  public createNotes(){

  }

  public getNotes(){
    return this.http
      .get<{ [key: string]: Note }>(this.ROOT_URL + '/notes')
      .pipe(
        map((res) => {
          const notes = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              notes.push({ ...res[key], id: key });
            }
          }
          return notes;
        })
      );   
  }

  public deleteNote(id:number){

  }
  
  public fetchNote(id:number){

  }
}
