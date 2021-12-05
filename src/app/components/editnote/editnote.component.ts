import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { note } from 'src/app/notes';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {
  @Input() data:note;
  @Output() note_edited: EventEmitter<note>= new EventEmitter();
  constructor() {
    this.data={
      sno:0,
      title:"",
      body:""
    }
  }

  title="";
  body="";

  edit(){

    const note={
      sno:0,
      title:this.title,
      body:this.body

    }
    this.note_edited.emit(note);
  }
  ngOnInit(): void {
  }

}
