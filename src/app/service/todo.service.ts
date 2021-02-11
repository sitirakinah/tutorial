import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularDelegate } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
//private notes: Observable<todo[]>;
//private notecollection: AngularFireCollection<todo>;

 //todoCol: AngularFirestoreCollectionGroup<any>;
 //todoDoc: AngularFirestoreDocument<any>;
 //todos: Observable<any[]>;
 //todo: Observable<any>;
 //todo$:any;

  constructor(private storage:TodoService, private afs: AngularFirestore) 
  {
      //this.todoCol = this.afs.collection('any', ref =>ref.orderBy('createdAT','desc'));

  
      
     // this.todos = this.todoCol.snapshotChanges().pipe(
       // map(Action=>{
         // return Action.map(
           // a=>
            //{
             /// const data= a.payload.doc.data() as Todo; 
              //data.todo.Id= a.payload.doc.id;
              //return data;

            //}
          //)
        //})
      //)

  }

      

   }

