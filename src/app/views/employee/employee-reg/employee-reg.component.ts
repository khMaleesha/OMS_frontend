import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from '../../class/employee';
// import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.scss']
})
export class EmployeeRegComponent implements OnInit {

  employee = new Employee();

  public date = new Date();

  delMinDate!: string | null

  constructor(private employeeService: EmployeeService) { }
  ngOnInit(): void {

  }
  employeeform = new FormGroup({
    employeeName: new FormControl("", [Validators.required]),
    employee_number: new FormControl("", [Validators.required]),
    second_name: new FormControl("", [Validators.required]),
    surName: new FormControl("", [Validators.required]),
    nic: new FormControl("", [Validators.required, Validators.pattern(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/)]),
    birthday: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    bloodGroup: new FormControl("", [Validators.required]),
    departmentId: new FormControl("", [Validators.required]),
    designation_id: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    meritial_tatus: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    home: new FormControl("", [Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl("", [Validators.email]),
    emergencyContactname: new FormControl("", [Validators.required]),
    emergency_mobile: new FormControl("", [Validators.required]),
    emergency_relation: new FormControl("", [Validators.required]),
    emergency_address: new FormControl("", [Validators.required]),

  });

  saveDepartment() {
    console.log(this.employeeform);
  }
  get employeeName(): FormControl {
    return this.employeeform.get("first_name") as FormControl;
  }
  get SecondName() {
    return this.employeeform.get("secondname") as FormControl;
  }
  get SurName() {
    return this.employeeform.get("surName") as FormControl;
  }
  get Nic() {
    return this.employeeform.get("nic") as FormControl;
  }
  get BirthDay() {
    return this.employeeform.get("birthday") as FormControl;
  }
  get BloodGroup() {
    return this.employeeform.get("bloodGroup") as FormControl;
  }
  get DepartmentId() {
    return this.employeeform.get("departmentId") as FormControl;
  }
  get Gender() {
    return this.employeeform.get("gender") as FormControl;
  }
  get MaritialStatus() {
    return this.employeeform.get("maritial_status") as FormControl;
  }
  get Email() {
    return this.employeeform.get("email") as FormControl;
  }
  get HomeTp() {
    return this.employeeform.get("home") as FormControl;
  }
  get ContactName() {
    return this.employeeform.get("emergency_contact_name") as FormControl;
  }
  get Address() {
    return this.employeeform.get("address") as FormControl;
  }
  get Relation() {
    return this.employeeform.get("emergency_relation") as FormControl;
  }
  get Mobile() {
    return this.employeeform.get("mobile") as FormControl;
  }
  get Department() {
    return this.employeeform.get("department_id") as FormControl;
  }
  get Designation() {
    return this.employeeform.get("designationId") as FormControl;
  }
  get Emobile() {
    return this.employeeform.get("emergency_mobile") as FormControl;
  }
  get Eaddress() {
    return this.employeeform.get("emergency_address") as FormControl;
  }
  get EmergencyContactname() {
    return this.employeeform.get("emergencyContactname") as FormControl;
  }
  get EmergencyMobile() {
    return this.employeeform.get("emergencyMobile") as FormControl;
  }
  get EmergencyAddress() {
    return this.employeeform.get("emergencyAddress") as FormControl;
  }
  get EmergencyRelation() {
    return this.employeeform.get("emergencyRelation") as FormControl;
  }

  clicksub() {

    console.log(this.employeeform.value);
    this.employeeform.reset();
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      res => {
        if (res.ok) {
          console.log(res);
        } else {

        }
      },
      err => {
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    );

  }
  clear() {
    console.log("Test");
  }
  clearInput() {
    console.log(this.employee);
    this.employeeService.createEmployee(this.employee).subscribe((response) => {
      console.log(response);
      this.employee = new Employee();
    });
  }
}

