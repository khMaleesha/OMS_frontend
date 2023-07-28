import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGatePassComponent } from './personal-gate-pass/create-gate-pass/create-gate-pass.component';
import { ApproveGatePassComponent } from './personal-gate-pass/approve-gate-pass/approve-gate-pass.component';
import { SecurityGatePassComponent } from './personal-gate-pass/security-gate-pass/security-gate-pass.component';
import { DepartmentheadApprovelComponent } from './personal-gate-pass/departmenthead-approvel/departmenthead-approvel.component';

const routes: Routes = [{
  path:'',
  data:{
    title:'Gate Pass'
  },
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'personal-gate-pass/create-gate-pass',
      component: CreateGatePassComponent,
      data:{
        title:'Create Gatepass'
      }
    },   {
      path:'personal-gate-pass/approve-gate-pass',
      component: ApproveGatePassComponent,
      data:{
        title:'Approve Gatepass'
      }
    },
    {
      path:'personal-gate-pass/security-gate-pass',
      component: SecurityGatePassComponent,
      data:{
        title:'Security Gatepass'
      }
    },
    {
      path:'personal-gate-pass/departmenthead-approvel',
      component: DepartmentheadApprovelComponent,
      data:{
        title:'Department Head Approvel'
      }
    },




  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatePassRoutingModule { }
