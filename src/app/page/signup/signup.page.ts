import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit 
{
  user_email:string= null;
  user_password:string=null;
  is_valid= false;

  constructor
  (
    private ss:SignupService) 
  {}
  
  


  ngOnInit() {
  }
  submitSignup(){
    console.log(this.user_email,this.user_password)

    this.ss.signUpFirebase(this.user_email,this.user_password).then(res=>{
      console.log('success',res)

    }).catch(err=>{
      console.log('error',err);
      
    });

   
  }
  
}

  
