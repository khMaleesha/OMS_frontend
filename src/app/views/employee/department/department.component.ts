import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { base64StringToBlob } from 'blob-util';
import { DepartmentService } from '../../services/department/department.service';
import { ReportService } from '../../services/report/report.service';
import { Department } from '../../class/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  isSubmitting = false;
  searchDepartment: any;

  isGenerating: boolean = false;

  department: Department = new Department();

  formData: { departmentName: string; status: string; id: number } = {
    departmentName: '',
    status: '',
    id: 0,
  };

  departments: Department[] = [];
  backupData: Department[] = [];
  text: any = [];
  editDep: any = [];

  constructor(
    private http: HttpClient,
    private departmentService: DepartmentService,
    private reportService: ReportService,
    private router: Router
  ) {
    this.departments = [];
  }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  private getAllDepartment() {
    this.departmentService.getDepartmentList().subscribe((data) => {
      console.log(data);

      this.departments = data;
    });
  }
  departmentDetails(id: number) {
    this.router.navigate(['department-details', id]);
  }

  saveDepartment() {
    this.departmentService.createDepartment(this.department).subscribe(
      (data) => {
        console.log(data);

        Swal.fire('Success', 'Data saved successfully!', 'success');
      },
      (error) => console.log(error)
    );
  }
  goToDepartmentList() {
    this.router.navigate(['/getAllDepartment']);
  }

  onSubmit() {
    this.isSubmitting = true;
    console.log(this.department);
    this.saveDepartment();
    this.onEditdata();
    window.location.reload();
    return this.formData.departmentName !== '' && this.formData.status !== '';
  }

  public visible = false;

  toggleLiveDemo() {
    this.visible = !this.visible;
  }
  Edite(data: any) {
    console.log(data);
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  displayStyle = 'none';

  openPopup(department: any) {
    this.editDep = department;
    this.text = department;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Product removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Product still in our database.)', 'error');
      }
    });
  }

  departmentname = '';
  status = '';

  isOnSubmitEmpty(): boolean {
    return !(this.departmentname && this.status);
  }

  clear() {
    console.log('Working');
    this.departments = [];
  }

  deleteItem(row: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is Deactivate Department.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Department Deactivate successfully.', 'success');
        this.departmentService
          .deleteDepartment(row.departmentId)
          .subscribe((data) => {
            setTimeout(() => {
              this.getAllDepartment();
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Department still Active in our database.',
          'error'
        );
      }
    });

    console.log(row);
  }

  handleupdateDepartmentChange(event: any) {
    this.visible = event;
  }

  generateReport = (): void => {
    this.isGenerating = true;

    this.reportService.downloadDeparmentReport().subscribe({
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

  onEditdata() {
    this.departmentService
      .updateDepartment(this.editDep.departmentId, this.editDep.status)
      .subscribe(
        (data) => {
          console.log(data);

          Swal.fire('Success', 'Data Edit successfully!', 'success');
          this.displayStyle = 'none';
        },
        (error) => console.log(error)
      );
  }
}
