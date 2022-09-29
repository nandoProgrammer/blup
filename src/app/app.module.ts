import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/dashboard/main/main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { UrlInterceptor } from './core/interceptors/url.interceptor';

import { AuthGuard } from './core/guards/auth.guard';
import { PagesLoginComponent } from './pages/login/components/pages-login-component/pages-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
