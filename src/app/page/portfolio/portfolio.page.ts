import { ANALYZE_FOR_ENTRY_COMPONENTS, Component} from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ModalComponent } from 'src/app/component/modal/modal.component';
//import { DatabaseService } from 'src/app/database.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage {
  
  // @Input() firstName: string;
  // @Input() lastName: string;
  // @Input() middleInitial: string;

  
  // portfolio= 

  //   {

  //   //name: 'Kyna',
  //   //cash: 567,
  //   //portfolio: 'ABC',
  //   //totalgain:'2.34',
  //   //totalloss:'0.11'
  //   };

    
 
  //@Input() data: any;

  //@Input() cash: string;
  //@Input() portfolio: string;
  //@Input() totalgain: string;
  //@Input() totalloss: string;

 
//  validation_messages={
//    'cash':[
//     { type: 'required', message: 'Cash is required.'},
//     { type: 'string', message: " Enter Cash in Number"}
//    ]
//  }

EditRecord(){
  console.log('EditRecord')
}

RemoveRecord(){
  console.log('RemoveRecord')
}

 constructor(private modalCtrl: ModalController,private  alertCtrl: AlertController, private storage: Storage
) 
 {  
   this.storage.forEach(node=>{
     console.log(node)
   })
   
   
  }


  
  // getPortfolio(newPortfolio){
  //   this.storage.get('id').then( (result)=>{
  //  console.log('getPortfolio')
  //   })


  // }

  


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  // async openModal(portfolio){
  //   //console.log('open modal')
  //   const modal= await this.modalCtrl.create({
  //     component: ModalComponent,
  //     componentProps: {
       
  //       portfolio:portfolio,
  //       cash: portfolio.cash,
  //       totalloss: portfolio.totalloss,
  //       totalgain:portfolio.totalgain

  //     }
  //     })

  //    return await modal.present();
  // }


  
  async openModal() {
    console.log()
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      
    });
    return await modal.present();
  }



// dismissModal().then((data: any)=>{
  //if (data.data)
  //this.fromModal= data.data.fromModal;

//}


  // return await modal.present();
  //const {data: any,role }= await dismissModal();
  //if (role==='deposited'){
    //const index= this.client.findIndex(clt =>clt.name=== client.name);
    //const alert= await this.alertCtrl.create({header: 'success',message:'Account has been Deposited',buttons:['Close']});
    //await alert.present(); 
}
