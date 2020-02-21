import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

import {} from '@angular/common';
import { Observable } from 'rxjs';
export class Catalogue{
   public itemName:string;
   public brandName:string;
   public price:string;
   public productType:string;
   public detail:string;
   public imageName:string;//image name
}

@Injectable({
  providedIn: 'root'
})
export class JavaServiceService {
  private urls:string;
  constructor(private http:HttpClient) { 

  }
  javaCall(product:Catalogue ){
    this.urls="http://localhost:8080/catalogue/add";
    this.http.post(this.urls,product).subscribe(
      (result)=>{
      //  console.log(result);
      }
    )  
    console.log(product.imageName);
  }
  
  javaUploadImage(upLoadData:FormData){
    this.http.post('http://localhost:8080/catalogue/upload',upLoadData).subscribe(
      res=>{
          //console.log(res);
      }
    );
  }

  javaGetCatalogue(){
    return this.http.get<Catalogue[]>('http://localhost:8080/catalogue/get');
  }

  getImage():Observable<any>{
    return this.http.get('http://localhost:8080/catalogue/getImage');
  }

  getElectronicsCatalogue(){
    return this.http.get<Catalogue[]>('http://localhost:8080/catalogue/electronics');
  }

  getVehicleCatalogue(){
    return this.http.get<Catalogue[]>('http://localhost:8080/catalogue/vehicle');
  }

  getClothsCatalogue(){
    return this.http.get<Catalogue[]>('http://localhost:8080/catalogue/cloths');
  }

  getBooksCatalogue(){
    return this.http.get<Catalogue[]>('http://localhost:8080/catalogue/books');
  }
  
  getFootwearCatalogue(){
    return this.http.get<Catalogue[]>('http://localhost:8080/catalogue/footwear ');
  }
}
