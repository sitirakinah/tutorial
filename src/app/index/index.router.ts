import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
    {
       path:'',
       loadChildren: () => import('../page/welcome/welcome.module').then( m => m.WelcomePageModule)
    },
    {
        path:'login',
        loadChildren: () => import('../page/login/login.module').then( m => m.LoginPageModule)
     },
    
     {
        path:'signup',
        loadChildren: () => import('../page/signup/signup.module').then( m => m.SignupPageModule)
     },

     {
      path: 'popover',
      loadChildren: () => import('../page/popover/popover.module').then( m => m.PopoverPageModule)
    },

    {
      path: 'alert',
      loadChildren: () => import('../page/alert/alert.module').then( m => m.AlertPageModule)
    },
    {
      path: 'radio',
      loadChildren: () => import('../page/radio/radio.module').then( m => m.RadioPageModule)
    },
    {
      path: 'actionsheet',
      loadChildren: () => import('../page/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
    },

    {
      path: 'badge',
      loadChildren: () => import('../page/badge/badge.module').then( m => m.BadgePageModule)
    },
    
    {
      path: 'chip',
      loadChildren: () => import('../page/chip/chip.module').then( m => m.ChipPageModule)
    },
   
    {
      path: 'datetime',
      loadChildren: () => import('../page/datetime/datetime.module').then( m => m.DatetimePageModule)
    },
   
    
    ]
     
    
  },

  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexRouter {}
