import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  wishlist:any;
  user:any;
  phone:any;
  // mob:any;

constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {

          // to check whether the account holder is already logged in
if(!localStorage.getItem("token")){
  alert("Please Sign In")

  // navigate to login page
  this.router.navigateByUrl('/')
}

    this.api.getWishlist().subscribe((result:any)=>{
      this.wishlist = result.wishlist
          },
          (result:any)=>{
      if(result.error.message){
      }
          }
          )

          if(localStorage.getItem("username")){
            this.user = localStorage.getItem("username") || ''
            }
            if(localStorage.getItem("currentPhno")){
              this.phone = localStorage.getItem("currentPhno") 
              // this.mob=Number(this.phone)
              
              }
  
  }




}
