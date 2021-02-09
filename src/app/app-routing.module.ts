import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroFormComponent } from './templateForm/hero-form/hero-form.component';
import { AngularRouterSampleComponent } from './routing/angular-router-sample/angular-router-sample.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'tour/heroes', component: HeroesComponent },
  { path: 'tour/dashboard', component: DashboardComponent },
  { path: 'tour/detail/:id', component: HeroDetailComponent },
  { path: 'form', component: HeroFormComponent },
  { path: 'routing', component: AngularRouterSampleComponent },
  { path: '**', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
