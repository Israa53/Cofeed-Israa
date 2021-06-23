import { CustomModule } from './custom.module';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainNavComponent } from './shared/main-nav/main-nav.component';
import { NavExtraComponent } from './shared/nav-extra/nav-extra.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainNavComponent,
    NavExtraComponent,
    HomeComponent
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
    CustomModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
