import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './ui/app.component';
import {TabularViewComponent} from './ui/tabular-view.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './service/DataService';

@NgModule({
  declarations: [
    AppComponent,
    TabularViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
