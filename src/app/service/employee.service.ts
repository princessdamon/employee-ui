import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:8080'

  getEmployees() {
    return this.http.get(`${this.uri}/employees`)
  }
} 1
