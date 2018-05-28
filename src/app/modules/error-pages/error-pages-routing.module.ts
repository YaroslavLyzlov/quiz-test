import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';

const errorPagesRoutes: Routes = [
  { path: '**',
    component: NotFoundComponent
  },
  { path: 'custom-error',
    component: CustomErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(errorPagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorPagesRoutingModule {}
