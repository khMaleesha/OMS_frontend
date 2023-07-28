import { Component, OnInit } from '@angular/core';

import { LeaveService } from '../../services/leave/leave.service';
import { Router } from '@angular/router';

import { EmployeeService } from '../../services/employee/employee.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../class/employee';
import { Leave } from '../../class/leave';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.scss'],
})
export class ApproveLeaveComponent implements OnInit {
  leave: Leave = new Leave();
  leaves: Leave[] = [];
  employee: Employee = new Employee();
  employees: Employee[] = [];
  searchText = '';
  isSubmitting = false;
  visible = [false, false];
  public activePage = 2;
  setActivePage(page: number) {
    this.activePage = page;
  }

  constructor(
    private http: HttpClient,
    private leaveService: LeaveService,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.leaves = [];
  }
  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

  ngOnInit(): void {
    this.getAllLeave();
  }


  getAllLeave(): void {
    this.leaveService.getLeaveList().subscribe({
      next: (res) => {
        if (res.ok) {
          console.log(res.ok);
          this.leaves = res.body!.data;
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

  // searchEmploy(id: number): void {
  //   this.visible[id] = !this.visible[id];
  //   this.employeeService.getEmployee(this.searchText).subscribe({
  //     next: (res) => {
  //       if (res.ok) {
  //         this.employee = res.body!.data;
  //         console.log(this.employee);

  //         this.employee.departmentName =
  //           res.body!.data.departmentId.departmentName;
  //       } else {
  //       }
  //     },
  //     error: (err) => {
  //       if (typeof err !== 'undefined') {
  //         if (err.statusCode !== 'undefined') {
  //         } else {
  //           console.log(err);
  //         }
  //       }
  //     },
  //   });
  // }

  approveleave(row: any): void {
    this.leaveService.approvalLeave(row.leaveId).subscribe({
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
  onSubmit() {
    window.location.reload();
    this.isSubmitting = true;
  }
}
