import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ParticipantsResponse} from './participants.service';

export interface RegisterRequest {
  user_name: string;
}

export interface RegisterResponse {
  user_id: string;
}

export interface UserNameResponse {
  user_id: string;
  user_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlRegister = '/api/register';
  private apiUrlGetName = '/api/user/';

  constructor(private http: HttpClient) {}

  registerUser(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrlRegister, request);
  }

  getUserName(user_id: string): Observable<UserNameResponse> {
    return this.http.get<UserNameResponse>(this.apiUrlGetName + user_id);
  }
}
