import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
  
  user_email:string= null;
  user_password:string=null;
  is_valid= false;

  constructor
  (
    private ss:SignupService) 
  {}

  ngOnInit() {}

}
