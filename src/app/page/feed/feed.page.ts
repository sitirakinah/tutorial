import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
private slideOpts={
 slidesPerView:3}

 //private selectedItem:any;
 //@ViewChild('buttonSlideEle',{static: true}) buttonSlideEle: IonSlides;
 ngOnInit() {

  //this.selectedItem=6;
  //this.buttonSlideEle.slideTo(this.selectedItem -1)

}


//onClick(item){
  //console.log(item)
  //this.selectedItem= item;
//}
}



