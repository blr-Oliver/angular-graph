import {APP_BASE_HREF, PlatformLocation} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './ui/app.component';
import {TabularViewComponent} from './ui/tabular-view.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './service/DataService';
import {GraphViewComponent} from './ui/graph-view.component';
import {GraphBoxComponent} from './ui/graph-box/graph-box.component';

// from https://stackoverflow.com/questions/39287444/angular2-how-to-get-app-base-href-programmatically#answer-46493276
export function getBaseHref(platformLocation: PlatformLocation): string {
  const current = platformLocation.getBaseHrefFromDOM();
  if (!current || current === '/')
    return '';
  return current;
}

@NgModule({
  declarations: [
    AppComponent,
    TabularViewComponent,
    GraphViewComponent,
    GraphBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref,
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
