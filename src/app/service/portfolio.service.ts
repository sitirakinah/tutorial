
import { Injectable } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  constructor(
    
    private modalcontroller: ModalController,
    private alertCtrl: AlertController,
    private storage: Storage)
     { }

    

  createPortfolio(newPortfolio){
  
  
     return new Promise((resolve, reject)=>{
      console.log('createPortfolio');
      let id=new String(new Date().getTime()).toString() ;
      console.log(id);
      this.storage.set(id,newPortfolio).then(res=>{
        //this.storage.set(id,newPortfolio).then(res=>{
        if (res&&Object.keys(res).length>0){
          resolve(true)
        }
      }).catch(err=>{
        reject(false)
      } )
      
      
      
      })
      
}

//   getPortfolio(newPortfolio){
//   this.storage.get('id,portfolio').then( (result)=>{
//    console.log('id,portfolio',result)
//   });

// }

 
   updatePortfolio(id,portfolioObj){

   }

   deletePortfolio(id){

   }
  
  viewPortfolio(id)
  {

  }   

 
  }
