import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Note } from '../model/notes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  readonly ROOT_URL = "http://localhost:8080/api";

  public createNote(note: Note){
    return this.http.post(this.ROOT_URL + "/notes", note);

  }

  public getNotes():Observable<any>{
    
      return this.http.get(this.ROOT_URL + "/notes");
  
  }

  public deleteNote(id:number){
    return this.http.delete(this.ROOT_URL+ "/notes/" + id);
    // this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
    //     .subscribe(() => this.status = 'Delete successful');
  }
  
  public fetchNote(id:number): Observable<any> {
    console.log("Id sent with request: " + id)
    return this.http.get<Note>(this.ROOT_URL+ "/notes/" + id)
  }

  public updateNote(note: Note, id: number){
    this.http.patch(this.ROOT_URL + "/notes"+id, note);
  }

  
}
