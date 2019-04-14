import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { StorageService } from '../../core/storage.service';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

export interface IUser {
  user: string;
  pass: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userData: IUser;
  form: FormGroup

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    this.form = fb.group({
      user: [null, Validators.required],
      pass: [null, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    for (const i in this.form.controls) {
      if (this.form.controls.hasOwnProperty(i)) {
        this.form.controls[i].markAsDirty()
        this.form.controls[i].updateValueAndValidity()
      }
    }

    if (this.form.invalid) {
      return
    }

    this.authService.login(this.form.value).subscribe(
      () => {
        this.router.navigate(['/campList'])
      },
    );
  }
}
