import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  //constructor(private data: DataService) 
  //students: any[];

constructor() { }

ngOnInit() {
  //fetch('./assets/data/students.json').then(res => res.json())
    //.then(json => {
      //this.students = json;
    };
}
  //refresh(ev) {
    //setTimeout(() => {
      //ev.detail.complete();
    //}, 3000);
//}


  //getMessages(): Message[] {
    //return this.data.getMessages();
  //}

//}
