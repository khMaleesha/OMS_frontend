import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { BookTransportComponent } from './book-transport/book-transport.component';
import { AlertModule, BadgeModule, ButtonModule, CardModule, CollapseModule, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule, ToastModule} from '@coreui/angular-pro';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterDriverComponent } from './register-driver/register-driver.component';
import { CreateTransportComponent } from './create-transport/create-transport.component';


@NgModule({
  declarations: [
    BookTransportComponent,
    RegisterDriverComponent,
    CreateTransportComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CollapseModule,
    ButtonModule,
    TableModule,
    AlertModule,
PaginationModule,
BadgeModule,
ModalModule,
    SharedModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }
