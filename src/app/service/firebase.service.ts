import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName: 'Portfolio';

  constructor(private firestore : AngularFirestore) { }

  create_Portfolio(record)
  {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_Portfolio()
{
  return this.firestore.collection(this.collectionName).snapshotChanges();
}
    update_Portfolio(recordID,record)
    {
      this.firestore.doc(this.collectionName +'/'+ recordID).update(record);
    }
    
    delete_Portfolio(record_id) 
    {
      this.firestore.doc(this.collectionName +'/' + record_id).delete();
    }
}
