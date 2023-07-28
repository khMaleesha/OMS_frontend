import { Component, OnInit } from '@angular/core';
import { cilDelete, cilList, cilShieldAlt, cilPen } from '@coreui/icons';
import Swal from 'sweetalert2';

import { EmployeeService } from '../../services/employee/employee.service';
import { Router } from '@angular/router';

import { DepartmentService } from '../../services/department/department.service';
import { ReportService } from '../../services/report/report.service';
import { base64StringToBlob } from 'blob-util';
import { HttpClient } from '@angular/common/http';
import { Department } from '../../class/department';
import { Employee } from '../../class/employee';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.scss'],
})
export class ManageEmployeeComponent implements OnInit {
  isSubmitting = false;
  searchEmployee: any;
  employee: Employee = new Employee();
  department: Department = new Department();
  text: any = [];
  isGenerating: boolean = false;
  employees: Employee[] = [];
  departments: Department[] = [];
  backupData: Employee[] = [];
  searchText = '';


  changePage($event: any) {}
  icons = { cilDelete, cilShieldAlt, cilPen };

  public visible = false;
  currentPage: any;

  editpage1() {
    this.visible = !this.visible;
  }
  editpage() {
    this.visible = !this.visible;
  }

  profilepage() {
    this.visible = !this.visible;
  }
  toggledeletepage() {
    this.visible = !this.visible;
  }
  handleProfilePageChange(event: any) {
    this.visible = event;
  }
  handledeletepageChange(event: any) {
    this.visible = event;
  }



  constructor(
    private http: HttpClient,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private reportService: ReportService,
    private router: Router
  ) {
    this.employees = [];
    this.departments = [];
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartment();
  }
  private getAllEmployee() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      console.log(data);
      this.employees = data;
    });
  }
  private getAllDepartment() {
    this.departmentService.getDepartmentList().subscribe((data) => {
      console.log(data);
      this.departments = data;
    });
  }
EmployeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }


  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
  departmentDetails(id: number) {
    this.router.navigate(['department-details', id]);
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'Data saved successfully!', 'success');
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/getAllEmployee']);
  }
  goToDepartmentList() {
    this.router.navigate(['/getAllDepartment']);
  }

  onSubmit() {
    this.isSubmitting = true;
    console.log(this.employee);
    this.saveEmployee();
    window.location.reload();
  }


  generateReport = (): void => {
    this.isGenerating = true;

    this.reportService.downloadEmployeeReport().subscribe({
      next: (res) => {
        const responseBody: any = res.body;
        const blob = base64StringToBlob(
          responseBody.encodedFile,
          'application/octet-stream'
        );
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = responseBody.fileName;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
        this.isGenerating = false;
      },
      error: (err) => {
        this.isGenerating = false;
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  };

  searchEmploy() {
    this.employee= new Employee;
    this.employeeService.getEmployee(this.searchText).subscribe({
      next: (res) => {
        if (res.ok) {

          this.employee = res.body!.data;
          console.log(this.employee);
          this.employee.employeeId =
            res.body!.data.employeeId.employeeId;
          // this.employee.departmentName =
          //   res.body!.data.departmentId.departmentName;
        } else {
          console.log(res);
        }
      },
      error: (err) => {

        console.log(err);
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
          } else {
            this.employee = new Employee();
            console.log(err);
          }
        }
      },
    });
  }
  deleteItem(row: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is Deactivate Employee.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Employee Deactivate successfully.', 'success');
        this.employeeService
          .deleteEmployee(row.employeeId)
          .subscribe((data) => {
            setTimeout(() => {
              this.getAllEmployee();
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Employee still Active in our database.',
          'error'
        );
      }
    });

    console.log(row);
  }


  

}
