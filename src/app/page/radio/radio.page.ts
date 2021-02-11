import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async alert() {
    const alert= await this.alertController.create({
      header: 'Alert Header',
      subHeader:'SubHeader',
      message:'Please sign in',
      backdropDismiss: true,
      inputs:[
        {
          name: 'radiobtn-1',
          type:'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true

        },

        {
          name: 'radiobtn-2',
          type:'radio',
          label: 'Radio 2',
          value: 'value2',
          checked: false
        },
        
        {
          name: 'radiobtn-3',
          type:'radio',
          label: 'Radio 3',
          value: 'value3',
          checked: false
        }
      ],

buttons:[
        
{
 text: 'OK',
 role: 'Cancel',
 cssClass: 'my-alert-class',
 handler: (value: any)=> {
 console.log('ok Clicked',value)
 }
},
 {
  text: 'Cancel',
  role: 'Cancel',
  cssClass: 'my-alert-class',
  handler: (value: any)=> {
  console.log('Cancel Clicked',value)
  }
},
  ]
    })

    await alert.present();
  }
}
