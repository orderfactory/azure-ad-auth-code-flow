import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { DoSomethingComponent } from './do-something/do-something.component';
import { InitialComponent } from './initial/initial.component';
import { LoginComponent } from './login/login.component';
import { UserNameComponent } from './user-name/user-name.component';

@NgModule({
  declarations: [
    AppComponent,
    DoSomethingComponent,
    InitialComponent,
    LoginComponent,
    UserNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
