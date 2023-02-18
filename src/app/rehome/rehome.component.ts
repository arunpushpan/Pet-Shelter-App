import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-rehome',
  templateUrl: './rehome.component.html',
  styleUrls: ['./rehome.component.css']
})
export class RehomeComponent implements OnInit{
  rehomeForm = this.rhfb.group({
    // array
    uname:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required, Validators.pattern('[0-9a-zA-Z@.]*')]],
 phno:['',[Validators.required, Validators.pattern('[0-9]*')]],
 address:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
 breed:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
 age:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
 gender:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
 photo:['',[Validators.required]]

  })

  

  constructor(private rhfb:FormBuilder, private api:ApiService, private router:Router){ }
  ngOnInit(): void {
      // to check whether the account holder is already logged in
if(!localStorage.getItem("token")){
  alert("Please Sign In")
  // navigate to login page
  this.router.navigateByUrl('/')
}


  }

 



  rehome(){
    if(this.rehomeForm.valid){
    let uname = this.rehomeForm.value.uname
    let email = this.rehomeForm.value.email
    let phno = this.rehomeForm.value.phno
    let address = this.rehomeForm.value.address
    let breed = this.rehomeForm.value.breed
    let age = this.rehomeForm.value.age
    let gender = this.rehomeForm.value.gender   
    let photo = this.rehomeForm.value.photo

let rstatus="Pending"

 this.api.rehome(uname,email,phno,address,breed,age,gender,photo,rstatus).
    subscribe(
      // success
      (result:any)=>{
        
      alert(result.message)
      // navigate login
// this.router.navigateByUrl('/')
this.rehomeForm.reset()

    },
    // client error
    (result:any)=>{
      alert(result.error.message)
      setTimeout(()=>{
        this.rehomeForm.reset()
      },3000)
    })

    }
  else{
    alert("Invalid Form!!")
  }
  }


}
