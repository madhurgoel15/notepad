import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './components/notes/notes.component';
import { ItemsComponent } from './components/items/items.component';
import { AddnoteComponent } from './components/addnote/addnote.component';
import { FormsModule } from '@angular/forms';
import { note } from './notes';
import { EditnoteComponent } from './components/editnote/editnote.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    ItemsComponent,
    AddnoteComponent,
    EditnoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
