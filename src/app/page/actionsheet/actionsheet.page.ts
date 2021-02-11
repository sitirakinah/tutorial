import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheet: ActionSheetController) { }

  ngOnInit() {
  }
async actionsheet(){
 const actionSheetConst= await this.actionSheet.create({
   header: "Action Sheet",
   //subHeader:'Photos',
   cssClass: "my-custom-class",
   mode: 'ios',
   animated:false,
   backdropDismiss:true,
   translucent:true,
    buttons: [
    {
      text: "Camera",
      icon:"camera-outline",
      handler:()=>{
        console.log("camera")
    }
  },
  {
    text: 'Share',
    icon: 'share',
    handler: () => {
      console.log('Share clicked');
    }
  },
  
  {
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    handler: () => {
      console.log('Delete clicked');
    }
  },
  {
    text: 'Play (open modal)',
    icon: 'caret-forward-circle',
    handler: () => {
      console.log('Play clicked');
    }
  }, {
  
    text: 'Favorite',
    icon: 'heart',
    handler: () => {
      console.log('Favorite clicked');
    }
  }, {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }]
})
  
await actionSheetConst.present()
actionSheetConst.present()
//console.log("Action Sheet")
//actionSheetConst.onDidDismiss().then(()=>{
  //console.log("onDidDismiss")
//})
}
}
