import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { DeviceService } from '../../services/device/device.service';
import { EmployeeService } from '../../services/employee/employee.service';
import { Device } from '../../class/device';
import { Employee } from '../../class/employee';

@Component({
  selector: 'app-hand-over-device',
  templateUrl: './hand-over-device.component.html',
  styleUrls: ['./hand-over-device.component.scss'],
})
export class HandOverDeviceComponent implements OnInit {
  visible = [false, false];

  device = new Device();
  devices: Device[] = [];
  searchText: string | null | undefined;
  isSubmitting = false;
  employee = new Employee();

  public activePage = 2;

  setActivePage(page: number) {
    this.activePage = page;
  }

  constructor(
    private deviceService: DeviceService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

  ngOnInit(): void {}

  searchEmploy() {
    this.device = new Device();
    this.deviceService.getDevice(this.searchText).subscribe({
      next: (res) => {
        if (res.ok) {
          this.visible[0] = true;
          this.device = res.body!.data;
          console.log(this.device);
          this.employee.employeeId = res.body!.data.employeeId.employeeId;
          this.employee.employeeName = res.body!.data.employeeId.employeeName;
          this.employee.departmentName = res.body!.data.employeeId.departmentId.departmentName;
        } else {
          console.log(res);
        }
      },
      error: (err) => {
        this.visible[0] = false;
        console.log(err);

        if (typeof err !== 'undefined') {
          Swal.fire('Error', 'Invalid Employee Number ', 'warning');
          if (err.statusCode !== 'undefined') {
          } else {
            this.device = new Device();
            console.log(err);
          }
        }
      },
    });
  }
  handover(row: any): void {
    this.deviceService.handoverDevice(row.deviceId).subscribe({
      next: (res) => {
        if (res.ok) {
          console.log(res.ok);
        } else {
        }
      },
      error: (err) => {
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  }
}
