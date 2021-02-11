import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PortfolioService } from 'src/app/service/portfolio.service';



@Component({
  selector: 'app-portfolioedit',
  templateUrl: './portfolioedit.page.html',
  styleUrls: ['./portfolioedit.page.scss'],
})
export class PortfolioeditPage implements OnInit {

 newPortfolio:any;
 

  constructor(
    private pfs: PortfolioService,
    private storage: Storage
  
   )

  {
     //this.activatedRoute.paramMap.subscribe(
       //(data)=>{
        // console.log(data)
       //}
     //)

   // this.data=this.activatedRoute.snapshot.paramMap.get('id')
   }



  ngOnInit():void {
  }

  // getPortfolioList(){
  //   this.abc.getPortfolio.bind((data:any[])=>{
  //     this.portfolioResult= data;
  //     this.portfolioList= this.portfolioResult.results;
  //     console.log(this.portfolioList);
  //   }
  //   )}

  
  // getPortfolio(){
  //   this.storage.get('newPortfolio').then( (value)=>{
  //  console.log('Your Porfolio',this.getPortfolio)
  //   })


  // }

}
