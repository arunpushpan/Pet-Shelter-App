import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  secretKey="admin"

// login group
adminForm = this.fb.group({
  // array
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})

constructor(private fb:FormBuilder, private router: Router){}
signin(){
  if(this.adminForm.valid){

  let pswd = this.adminForm.value.pswd  
  console.log(pswd);
  
  if(pswd == this.secretKey){
   
      // alert("logedd in")
    this.router.navigateByUrl('/admin/home')
 
  }
  else{
    alert("Invalid Key")
    this.adminForm.reset()

  }
}
  else{
    alert('Invalid Form')
  }

}
}

