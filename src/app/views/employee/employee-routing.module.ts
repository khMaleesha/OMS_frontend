import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DesignationComponent } from './designation/designation.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { ManageEmployeeComponent } from './manage-employee/manage-employee.component';


const routes: Routes = [{
  path:'',
  data:{
    title:'Employee'
  },
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },

    {
      path:'employee-reg',
      component: EmployeeRegComponent,
      data:{
        title:'Employee Register'
      }
    },   {
      path:'manage-employee',
      component: ManageEmployeeComponent,
      data:{
        title:'Manage Employee'
      }
    },   {
      path:'department',
      component: DepartmentComponent,
      data:{
        title:'Department'
      }
    },
    {
      path:'designation',
      component: DesignationComponent,
      data:{
        title:'Designation'
      }
    },



  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
