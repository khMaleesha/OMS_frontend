import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/views/class/employee';
import { Personalgatepass } from 'src/app/views/class/personalgatepass';

import { EmployeeService } from 'src/app/views/services/employee/employee.service';
import { PersonalgatepassService } from 'src/app/views/services/personalgatepass.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-gate-pass',
  templateUrl: './create-gate-pass.component.html',
  styleUrls: ['./create-gate-pass.component.scss'],
})
export class CreateGatePassComponent implements OnInit {
  personalgatepass = new Personalgatepass();
  isSubmitting = false;
  myValue: string | null = null;
  searchText = '';
  employee = new Employee();
  myForm: FormGroup | undefined;

  formData: { departmentName: string; employeeName: string } = {
    departmentName: '',
    employeeName: '',
  };

  constructor(
    private personalgatepassService: PersonalgatepassService,
    private employeeService: EmployeeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      employeeName: ['', Validators.required],
    });
  }

  goToDepartmentList() {
    this.router.navigate(['/getAllPersonalgatepass']);
  }
  onSubmit() {
    console.log(this.personalgatepass);
  }
  savePersonalgatepass() {
    this.personalgatepass.employeeId = this.employee.employeeId;

    console.log(this.personalgatepass);
    this.personalgatepassService
      .createPersonalgatepass(this.personalgatepass)
      .subscribe(
        (data) => {
          Swal.fire('Success', 'Data saved successfully!', 'success');
          console.log(data);
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
          Swal.fire('Error', 'Invalid Employee Number ', 'warning');
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  }
}
