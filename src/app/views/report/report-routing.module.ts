import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealComponent } from './meal/meal.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [
  {
    path:'',
    data:{
      title:'Report'
    },
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'meal-report',
        component: MealComponent,
        data:{
          title:'Meal Report'
        }
      },
      {
        path:'leave-report',
        component:LeaveComponent,
        data:{
          title:'Leave Report'
        }
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ReportRoutingModule {


}
