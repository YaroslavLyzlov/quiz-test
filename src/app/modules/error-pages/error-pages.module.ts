import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { ErrorPagesRoutingModule } from './error-pages-routing.module';

@NgModule({
  imports: [ ErrorPagesRoutingModule ],
  declarations: [ NotFoundComponent, CustomErrorComponent ]
})
export class ErrorPagesModule {}
