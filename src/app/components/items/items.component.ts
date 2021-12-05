import { Input,Component, OnInit,Output,EventEmitter } from '@angular/core';
import {note} from 'src/app/notes';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() notes!: note;

  @Output() note_edit:EventEmitter<note>= new EventEmitter();
  @Output() note_delete:EventEmitter<note>= new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

    Edit(notes:note){
      console.log("Edit is called")
      this.note_edit.emit(notes)
    }
    Delete(notes:note){
      console.log("Delete is called")
      this.note_delete.emit(notes)
    }
}


