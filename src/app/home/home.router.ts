import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
        {
           path:'feed',
           loadChildren: () => import('../page/feed/feed.module').then( m => m.FeedPageModule)
        },
        {
            path:'notifications',
            loadChildren: () => import('../page/notifications/notifications.module').then( m => m.NotificationsPageModule)
         },
        
         {
            path:'messages',
            loadChildren: () => import('../page/messages/messages.module').then( m => m.MessagesPageModule)
         },

         {
            path:'settings',
            loadChildren: () => import('../page/settings/settings.module').then( m => m.SettingsPageModule)
         },
        
         {
            path:'portfolio',
            loadChildren: () => import('../page/portfolio/portfolio.module').then( m => m.PortfolioPageModule)
         },

         {
            path:'item',
            loadChildren: () => import('../page/item/item.module').then( m => m.ItemPageModule)
         },
        
         {
            //path: 'portfolioedit/:id',
            path: 'portfolioedit',
            loadChildren: () => import('../page/portfolioedit/portfolioedit.module').then( m => m.PortfolioeditPageModule)
          },
          {
           path: 'portfolionew',
           loadChildren: () => import('../page/portfolionew/portfolionew.module').then( m => m.PortfolionewPageModule)
          },
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouter {}
