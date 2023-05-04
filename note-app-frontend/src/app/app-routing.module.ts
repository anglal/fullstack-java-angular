import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotesComponent } from './notes/notes.component';
import { NoteformComponent } from './noteform/noteform.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'notes', component: NotesComponent ,
  children:[
    {path:'note', component : NoteformComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }