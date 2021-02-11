import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  databaseObj : SQLiteObject; 
  tables ={
    portfolio: "portfolio",
  };


  constructor(private sqlite: SQLite) { }
       }
   
  