import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/views/class/employee';
import { Personalgatepass } from 'src/app/views/class/personalgatepass';

import { EmployeeService } from 'src/app/views/services/employee/employee.service';
import { PersonalgatepassService } from 'src/app/views/services/personalgatepass.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-security-gate-pass',
  templateUrl: './security-gate-pass.component.html',
  styleUrls: ['./security-gate-pass.component.scss'],
})
export class SecurityGatePassComponent implements OnInit {
  visible = [false, false];
  time = new Date();
  personalgatepass = new Personalgatepass();
  personalgatepasses: Personalgatepass[] = [];

  searchText: string | null | undefined;
  isSubmitting = false;
  employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private personalgatepassService: PersonalgatepassService,
    private router: Router
  ) {}

  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }

  ngOnInit(): void {}

  searchEmploy() {
    this.personalgatepass = new Personalgatepass();
    this.personalgatepassService
      .getPersonalgatepass(this.searchText)
      .subscribe({
        next: (res) => {
          if (res.ok) {
            this.visible[0] = true;
            this.personalgatepass = res.body!.data;
            console.log(this.personalgatepass);
            this.employee.employeeId = res.body!.data.employeeId.employeeId;
          } else {
            console.log(res);
          }
        },
        error: (err) => {
          this.visible[0] = false;
          console.log(err);
          if (typeof err !== 'undefined') {
            if (err.statusCode !== 'undefined') {
              Swal.fire('Error', 'Invalid Employee Number ', 'warning');
            } else {
              this.personalgatepass = new Personalgatepass();
              console.log(err);
            }
          }
        },
      });
  }
  saveSecuritygatepass() {
    this.personalgatepass.employeeId = this.employee.employeeId;
    console.log(this.personalgatepass);
    this.personalgatepassService
      .createSecurityPersonalgatepass(this.personalgatepass)
      .subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Success', 'Data saved successfully!', 'success');
        },
        (error) => console.log(error)
      );
  }
}
