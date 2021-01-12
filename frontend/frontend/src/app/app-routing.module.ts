import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoSomethingComponent } from './do-something/do-something.component';
import { InitialComponent } from './initial/initial.component';

const routes: Routes = [
  {
    path: 'do-something',
    component: DoSomethingComponent,
  },
  {
    path: 'code',
    component: InitialComponent
  },
  {
    path: '',
    component: InitialComponent
  }
];

const isIframe = window !== window.parent && !window.opener; // Remove this line to use Angular Universal

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled', // Remove this line to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
