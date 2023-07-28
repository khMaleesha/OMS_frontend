import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheduleMeatingComponent } from './shedule-meating/shedule-meating.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Meating'
  },
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },

    {
      path: 'shedule-meating',
      component: SheduleMeatingComponent,
      data: {
        title: 'Shedule Meating'
      }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeatingRoutingModule { }
