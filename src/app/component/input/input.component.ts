//import { Component, OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
//export class InputComponent implements OnInit {
export class InputComponent {
@Input() type:string;
@Input() placeholder:string;
  constructor() { }

  ngOnInit() {}

}
