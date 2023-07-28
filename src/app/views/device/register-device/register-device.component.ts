import { Component, OnInit } from '@angular/core';

import { DeviceService } from '../../services/device/device.service';
import { EmployeeService } from '../../services/employee/employee.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { Department } from '../../class/department';
import { Device } from '../../class/device';
import { Employee } from '../../class/employee';

@Component({
  selector: 'app-register-device',
  templateUrl: './register-device.component.html',
  styleUrls: ['./register-device.component.scss'],
})
export class RegisterDeviceComponent implements OnInit {
  device = new Device();
  isSubmitting = false;
  myValue: string | null = null;
  searchText = '';
  department = new Department();
  employee = new Employee();


  constructor(
    private deviceService: DeviceService,
    private employeeService: EmployeeService,

    private router: Router
  ) {}

  ngOnInit(): void {}
  searchEmployee() {
    this.employeeService.getEmployee(this.searchText).subscribe({
      next: (res) => {
        if (res.ok) {
          this.employee = res.body!.data;
          console.log(this.employee);
          this.employee.departmentName =
            res.body!.data.departmentId.departmentName;
        } else {
        }
      },
      error: (err) => {
        if (typeof err !== 'undefined') {
          Swal.fire('Error', 'Invalid Employee Number ', 'warning');
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  }

  saveDevice() {
    this.device.employeeId = this.employee.employeeId;
    console.log(this.device);
    this.deviceService.createDevice(this.device).subscribe(
      (data) => {
        Swal.fire('Success', 'Data saved successfully!', 'success');
        console.log(data);

      },
      (error) => console.log(error)
    );
  }
}
