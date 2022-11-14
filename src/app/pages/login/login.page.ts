import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  email:string
  password:string
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  login(){
    let credentials={
      email:this.email,
      password:this.password
    }
    this.http.post("http://localhost:3000/users/login",credentials).subscribe(
      res=>{
      console.log(res)
    },
    error=>{
      console.log(error)
    })
    console.log(credentials)
  }

}
