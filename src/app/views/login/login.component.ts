import { Component, OnInit, ViewChild } from '@angular/core';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular-pro';
import { AuthService } from '../services/auth.service';
import { AppToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  placement = ToasterPlacement.TopEnd;

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      txt_username: new FormControl('', Validators.required),
      txt_password: new FormControl('', Validators.required)
    });
  }

  login = (): void => {
    let loginFormValue = this.loginForm.value;
    this.authService.authenticate(loginFormValue.txt_username, loginFormValue.txt_password).subscribe({
      next: (res) => {
        const authResponse = res.body!.data
        const user = {
          username: authResponse.userName,
          token: authResponse.tokenType + " " + authResponse.accessToken,
          permissions: authResponse.userPermissions,
        };
        sessionStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('menuItems', authResponse.menuItems);
        this.router.navigate(['oms/dashboard']);
      },
      error: (err) => {
        if (typeof err !== 'undefined') {
          if (err.statusCode !== 'undefined') {
            if (err.statusCode == '404') {
              this.toaster.addToast(AppToastComponent, {
                title: `ALERT !!!`,
                text: `Username or Password is invalid.`,
                delay: 5000,
                placement: ToasterPlacement.TopCenter,
                color: 'danger',
                autohide: true,
              });
            } else {
              this.toaster.addToast(AppToastComponent, {
                title: `ALERT !!!`,
                text: err.message,
                delay: 5000,
                placement: ToasterPlacement.TopEnd,
                color: 'danger',
                autohide: true,
              });
            }
          } else {
            console.log(err);
          }
        }
      },
    });
  }

  logout = (): void => {
    sessionStorage.clear();
  }

}
