import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/views/class/employee';
import { Personalgatepass } from 'src/app/views/class/personalgatepass';

import { EmployeeService } from 'src/app/views/services/employee/employee.service';
import { PersonalgatepassService } from 'src/app/views/services/personalgatepass.service';

@Component({
  selector: 'app-departmenthead-approvel',
  templateUrl: './departmenthead-approvel.component.html',
  styleUrls: ['./departmenthead-approvel.component.scss'],
})
export class DepartmentheadApprovelComponent implements OnInit {
  personalgatepass: Personalgatepass = new Personalgatepass();
  data: Personalgatepass | undefined;
  employees: Employee[] = [];
  searchDepartment: any;
  employee = new Employee();
  personalgatepasses: Personalgatepass[] = [];

  personalgatepassId: number | undefined;

  employeeId: number | undefined;
  personalgatepassDate: string | undefined;
  personalgatepassType: string | undefined;
  purpose: string | undefined;
  status: string | undefined;

  constructor(
    private personalgatepassService: PersonalgatepassService,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.personalgatepasses = [];
  }

  ngOnInit(): void {
    this.getAllPersonalgatepass();
    this.getAllEmployee();
  }

  getAllPersonalgatepass() {
    this.personalgatepassService.getPersonalgatepassList(0).subscribe(

      {
        next: (res) => {
          if (res.ok) {
            let personalgatepasses = res.body!.data;
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
      }
    );
  }

  private getAllEmployee() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }
  approvegatepass(row: any): void {
    this.personalgatepassService
      .approvalPersonalgatepass(row.personalgatepassId, 1)
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
}
