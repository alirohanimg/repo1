import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroupDirective,NgForm, FormGroup,FormBuilder } from '@angular/forms';
import {NgIf,DatePipe, getLocaleDateTimeFormat} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule,MatRadioGroup} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf,MatButtonModule, MatDividerModule, MatIconModule,MatRadioModule,DatePipe,MatDatepickerModule,MatNativeDateModule,MatTabsModule],
})
export class RegisterComponent {
  matcher = new MyErrorStateMatcher();
  constructor(public fb: FormBuilder) { }
  typeid='2';
  registerform=this.fb.group({
    type:['',[Validators.required]],
    mobile:['',[Validators.required,Validators.pattern('^09[0-9]{9}$')]],
    title:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}$')]],
    confirmPassword:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9].{7,}$')]],
    birthDate:['',[Validators.required,Date]],
    state:['',[Validators.required]],
    city:['',[Validators.required,Validators.minLength(4)]],
    street:['',[Validators.required]],


    imageCard:this.fb.group({
      imageTitle:['']
    })


  })

  typeid1(t:string){
    if (t=='2')
    return('2')
    else
    return('1')

  }


}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




