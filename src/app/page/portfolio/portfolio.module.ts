import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioPageRoutingModule } from './portfolio-routing.module';

import { PortfolioPage } from './portfolio.page';

import { ModalComponent } from 'src/app/component/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PortfolioPageRoutingModule,
  
  ],
  declarations: [PortfolioPage,ModalComponent],
  entryComponents: [ModalComponent]
})
export class PortfolioPageModule {
constructor() {}
}
