import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 导入FormsModule模块，使页面可以使用NgModule
import { FormsModule } from '@angular/forms';

// 导入HttpClientModule，让 HttpClient 在应用中随处可用
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 导入FormsModule模块，使页面可以使用NgModule
    FormsModule,
    // 导入HttpClientModule，使项目随处可用HttpClient
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
