import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit{

  pets:any=[] 
  searchKey:string=""
  petlist:any 

constructor(private sfb:FormBuilder, private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.api.getAllPets().subscribe((result:any)=>{
      console.log(result.pets);
      this.pets = result.pets
      console.log(this.pets);


       
    })
  }

  search(event:any){
    this.searchKey=  event.target.value;
    // this.filterName = false

  }



// remove pet
deletepet(petId:any) {
  this.api.deletepet(petId).subscribe( 
    // 200
    (result:any)=>{
  this.petlist = result.petlist
  window.location.reload()
  if(this.petlist.length==0){
    // this.wishlistStatus = 'Favourite Pets List is empty'
  }
  },
  // 400
  (result:any)=>{
    alert(result.error.message)
  }
  )
    } 


 


}
