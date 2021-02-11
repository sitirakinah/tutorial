import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioeditPage } from './portfolioedit.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioeditPageRoutingModule {}
