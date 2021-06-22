import { StoriesComponent } from './shared/stories/stories.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserComponent } from './shared/user/user.component';
import { PostComponent } from './shared/post/post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { NavExtraComponent } from './shared/nav-extra/nav-extra.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    DashboardComponent,
    MainNavComponent,
    NavExtraComponent,
    HomeComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
