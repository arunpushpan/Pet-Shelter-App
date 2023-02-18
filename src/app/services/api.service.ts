import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const options={
  headers: new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  searchTerm = new BehaviorSubject('')

  
  // register
  register(uname:any,phno:any,pswd:any,address:any){

    const body={
      
      uname,
      phno,
      pswd,
      address
    }
    // server call to register a member and return response to register component
    return this.http.post('http://localhost:3000/register',body)
  }

  // login
  login(phno:any,pswd:any){
    const body = {
      phno,
      pswd
    }
        // server call to register a member and return response to login component

    return this.http.post('http://localhost:3000/login',body)

  }


 // appending token to http header
 appendToken(){
  // fetch token from local storage
  const token = localStorage.getItem("token")|| ''
  //create http header
  var headers = new HttpHeaders()
  if(token){
     // append token inside headers
  headers= headers.append('access-token',token)
  // overload
  options.headers=headers
  }
 
  return options
  
  
}

  // re-home
  rehome(uname:any, email:any, phno:any, address:any, breed:any, age:any, gender:any, photo:any, rstatus:any){

    const body={
      
      uname, 
      email,
      phno,
      address,
      breed,
      age,
      gender,
      photo,
      rstatus
    }
    // server call to register a pet and return response to register component
    return this.http.post('http://localhost:3000/rehome',body)
  }



  // get all pets api
  getAllPets(){
   return  this.http.get('http://localhost:3000/all-pets')
  }

  // view-pets api
  viewPet(petId:any){
    return this.http.get('http://localhost:3000/view-pets/'+petId,this.appendToken())
   }
 
   // addtowishlist api
   addtowishlist(pet:any){
     return this.http.post('http://localhost:3000/add-to-wishlist',pet,this.appendToken())
   }
   
   //get-wishlist api 
   getWishlist(){
     return this.http.get('http://localhost:3000/get-wishlist',this.appendToken())
   }
 
   // remove-item-wishlist/:petId api call
   removeItemFromWishlist(petId:any){
      return this.http.delete('http://localhost:3000/remove-item-wishlist/'+petId)
    }
     // remove-item-pet/:petId api call
     deletepet(petId:any){
      return this.http.delete('http://localhost:3000/remove-item-pet/'+petId)
    }


    // save pet
  savepet(id:any,
    title:any,
    gender:any,
    price:any,
    description:any,
    size:any,
    height:any,
    image:any,
    weight:any,
    coat:any,
    energy:any,
    activities:any,
    category:any){

    const body={
      
      id,
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
    category
    }
    // server call to register a pet and return response to register component
    return this.http.post('http://localhost:3000/savepet',body)
  }

  //get user applications api 
  getuserapps(){
    return this.http.get('http://localhost:3000/getuserapps')
  }

// remove-item-pet/:petId api call
deleteuserapp(phno:any){
  return this.http.delete('http://localhost:3000/removeuserapp/'+phno)
}

// update status  
updatestatus(id:any,rstatus:any)
{
  const body={
  
    rstatus
  }
  return this.http.put('http://localhost:3000/updatestatus/'+id,body)
}

}
