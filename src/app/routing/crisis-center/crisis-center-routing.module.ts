import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

const crisesRoutes: Routes = [
  {
    path: 'routing/crises',
    component: CrisisListComponent,
    data: { animation: 'crises' },
  },
  {
    path: 'routing/crisis/:id',
    component: CrisisDetailComponent,
    data: { animation: 'crisis' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisesRoutes)],
  exports: [RouterModule],
})
export class CrisesRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CrisesRoutingModule { }
