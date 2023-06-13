import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroesModule } from './heroes/heroes.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AppRoutingModule,
    CoreModule,
    AuthModule,
    DashboardModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
