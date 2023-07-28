import { Component, OnInit } from '@angular/core';

import { TransportService } from '../../services/transport/transport.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Transport } from '../../class/transport';

@Component({
  selector: 'app-create-transport',
  templateUrl: './create-transport.component.html',
  styleUrls: ['./create-transport.component.scss']
})
export class CreateTransportComponent implements OnInit {
  transport = new Transport();
  isSubmitting = false;

  constructor(private transportService: TransportService,  private router: Router) { }

  ngOnInit(): void {
  }
  saveTransport() {
    this.transport.transportId = this.transport.transportId;

    console.log(this.transport);
    this.transportService
      .createTransport(this.transport)
      .subscribe(
        (data) => {
          console.log(data);
          Swal.fire('Success', 'Data saved successfully!', 'success');
        },
        (error) => console.log(error)
      );
  }
  onSubmit() {
    this.isSubmitting = true;

    window.location.reload();
  }
}
