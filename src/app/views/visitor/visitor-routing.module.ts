import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageVisitorComponent } from './manage-visitor/manage-visitor.component';

import { VisitorAppointmentComponent } from './visitor-appointment/visitor-appointment.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'visitor'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'manage-visitor',
        component: ManageVisitorComponent,
        data: {
          title: 'Manage Visitor '
        }
      },
      {
        path: 'visitor-appointment',
        component: VisitorAppointmentComponent,
        data: {
          title: 'Visitor Appointment '
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
