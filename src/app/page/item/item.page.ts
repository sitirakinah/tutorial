import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { $ } from 'protractor';
import {Item, StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

 items : Item[] = [];

 newItem: Item = <Item>{};

 @ViewChild('mylist')mylist: any;

  constructor( private storageService: StorageService,private plt: Platform, private toastController : ToastController) 
  { 
    this.plt.ready().then(()=>{
      this.loadItems();
    });
  }


  //Create
  addItem(){
    this.newItem.modified= Date.now();
    this.newItem.id= Date.now();

    this.storageService.addItem(this.newItem).then(item=> {
      this.newItem=<Item>{};
      this.showToast('Item added!')
      this.loadItems();
    });


  }

  //read
  loadItems(){
    this.storageService.getItems().then(items=>{
      this.items=items;
    });
  }  
  //Update
  updateItem(item:Item){
    item.title='UPDATED:${item.tittle}';
    item.modified= Date.now();

    this.storageService.updateItem(item).then(item=>{
      this.showToast('Item updated!')
    });
  }

  //delete
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item =>
    {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems();//fix or sliding is stuck afterwards
      this.loadItems(); //or splice it from the array directlt
    });
  }
  //helper

  async showToast(msg: string){
    const toast= await this.toastController.create({
      message: msg,
      duration:2000
    });
    toast.present();
  }
  ngOnInit() {}
}
