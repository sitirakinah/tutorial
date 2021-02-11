
import { Injectable, ReflectiveInjector } from "@angular/core";
import { rejects } from "assert";
import firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor() {}

  signUpFirebase(email, password) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    })
  }

  loginFirebase(email,password){
    return new Promise ((resolve,reject)=>{
      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>{
        resolve(user)
      }).catch(err=>{
        reject(err)
      })
    })
  }
}