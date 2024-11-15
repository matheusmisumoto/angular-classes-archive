import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubRepositoriesComponent } from './github-repositories/github-repositories.component';
import { GithubService } from './github.service';
import { HomeComponent } from './home/home.component';
import { RandomNumbersComponent } from './random-numbers/random-numbers.component';
import { MultiplicationTableComponent } from './multiplication-table/multiplication-table.component';
import { FormsModule } from '@angular/forms';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { CompoundInterestComponent } from './compound-interest/compound-interest.component';
import { ConditionalGreetingComponent } from './conditional-greeting/conditional-greeting.component';
import { DiscListComponent } from './disc-list/disc-list.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';
import { AppLogComponent } from './app-log/app-log.component';
import { LoggerService } from './logger.service';
import { TimerService } from './timer.service';
import { TasksService } from './tasks.service';
import { TaskListComponent } from './task-list/task-list.component';
import { BtcExchangeComponent } from './btc-exchange/btc-exchange.component';
import { BtcWalletComponent } from './btc-wallet/btc-wallet.component';
import { BitcoinService } from './bitcoin.service';

import { initializeApp } from "firebase/app";
import { AuthService } from './auth.service';
import { FirebaseComponent } from './firebase/firebase.component';
import { environment } from 'src/environments/environment';

// Firebase project configuration inside @NgModule -> imports

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        GithubRepositoriesComponent,
        RandomNumbersComponent,
        MultiplicationTableComponent,
        SimpleInterestComponent,
        CompoundInterestComponent,
        ConditionalGreetingComponent,
        DiscListComponent,
        DiscDetailsComponent,
        AppLogComponent,
        TaskListComponent,
        BtcExchangeComponent,
        BtcWalletComponent,
        FirebaseComponent
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,

    ], 
    providers: [GithubService, LoggerService, TimerService, TasksService, BitcoinService, AuthService, provideHttpClient(withInterceptorsFromDi())] })

  export class AppModule {
    constructor() {
        initializeApp({
            apiKey: environment.apiKey,
            authDomain: environment.authDomain,
            databaseURL: environment.databaseURL,
            projectId: environment.projectId,
            storageBucket: environment.storageBucket,
            messagingSenderId: environment.messagingSenderId,
            appId: environment.appId
        });
    }
  }
