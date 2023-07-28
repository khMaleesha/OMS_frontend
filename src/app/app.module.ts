import { DatePipe, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultAsideComponent,
  DefaultFooterComponent,
  DefaultHeaderComponent,

  DefaultLayoutComponent
} from './containers';

import {
  AlertModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonModule,
  FooterModule,
  GridModule,

  HeaderModule,
  NavModule,
  PaginationModule,
  SharedModule,
  SidebarModule,
  TableModule,
  TabsModule
} from '@coreui/angular-pro';

import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { AuthInterceptor } from './interceptors/request.interceptor';







const APP_CONTAINERS = [
  DefaultAsideComponent,
  DefaultFooterComponent,
  DefaultHeaderComponent,

  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BreadcrumbModule,
    FooterModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    TabsModule,
    TableModule,
    ButtonModule,
    SidebarModule,
    HttpClientJsonpModule,
    HttpClientModule,
    AlertModule,
    PaginationModule,
    SharedModule,
    BadgeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    DatePipe,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
