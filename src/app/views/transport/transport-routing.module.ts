import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTransportComponent } from './book-transport/book-transport.component';
import { CreateTransportComponent } from './create-transport/create-transport.component';
import { RegisterDriverComponent } from './register-driver/register-driver.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transport'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'book-transport',
        component: BookTransportComponent,
        data: {
          title: 'Book Transport'
        }
      }, {
        path: 'create-transport',
        component: CreateTransportComponent,
        data: {
          title: 'Create Transport'
        }
      },{
        path: 'register-driver',
        component: RegisterDriverComponent,
        data: {
          title: 'Register Driver'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
