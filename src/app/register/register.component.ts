import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    // array
    uname:['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],
    phno:['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    address:['',[Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]

  })

  constructor(private fb:FormBuilder, private api:ApiService, private router:Router){ }

  register(){
    if(this.registerForm.valid){
    let uname = this.registerForm.value.uname
    let phno = this.registerForm.value.phno
    let pswd = this.registerForm.value.pswd
    let address = this.registerForm.value.address

    this.api.register(uname,phno,pswd,address).
    subscribe(
      // success
      (result:any)=>{
      alert(result.message)
      // navigate login
this.router.navigateByUrl('login')

    },
    // client error
    (result:any)=>{
      alert(result.error.message)
      setTimeout(()=>{
        
      },3000)
    })
    }
  else{
    alert("Invalid Form!!")
  }
  }

}
