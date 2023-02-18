import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private api:ApiService) {}

signInButton:boolean=false
user:string=''



  ngOnInit(): void {

// to check whether the account holder is already logged in
if(!localStorage.getItem("token")){
  // alert("Please Sign In")
  // navigate to login page
  // this.router.navigateByUrl('/')

  this.signInButton=true
  
}
if(localStorage.getItem("username")){
  this.user = localStorage.getItem("username") || ''
  }

  }

  // logout
logout(){

  localStorage.removeItem("token")
  localStorage.removeItem("username")
  localStorage.removeItem("currentPhno")

    // navigate to login page
    this.router.navigateByUrl('/')
      window.location.reload()

}

searchByName(event:any){
  let searchName = event.target.value
  this.api.searchTerm.next(searchName)
  
}

}
