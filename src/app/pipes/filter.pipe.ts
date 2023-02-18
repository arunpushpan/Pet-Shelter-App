import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allPets:[], searchKey:string, propName:string): any[] {
    const result:any=[]
    if(!allPets || searchKey=='' || propName==''){
      return allPets;
    }
    allPets.forEach((pet:any)=>{
      if(pet[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(pet)
      }
    })
    return result;
  }

}
