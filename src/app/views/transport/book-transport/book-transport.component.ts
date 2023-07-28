import { Component, OnInit } from '@angular/core';
import { TransportService } from '../../services/transport/transport.service';
import { EmployeeService } from '../../services/employee/employee.service';
import { Router } from '@angular/router';


import { BooktransportService } from '../../services/booktransport/booktransport.service';
import Swal from 'sweetalert2';
import { Booktransport } from '../../class/booktransport';
import { Employee } from '../../class/employee';

@Component({
  selector: 'app-book-transport',
  templateUrl: './book-transport.component.html',
  styleUrls: ['./book-transport.component.scss']
})
export class BookTransportComponent implements OnInit {
  isSubmitting = false;
  myValue: string | null = null;
  searchText = '';
  employee = new Employee();
  booktransport = new Booktransport();


  colors = [
    { color: 'primary', textColor: 'primary' },
    { color: 'secondary', textColor: 'secondary' },
    { color: 'success', textColor: 'success' },
    { color: 'danger', textColor: 'danger' },
    { color: 'warning', textColor: 'warning' },
    { color: 'info', textColor: 'info' },
    { color: 'light' },
    { color: 'dark' }
  ];
  visible = [false, false];
  public activePage = 2;

  setActivePage(page: number) {
    this.activePage = page;
  }

  constructor(  private transportService: TransportService,
    private employeeService: EmployeeService, private booktransportService:BooktransportService,
    private router: Router, ) { }
  toggleCollapse(id: number): void {
    this.visible[id] = !this.visible[id];
  }


  ngOnInit(): void {
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
          if (err.statusCode !== 'undefined') {
          } else {
            console.log(err);
          }
        }
      },
    });
  }

  saveBooktransport() {
    this.booktransport.id = this.booktransport.id;
    console.log(this.booktransport);
    this.booktransportService.createBooktransport(this.booktransport).subscribe(
      (data) => {
        Swal.fire('Success', 'Data saved successfully!', 'success');
        console.log(data);
      },
      (error) => console.log(error)


    );
  }
  onSubmit() {
    this.isSubmitting = true;

    window.location.reload();
  }
}

