import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
    `
      @import '@angular/material/prebuilt-themes/deeppurple-amber.css';
    `,
  ],
})
export class TodosComponent implements OnInit {
  childData=10;
  show = true;
  array = []; //for todo list
  userdetails=[
    {name:'waqas',email:'waqasahmed4813@gmail.com'},{name:'vicky',email:'waqas.ahmed@getfieldforce.com'},{name:'ahmed',email:'waqasahmed4334@gmail.com'}
  ]
user=''; //for two way binding
  // list=this.array
  showtitle() {
    this.show = !this.show;
  }

  addData(data) {
    this.array.push({ id: this.array.length, name: data });

    // alert("Item Saved Successfully");
  }
  deleteData(ID: number) {
    // this.array.splice(length-1) for deleting item in array
    //   alert("Item Deleted Successfully");
    //
    // console.warn(ID);
    this.array = this.array.filter((data) => data.id !== ID);
  }
  updaterandom(){

this.childData=Math.floor( Math.random()*10)

  }

  updatedata(item:string){


    console.warn(item);
    
  }
  constructor() {}
  ngOnInit(): void {}
}
