import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { News } from '../model/News';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  addStudent(val:News)
  {
         return this.http.post("http://localhost:8090/student/addStudent",val);
  }
}
