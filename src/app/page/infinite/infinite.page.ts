import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {

  private data: [
 {
  colour:"red",
  value: "1" 
 },
 
 {
  color:"green",
  value:"2"
 },

 {
   color:"black",
   value:"3"
 },
 {
   color:"purple",
   value:"4"
 },
 {
   color:"orange",
   value:"5"
 },
 {
   color:"opa",
   value:"6"
 }
]
    
    


  constructor() { }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //if (data.length == 1000) {
       // event.target.disabled = true;
     // }
    }, 500);
  }
  ngOnInit() {
  }

}
