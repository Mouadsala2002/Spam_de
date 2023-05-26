import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'

})
export class RestoService {
  [x: string]: any;
  // saveResto(value: Partial<{ name: string | null; email: string | null; address: string | null; }>) {
  //  throw new Error('Method not implemented.');

  url = "  http://localhost:4500/restaurant"
  id: any;

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }
  saveResto(id: Partial<{ name: string | null; email: string | null; address: string | null; }>) {
    // console.log("service",data)
    return this.http.post(this.url, id)//.subscribe((result)=>{
    //console.log("result is here",result)
  }

  //methode Delete
  deleteResto(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentResto(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id: any,data: Partial<{ name: string | null; email: string | null; address: string | null; }>){
    return this.http.put(`${this.url}/${id}`,data)
  }
  //getCurrrentResto(id)
}
