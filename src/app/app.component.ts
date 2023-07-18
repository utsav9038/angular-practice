import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice2';
  
  submitform(item:any){
    console.log(item)

  }
  loginform=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.minLength(5)])
  })
  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }
}
