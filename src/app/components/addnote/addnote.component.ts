import { Input,Inject,Component, OnInit, EventEmitter , Output} from '@angular/core';
import {note} from 'src/app/notes';
@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})


export class AddnoteComponent implements OnInit {

  @Output() note_add: EventEmitter<note>= new EventEmitter();
  title="";
  body="";

  add(){

    const note={
      sno:0,
      title:this.title,
      body:this.body

    }
    this.note_add.emit(note);
  }
  constructor( ){

  }

  ngOnInit(): void {
  }

}


