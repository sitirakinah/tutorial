import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private loadingController: LoadingController) {}

  
  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner:"circles",
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 23,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

 
  
  ngOnInit() {
  }

  // async presentLoadingWithOptions() {
  //   const loading = await this.loadingController.create({
  //     spinner: "bubbles",
  //     duration: 0,
  //     message: 'Click the backdrop to dismiss early...',
  //     translucent: false,
  //     cssClass: 'custom-class custom-loading',
  //     backdropDismiss: true
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   console.log('Loading dismissed with role:', role);
  // }

}
