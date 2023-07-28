import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: $localize`Home`
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'visitor',
        loadChildren: () =>
          import('./views/visitor/visitor.module').then((m) => m.VisitorModule)
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./views/user/user.module').then((m) => m.UserModule)
      },
      {
        path: 'meal',
        loadChildren: () =>
          import('./views/meal/meal.module').then((m) => m.MealModule)
      },
      {
        path: 'device',
        loadChildren: () =>
          import('./views/device/device.module').then((m) => m.DeviceModule)
      },
      {
        path: 'employee',
        loadChildren: () =>
          import('./views/employee/employee.module').then((m) => m.EmployeeModule)
      },
      {
        path: 'transport',
        loadChildren: () =>
          import('./views/transport/transport.module').then((m) => m.TransportModule)
      },
      {
        path: 'visitor',
        loadChildren: () =>
          import('./views/visitor/visitor.module').then((m) => m.VisitorModule)
      },

      {
        path: 'leave',
        loadChildren: () =>
          import('./views/leave/leave.module').then((m) => m.LeaveModule)
      },

      {
        path: 'gate-pass',
        loadChildren: () =>
          import('./views/gate-pass/gate-pass.module').then((m) => m.GatePassModule)
      },
      {
        path: 'report',
        loadChildren: () =>
          import('./views/report/report.module').then((m) => m.ReportModule)
      },

    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
