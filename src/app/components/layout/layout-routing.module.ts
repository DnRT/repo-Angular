import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

import { AdminGuard } from './../../guardians/admin.guard';

const routes: Routes = [
    
    {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
        {
            path: 'home',
            loadChildren: () => import('./../home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'movies',
            canActivate: [AdminGuard],
            loadChildren: () => import('./../movie/movie.module').then(m => m.MovieModule)
          },
          {
            path: 'contact',
            loadChildren: () => import('./../contact/contact.module').then(m => m.ContactModule)
          }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutRoutingModule {}