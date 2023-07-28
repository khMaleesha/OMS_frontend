import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { base64StringToBlob } from 'blob-util';
import Swal from 'sweetalert2';

import { DesignationService } from '../../services/designation/designation.service';
import { ReportService } from '../../services/report/report.service';
import { Designation } from '../../class/designation';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss'],
})
export class DesignationComponent implements OnInit {
  searchDesignation: any;
  isSubmitting = false;
  text: any = [];
  editDes: any = [];

  designations: Designation[] = [];
  backupData: Designation[] = [];
  isGenerating: boolean = false;

  public visible = false;
  designation: Designation = new Designation();

  formData: { designationName: string; status: string; id: number } = {
    designationName: '',
    status: '',
    id: 0,
  };
  designationName: any;
  status: any;

  constructor(
    private http: HttpClient,
    private designationService: DesignationService,
    private reportService: ReportService,
    private router: Router
  ) {
    this.designations = [];
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  ngOnInit(): void {
    this.getAllDesignation();
  }

  private getAllDesignation() {
    this.designationService.getDesignationList().subscribe((data) => {
      console.log(data);
      this.designations = data;
    });
  }

  saveDesignation() {
    this.designationService.createDesignation(this.designation).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Success', 'Data saved successfully!', 'success');
      },
      (error) => console.log(error)
    );
  }
  goToDesignationList() {
    this.router.navigate(['/getAllDesignation']);
  }

  onSubmit() {
    this.isSubmitting = true;
    console.log(this.designation);
    this.saveDesignation();
    window.location.reload();

    return this.formData.designationName !== '' && this.formData.status !== '';
  }
  designationDetails(id: number) {
    this.router.navigate(['designation-details', id]);
  }

  Edite(data: any) {
    console.log(data);
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
        this.designationService
          .deleteDesignation(row.designationId)
          .subscribe((data) => {
            setTimeout(() => {
              this.getAllDesignation();
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
  onEditdata() {
    this.designationService
      .updateDesignation(this.editDes.designationId, this.editDes.status)
      .subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Success', 'Data Edit successfully!', 'success');
          this.displayStyle = 'none';
        },
        (error) => console.log(error)
      );
  }

  displayStyle = 'none';

  openPopup(designation: any) {
    console.log(designation);

    this.text = designation;
    this.editDes = designation;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  handleupdateDesignationChange(event: any) {
    this.visible = event;
  }

  generateReport = (): void => {
    this.isGenerating = true;

    this.reportService.downloadDesignationReport().subscribe({
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
  isOnSubmitEmpty(): boolean {
    return !(this.designationName && this.status);
  }
  clear() {
    console.log('Working');
    this.designations = [];
  }
}
