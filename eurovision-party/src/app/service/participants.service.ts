import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Participant {
  id: string;
  name: string;
  song_name: string;
  country: string;
  url: string;
  image: string;
  points: number;
}

export interface ParticipantsResponse {
  participants: Participant[];
}

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private apiUrl = '/api/participants';

  constructor(private http: HttpClient) {}

  getParticipants(): Observable<ParticipantsResponse> {
    return this.http.get<ParticipantsResponse>(this.apiUrl);
  }
}
