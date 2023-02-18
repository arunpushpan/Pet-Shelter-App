import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-reject-app',
  templateUrl: './reject-app.component.html',
  styleUrls: ['./reject-app.component.css']
})
export class RejectAppComponent implements OnInit{
  contacts:any=[] 
  newcontacts:any=[]
  contactlist:any 

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getuserapps().subscribe((result:any)=>{
      console.log(result.contact);
      this.contacts = result.contact
      this.newcontacts = this.contacts.filter((item:any)=>item.rstatus=="Rejected");
      console.log(this.newcontacts);    
    })

  }
}
