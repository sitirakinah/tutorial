import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user.model';
import { PortfolioService } from 'src/app/service/portfolio.service';


@Component({
  selector: 'app-portfolionew',
  templateUrl: './portfolionew.page.html',
  styleUrls: ['./portfolionew.page.scss'],
})
export class PortfolionewPage implements OnInit {
 user={} as  User;
 //public Porfolio: User;
  constructor(  private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toaster: ToastController)

  
  {}
  ngOnInit() {}
}
    //private  ss: PortfolioService,
    //private Porfolio: User
    //) 
    
    //{ 
 //this.createportfolio=this.form({
  // cash: ['', Validators.required],
   //portfolio: ['',Validators.required],
   //totalgain: ['',Validators.required],
   //totalloss:['',Validators.required],

 //});

//}
 //async createportfolio() {
 // const loading = await this.loadingCtrl.create();

 // const cash = this.Porfolio.cash;
  //const portfolio = this.Porfolio.portfolio;
  //const totalgain = this.Porfolio.totalgain;
  //const totalloss = this.Porfolio.totalloss;

  //return await loading.present();
//}
   


//
//}




