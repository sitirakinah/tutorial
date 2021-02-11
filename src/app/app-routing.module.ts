import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    //redirectTo : 'home',
   // pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'infinite',
    loadChildren: () => import('./page/infinite/infinite.module').then( m => m.InfinitePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./page/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./page/range/range.module').then( m => m.RangePageModule)
  },
 
 
 
  //\{
    //path: 'portfolioedit',
    //loadChildren: () => import('./page/portfolioedit/portfolioedit.module').then( m => m.PortfolioeditPageModule)
 // },
 
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
