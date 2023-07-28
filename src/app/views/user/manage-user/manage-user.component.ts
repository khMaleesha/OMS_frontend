import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {

  public visible = false;
  editpage1() {
    this.visible = !this.visible;
  }
  editpage() {
    this.visible = !this.visible;
  }

 profilepage() {
    this.visible = !this.visible;
  }
  toggledeletepage(){
    this.visible = !this.visible;
  }
  handleProfilePageChange(event: any) {
    this.visible = event;
  }
  handledeletepageChange(event: any) {
    this.visible = event;
  }

  alertConfirmation() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete?.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Recode removed successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Recode still in our database.', 'error');
      }
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
