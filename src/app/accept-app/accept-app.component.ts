import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-accept-app',
  templateUrl: './accept-app.component.html',
  styleUrls: ['./accept-app.component.css']
})
export class AcceptAppComponent implements OnInit{

  contacts:any=[] 
  newcontacts:any=[]
  contactlist:any 

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getuserapps().subscribe((result:any)=>{
      console.log(result.contact);
      this.contacts = result.contact
      this.newcontacts = this.contacts.filter((item:any)=>item.rstatus=="Accepted");
      console.log(this.newcontacts);    
    })

  }

}
