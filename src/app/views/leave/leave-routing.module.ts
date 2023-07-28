import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';

const routes: Routes = [{
  path:'',
  data:{
    title:'Leave'
  },
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'apply-leave',
      component: ApplyLeaveComponent,
      data:{
        title:'Apply Leave'
      }
    },
    {
      path:'approve-leave',
      component: ApproveLeaveComponent,
      data:{
        title:'Approve Leave'
      }
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
