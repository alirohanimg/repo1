import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroupDirective,NgForm, FormGroup,FormBuilder } from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf,MatButtonModule, MatDividerModule, MatIconModule],
})

export class LoginComponent {


  matcher = new MyErrorStateMatcher();


 constructor(private fb: FormBuilder,public http:HttpClient,public router:Router) {};
  loginform=this.fb.group({
    mobileCountry:['',Validators.required],
    mobile:['',[Validators.required,Validators.pattern('^09[0-9]{9}$')]],
   password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}$')]]
  });

  check(){
    this.http.post('https://localhost:7050/adminlogin'
    ,{username:this.loginform.controls.mobile.value,Password:this.loginform.controls.password.value}).subscribe(result =>
     {

     if((result as any).isOK==true){
     this.router.navigateByUrl('/dashboard');
     }
    }

    )
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
