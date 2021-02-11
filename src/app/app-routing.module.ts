import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroFormComponent } from './templateForm/hero-form/hero-form.component';
import { AngularRouterSampleComponent } from './routing/angular-router-sample/angular-router-sample.component';
import { CrisisListComponent } from './routing/crisis-list/crisis-list.component';
import { HeroListComponent } from './routing/heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
// import { ComposeMessageComponent } from './compose-message/compose-message.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'tour/heroes', component: HeroesComponent },
  { path: 'tour/dashboard', component: DashboardComponent },
  { path: 'tour/detail/:id', component: HeroDetailComponent },
  { path: 'form', component: HeroFormComponent },
  { path: 'routing', component: HeroListComponent },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
  // { path: 'routing/crisis-center', component: CrisisListComponent },
  // { path: 'routing/heroes', component: HeroListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
