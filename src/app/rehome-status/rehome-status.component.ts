import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-rehome-status',
  templateUrl: './rehome-status.component.html',
  styleUrls: ['./rehome-status.component.css']
})
export class RehomeStatusComponent implements OnInit{

 phno:any
  contacts:any=[] 
  newcontacts:any=[]
  constructor(private api:ApiService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data['id']);
      this.phno = data['id']
console.log(this.phno);

    })

    this.api.getuserapps().subscribe((result:any)=>{
      this.contacts = result.contact
      this.newcontacts = this.contacts.filter((item:any)=>item.phno==this.phno);
      console.log(this.newcontacts);    
    })
  }



}
