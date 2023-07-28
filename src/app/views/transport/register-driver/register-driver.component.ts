import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { DriverService } from '../../services/driver/driver.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Driver } from '../../class/driver';

@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.scss']
})
export class RegisterDriverComponent implements OnInit {
  isSubmitting = false;

  driver: Driver = new Driver();
  public visible = false;

  drivers: Driver[] = [];
  backupData: Driver[] = [];
  text: any = [];
  editDer: any = [];

  displayStyle = 'none';

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }




  constructor(private driverService:DriverService,private router:Router, private http: HttpClient){
    this.drivers = [];

  }

  ngOnInit(): void {
    this.getAllDriver();

  }
  private getAllDriver(){
    this.driverService.getDriverList().subscribe(data=>{
      console.log(data);
      this.drivers= data;

    });
  }
  saveDriver(){
    console.log(this.driver);
    this.driverService.createDriver(this.driver).subscribe(data=>{
      console.log(data);
      Swal.fire('Success', 'Data saved successfully!', 'success');
      window.location.reload();

    },
    error=>console.log(error));
  }
  goToDriver(){
    this.router.navigate(['/getAllDriver']);
  }

  onSubmit(){
    this.isSubmitting = true;
    console.log(this.driver);
    this.saveDriver();
    this.onEditdata();
    window.location.reload();


  }
  driverDetails(id: number){
    this.router.navigate(['driver-details', id]);
  }
  Edite(data: any) {
    console.log(data);
  }
  openPopup(driver: any) {
    this.editDer = driver;
    this.text = driver;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }

  handleupdateDriverChange(event: any) {
    this.visible = event;
  }
  onEditdata() {
    this.driverService
      .updateDriver(this.editDer.driverId, this.editDer.fullName,this.editDer.nic,this.editDer.contact,this.editDer.address,this.editDer.bloodGroup)
      .subscribe(
        (data) => {
          console.log(data);

          Swal.fire('Success', 'Data Edit successfully!', 'success');
          this.displayStyle = 'none';
        },
        (error) => console.log(error)
      );
  }
  deleteItem(row: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is Deactivate Driver.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', ' Driver successfully.', 'success');
        this.driverService
          .deleteDriver(row.driverId)
          .subscribe((data) => {
            setTimeout(() => {
              this.getAllDriver();
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Driver still Active in our database.',
          'error'
        );
      }
    });

    console.log(row);
  }

}
