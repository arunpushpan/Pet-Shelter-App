import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit{

  searchKey:string=""
  searchItem:string=""
pets:any=[] 
filterName=false;
  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.getAllPets().subscribe((result:any)=>{
      console.log(result.pets);
      this.pets = result.pets
      console.log(this.pets);


       
    })


    // search by name[header component]
    this.api.searchTerm.subscribe((result:any)=>{
      console.log(result);
      this.filterName = true

      this.searchItem = result
    })
  }

  // search by category[all-pets component]
  search(event:any){
    this.searchKey=  event.target.value;
    this.filterName = false

  }

    
    
}
