import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrateleiraComponent } from './prateleira/prateleira.component';
import { PratItemComponent } from './prateleira/prat-item/prat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PrateleiraComponent,
    PratItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
