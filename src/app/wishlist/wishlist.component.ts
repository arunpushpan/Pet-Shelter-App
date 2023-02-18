import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{

  wishlist:any;
  wishlistStatus=''
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
if(this.wishlist.length==0){
  this.wishlistStatus = 'Favourite Pets List is empty'
}

    },
    (result:any)=>{
if(result.error.message){
  this.wishlistStatus = 'Favourite Pets List is empty'
}
    }
    )

  }

// remove pet
  removeItem(productId:any) {
    this.api.removeItemFromWishlist(productId).subscribe( 
      // 200
      (result:any)=>{
    this.wishlist = result.wishlist
    if(this.wishlist.length==0){
      this.wishlistStatus = 'Favourite Pets List is empty'
    }
    },
    // 400
    (result:any)=>{
      alert(result.error.message)
    }
    )
      } 



}
