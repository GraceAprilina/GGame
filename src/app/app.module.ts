import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2BootstrapModule } from 'ng2-bootstrap'

import { AppComponent } from './app.component';
import { ModalPlayComponent } from './modal-play/modal-play.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalPlayComponent
  ],
  imports: [
    BrowserModule,
    Ng2BootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
