import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent} from '../../component/popover/popover.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popCtrl: PopoverController) { }

  ngOnInit() {
  }
  async openPopover(ev: any){
   // console.log("popover")
   const popover= await this.popCtrl.create({
     component: PopoverComponent,
     cssClass: 'my-custom-class',
     event: ev,
     translucent: true
   })

  
 popover.onDidDismiss().then((data:any)=>
  console.log(data))
  
  return await popover.present()
  }

  
}
