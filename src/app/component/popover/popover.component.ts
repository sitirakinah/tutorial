import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
list: any =[

  "Learn Ionic",
  "Tech Assembler",
  "Git Hub",
  "Angular",
  "Show Case",
  //"Dismiss"
]

  constructor() { }

  ngOnInit() {}

   dismissPopover(){

   }
//  dismiss(item:string){
//   console.log(item)
//  }

 
}
