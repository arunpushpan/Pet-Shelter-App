import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-pet',
  templateUrl: './view-pet.component.html',
  styleUrls: ['./view-pet.component.css']
})
export class ViewPetComponent implements OnInit{

  petId:any;
  pet:any=[]

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data['id']);
      this.petId = data['id']
    })

    // requested pet details
  this.api.viewPet(this.petId).subscribe((result:any)=>{
    console.log(result.pet);
    this.pet = result.pet
  })

      // to check whether the account holder is already logged in
if(!localStorage.getItem("token")){
  alert("Please Sign In")

  // navigate to login page
  this.router.navigateByUrl('/')
}

    
  }

  // addtowishlist(pet)
  addtowishlist(newpet:any){
    if(localStorage.getItem("currentPhno")){

    this.api.addtowishlist(newpet)
    .subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )
  }
  }
}
