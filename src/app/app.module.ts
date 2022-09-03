import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/dashboard/main/main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { UrlInterceptor } from './core/interceptors/url.interceptor';

import { AuthGuard } from './core/guards/auth.guard';
import { PagesLoginComponent } from './pages/login/components/pages-login-component/pages-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
