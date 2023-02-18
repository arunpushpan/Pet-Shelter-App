import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-viewuserapp',
  templateUrl: './viewuserapp.component.html',
  styleUrls: ['./viewuserapp.component.css']
})
export class ViewuserappComponent implements OnInit{

  updateForm = this.fb.group({
    rstatus:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],

  })

  contacts:any=[] 
  newcontacts:any=[]
  contactlist:any 
  contactstatus:boolean=false
  constructor(private api:ApiService,private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.api.getuserapps().subscribe((result:any)=>{
      console.log(result.contact);
      this.contacts = result.contact
      this.newcontacts = this.contacts.filter((item:any)=>item.rstatus=="Pending");
      console.log(this.newcontacts);
      
if(this.newcontacts.length==0){
  this.contactstatus = true
}

       
    })

  }



// // remove pet
// deleteuserapp(phno:any) {
//   this.api.deleteuserapp(phno).subscribe( 
//     // 200
//     (result:any)=>{
//       alert('User Application Received')
//   this.contactlist = result.contactlist
//   window.location.reload()
//   if(this.contactlist.length==0){
//   }
//   },
//   // 400
//   (result:any)=>{
//     alert(result.error.message)
//   }
//   )
//     } 



updatestatus(id:any){
  if(this.updateForm.valid){
    let rstatus = this.updateForm.value.rstatus   

this.api.updatestatus(id,rstatus).subscribe((result:any)=>{
  alert("User Application Status Changed...")
     this.contactlist = result.contactlist

},
(result:any)=>{
alert(result.error.message)

}
)

  }
  else{
    alert("Invalid Entrty")
  }
}



}
