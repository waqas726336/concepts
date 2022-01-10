import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent implements OnInit {
// @ Input() something 
@Input() reuseable:{name:string,email:string}={name:'',email:''}

  ngOnInit(): void {
  }

}
  