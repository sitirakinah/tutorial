import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async alert() {
const alert= await this.alertController.create({
  header: 'Alert Header',
  subHeader:'Mahersaham',
  message:'Please sign in',
  backdropDismiss: true,
  // inputs:[
  //   {
  //     name:'username',
  //     type:'text',
  //     placeholder:'Username'
  //   },

  //   {
  //     name: 'password',
  //     type: 'password',
  //     placeholder: 'Password'
  //   },

  //   {
  //     name: 'url',
  //     value:  'htp://google.com',
  //     type:'url',
  //     placeholder:'Google',
  //   },

  //   {

  //     name:  'Cust.Date',
  //     type: 'date'

  //   },

  //   {
 
  //     name:'Number Range',
  //     type: 'number',
  //     min:-5,
  //     max:10
  //   },

  //   {
  //     name: 'Any Number',
  //     type: 'number'

  //   },
    
  //   {
  //     name: 'Password',
  //     type:'password',
  //     placeholder:'Advanced Password',
  //     cssClass:'any-css-class',
  //     attributes:{
  //       maxLength: 10,
  //       inputMode: 'decimal'
  //     }
  //   }
 
    
  // ],
  //buttons:['okay','Cancel','Go to Home']
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