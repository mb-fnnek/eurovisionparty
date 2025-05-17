import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RegisterRequest {
  user_name: string;
}

export interface RegisterResponse {
  user_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = '/api/register';

  constructor(private http: HttpClient) {}

  registerUser(request: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiUrl, request);
  }
}
