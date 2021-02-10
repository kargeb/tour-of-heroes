import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
// import { FormContainerComponent } from './form-container/form-container.component';
import { HeroFormComponent } from './templateForm/hero-form/hero-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeroesWrapperComponent } from './heroes-wrapper/heroes-wrapper.component';
import { AngularRouterSampleComponent } from './routing/angular-router-sample/angular-router-sample.component';
import { CrisisListComponent } from './routing/crisis-list/crisis-list.component';
import { HeroListComponent } from './routing/heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BackToMainPageComponent } from './shared/back-to-main-page/back-to-main-page.component';
import { RoutingWrapperComponent } from './routing/routing-wrapper/routing-wrapper.component';
import { HeroesModule } from './routing/heroes/heroes.module';
import { HeroesRoutingModule } from './routing/heroes/heroes-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { CrisisCenterModule } from './routing/crisis-center/crisis-center.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    MainPageComponent,
    HeroesWrapperComponent,
    AngularRouterSampleComponent,
    CrisisListComponent,
    // HeroListComponent,
    PageNotFoundComponent,
    BackToMainPageComponent,
    RoutingWrapperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesRoutingModule,
    CrisisCenterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    HeroesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
