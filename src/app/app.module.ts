import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CreateAccountComponent } from './pages/login/create-account/create-account.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { NewPasswordComponent } from './pages/login/new-password/new-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { UrlInterceptor } from './core/interceptors/url.interceptor';

import { AuthGuard } from './core/guards/auth.guard';

import { ButtonComponent } from './pages/login/components/button/button.component';
import { MainComponent } from './pages/dashboard/main/main.component';
import { LoginComponent } from './pages/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    VerifyEmailComponent,
    NewPasswordComponent,
    MainComponent,
    ButtonComponent
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
