import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule, NbLayoutModule, NbListModule, NbTabsetModule, NbThemeModule } from '@nebular/theme';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EplComponent } from './home/epl/epl.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EplComponent
  ],
  imports: [
    BrowserModule,
    NbLayoutModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    AppRoutingModule,
    NbTabsetModule,
    NbCardModule,
    NbListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
