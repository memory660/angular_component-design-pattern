import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { V1DrawerComponent } from './v1/v1-drawer/v1-drawer.component';
import { V2DrawerComponent } from './v2/v2-drawer/v2-drawer.component';
import { V3DrawerComponent } from './v3/v3-drawer/v3-drawer.component';
import { V4DrawerComponent } from './v4/v4-drawer/v4-drawer.component';
import { V5DrawerComponent } from './v5/v5-drawer/v5-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    V1DrawerComponent,
    V2DrawerComponent,
    V3DrawerComponent,
    V4DrawerComponent,
    V5DrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
