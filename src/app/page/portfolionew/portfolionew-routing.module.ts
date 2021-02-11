import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolionewPage } from './portfolionew.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolionewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolionewPageRoutingModule {}
