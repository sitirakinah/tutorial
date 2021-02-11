import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioeditPageRoutingModule } from './portfolioedit-routing.module';

import { PortfolioeditPage } from './portfolioedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PortfolioeditPageRoutingModule
  ],
  declarations: [PortfolioeditPage]
})
export class PortfolioeditPageModule {}
