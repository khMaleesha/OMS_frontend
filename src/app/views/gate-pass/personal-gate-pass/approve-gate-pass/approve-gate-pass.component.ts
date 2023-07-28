import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/views/class/employee';
import { Personalgatepass } from 'src/app/views/class/personalgatepass';

import { EmployeeService } from 'src/app/views/services/employee/employee.service';
import { PersonalgatepassService } from 'src/app/views/services/personalgatepass.service';

@Component({
  selector: 'app-approve-gate-pass',
  templateUrl: './approve-gate-pass.component.html',
  styleUrls: ['./approve-gate-pass.component.scss'],
})
export class ApproveGatePassComponent implements OnInit {
  personalgatepass: Personalgatepass = new Personalgatepass();
  employee: Employee = new Employee();
  personalgatepasses: Personalgatepass[] = [];
  employees: Employee[] = [];
  databaseIntValue: number = 0;

  visible = [false, false];
  public activePage = 2;

  setActivePage(page: number) {
    this.activePage = page;
  }
  constructor(
    private http: HttpClient,
    private personalgatepassService: PersonalgatepassService,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.personalgatepasses = [];
    this.employees = [];
  }
  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

  ngOnInit(): void {
    this.getAllPersonalgatepass();
    this.getAllEmployee();
  }

  getAllPersonalgatepass() {
    this.personalgatepassService.getPersonalgatepassList(1).subscribe({
      next: (res) => {
        if (res.ok) {
          this.personalgatepasses = res.body!.data;
        } else {
          console.log(res);
        }
      },
      error: (err) => {
        console.log(err);
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
          } else {
            this.personalgatepass = new Personalgatepass();
            console.log(err);
          }
        }
      },
    });
  }

  private getAllEmployee() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }

  approvegatepass(row: any): void {
    this.personalgatepassService
      .finalapprovalPersonalgatepass(row.personalgatepassId, 2)
      .subscribe({
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

  handleButtonClick() {
    this.doSomethingWithIntValue(this.databaseIntValue);
  }

  doSomethingWithIntValue(status: number) {
    console.log('The integer value is:', status);
  }
}
