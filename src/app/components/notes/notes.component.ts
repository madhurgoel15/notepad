import { Component, OnInit } from '@angular/core';
import { note } from "../../notes"
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  localItem:string|null;
  count:any;
  notes:note[];
  constructor() {
    this.localItem=localStorage.getItem("notes")
    if(this.localItem==null){
      this.notes=[];
    }
    else{
      this.notes=JSON.parse(this.localItem)
    }

    this.z={
      sno:0,
      title:"",
      body:""
    }
  }

  ngOnInit(): void {
  }
  z:note;
  disp=true;
  display=false;
  del(a:note){
    console.log(a)
    const index = this.notes.indexOf(a);
    if (index > -1) {
      this.notes.splice(index, 1);
      for(let i=index;i<this.notes.length;i++){
        this.notes[i].sno--
        }
      }
    localStorage.setItem("notes",JSON.stringify(this.notes));
  }


  edit(a:note){
    this.disp=false;
    console.log(a);
    this.z=a;
    this.display=true;
    console.log(this.z)

  }

  addd(a:note){
    this.count++;
    a.sno=this.notes.length+1
    console.log(a);
    this.notes.push(a);
    localStorage.setItem("notes",JSON.stringify(this.notes));
  }
  edt(x:note){
    this.disp=true;
    this.display=false;
    const index = this.notes.indexOf(this.z);
    if (index > -1) {
      this.notes[index].title=x.title;
      this.notes[index].body=x.body;
      }
    localStorage.setItem("notes",JSON.stringify(this.notes));
  }
}
