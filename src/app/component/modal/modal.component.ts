import { Component, Input, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { Storage} from '@ionic/storage';
import { TodoService } from 'src/app/service/todo.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { PortfolioPage } from 'src/app/page/portfolio/portfolio.page';
import { FirebaseService } from 'src/app/service/firebase.service';
import { create } from 'domain';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  {


   cash: number=null;
   portfolio: string=null;
   totalgain: number=null;
   totalloss: number=null;
   

  constructor(
    private modalCtrl: ModalController, 
    private storage: Storage,
    private alertCtrl: AlertController,
    private pfs: PortfolioService,
    public toast: ToastController

    )  
    
    { 
       
    }

    
    
  dismissModal(){
  this.modalCtrl.dismiss(null,'cancel');
  

}

ngOnInit(): void
{
  
}

newPortfolio={
  
  cash: '',
  portfolio: '',
  totalgain: '',
  totalloss:''
   
 };

 

// createPortfolio(){
//   console.log();


//  let newPortfolio={
  
//  cash: this.cash,
//  portfolio: this.portfolio,
//  totalgain: this.totalloss,
//  totalloss: this.totalloss

  
// }; 
// console.log(newPortfolio);
// this.pfs.createPortfolio(newPortfolio).then(res=>{
//    console.log(res)
// }).catch(err=>{
  
// })

  
// }
async createPortfolio(){
  console.log(this.newPortfolio.cash);
  console.log(this.newPortfolio.portfolio);
  console.log(this.newPortfolio.totalgain);
  console.log(this.newPortfolio.totalloss)
  const alert=await this.alertCtrl.create({
    header:'Tekan Button Submit',
    subHeader: 'Mahersaham',
    message: 'Please make sure your information was correct before confirm',
    buttons:[
      {
        text:'cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: ()=>{
          console.log('confirm cancel');
        }
      },{
        text:'Okay',
        handler:()=>{
          console.log('Confirm OK')
          console.log(this.newPortfolio)

          console.log("cash",this.newPortfolio.cash);
          this.pfs.createPortfolio(this.newPortfolio).then(Response=>
            {
              console.log(Response)
          })
          
        }
      }
    ]
  });
  await alert.present();
}
// else{
//   let toast=await this.ToastController.create({message:"tak boleh",duration:2000})
//   toast.present()
// }



}
  //this.pfs.createPortfolio.bind((data:any[])=>{
    //console.log(data);
  //});



//onDeposit() {
  //const newCash= this.cash + this.CashInput.value;
  //this.modalCtrl.dismiss(newCash,'deposited');
  //console.log(newCash);
//}
