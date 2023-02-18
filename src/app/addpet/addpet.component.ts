import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})
export class AddpetComponent {

  savepetForm = this.sfb.group({
    id:['',[Validators.required, Validators.pattern('[0-9]*')]],
    title:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
 gender:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
 price:['',[Validators.required, Validators.pattern('[0-9]*')]],
 description:['',[Validators.required]],
 size:['',[Validators.required]],
 height:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
 image:['',[Validators.required]],
 weight:['',[Validators.required]],
 coat:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
 energy:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],

//  energy:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
 activities:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
 category:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]]

  })

photo:any

  constructor(private sfb:FormBuilder, private api:ApiService, private router:Router){}


  savepet(){
    if(this.savepetForm.valid){
    let id = this.savepetForm.value.id
    let title = this.savepetForm.value.title 
   let gender = this.savepetForm.value.gender
   let price = this.savepetForm.value.price
   let description = this.savepetForm.value.description
   let size = this.savepetForm.value.size
   let height = this.savepetForm.value.height
   let image = this.savepetForm.value.image
   let weight = this.savepetForm.value.weight
   let coat = this.savepetForm.value.coat
   let energy = this.savepetForm.value.energy
   let activities = this.savepetForm.value.activities
   let category = this.savepetForm.value.category

   this.photo = image

 this.api.savepet(id,
  title,
  gender,
  price,
  description,
  size,
  height,
  image,
  weight,
  coat,
  energy,
  activities,
  category).
    subscribe(
      // success
      (result:any)=>{
        
      alert(result.message)
      // navigate login
 this.router.navigateByUrl('/admin/home')


    },
    // client error
    (result:any)=>{
      alert(result.error.message)
      setTimeout(()=>{
        this.savepetForm.reset()
      },3000)
    })


    }
  else{
    alert("Invalid Form!!")
    this.savepetForm.reset()
  }
  }



}
