import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { environment } from 'src/environments/environment';
import { DoSomethingComponent } from './do-something/do-something.component';
import { InitialComponent } from './initial/initial.component';

const guards: any[] = environment.production ? [MsalGuard] : [];

const routes: Routes = [
  {
    path: 'do-something',
    component: DoSomethingComponent,
  },
  {
    path: 'code',
    component: InitialComponent,
    canActivate: guards,
  },
  {
    path: '',
    component: InitialComponent,
    canActivate: guards,
  },
];

const isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? 'enabled' : 'disabled', // Remove this line to use Angular Universal
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
