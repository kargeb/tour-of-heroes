import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisesRoutingModule } from './crisis-center-routing.module';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { RoutingWrapperComponent } from '../routing-wrapper/routing-wrapper.component';

@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent,
    // RoutingWrapperComponent,
  ],
  imports: [
    CommonModule,
    CrisesRoutingModule,
    FormsModule,
    // BrowserAnimationsModule,
  ],
})
export class CrisesModule {}
