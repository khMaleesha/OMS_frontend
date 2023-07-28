import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandOverDeviceComponent } from './hand-over-device/hand-over-device.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';

const routes: Routes = [{
  path:'',
  data:{
    title:'Device'
  },
  children:[
    {
      path:'',
      redirectTo:'dashboard',
      pathMatch:'full'
    },
    {
      path:'hand-over-device',
      component: HandOverDeviceComponent,
      data:{
        title:'Hand Over Device'
      }
    },   {
      path:'register-device',
      component: RegisterDeviceComponent,
      data:{
        title:'Register Device'
      }
    },  



  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
