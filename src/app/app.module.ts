import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';
import { GithubService } from './github.service';
import { HomeComponent } from './home/home.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GithubRepositoriesComponent,
    RandomNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ GithubService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
