import { NgModule }              from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }  from '@angular/router';

import { HomeComponent }         from './home.component';
import { PageNotFoundComponent } from './pagenotfound.component';

const appRoutes: Routes = [
  { 
    path: 'projects', 
    loadChildren: 'app/projects/projects.module#ProjectsModule'
  },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { 
        preloadingStrategy: PreloadAllModules,
        enableTracing : false//debug only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
