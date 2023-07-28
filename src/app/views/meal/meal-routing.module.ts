import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestMealComponent } from './request-meal/request-meal.component';

const routes: Routes = [{
  path:'',
  data:{
    title:'Meal'
  },
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'request-meal',
      component: RequestMealComponent,
      data:{
        title:'Request Meal'
      }
    }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MealRoutingModule { }
