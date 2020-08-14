import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {SignupRequestPayload} from "../signup/signup-request.payload";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post(this.API_URL + '/api/auth/signup', signupRequestPayload, {responseType: "text"});
  }
}
