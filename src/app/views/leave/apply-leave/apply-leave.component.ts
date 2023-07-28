import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { EmployeeService } from '../../services/employee/employee.service';
import { LeaveService } from '../../services/leave/leave.service';
import { DatePipe } from '@angular/common';
import { Leave } from '../../class/leave';
import { Employee } from '../../class/employee';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss'],
})
export class ApplyLeaveComponent implements OnInit {
  leave = new Leave();
  isSubmitting = false;
  myValue: string | null = null;
  searchText = '';

  employee = new Employee();

  constructor(
    private leaveService: LeaveService,
    private employeeService: EmployeeService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.leave.beingDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.leave.endDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  onSubmit() {
    this.isSubmitting = true;

    window.location.reload();
  }

  saveLeave() {
    this.leave.employeeId = this.employee.employeeId;
    console.log(this.leave);
    this.leaveService.createLeave(this.leave).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'Data saved successfully!', 'success');
      },
      (error) => console.log(error)
    );
  }
  searchEmploy() {
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
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  }
}
