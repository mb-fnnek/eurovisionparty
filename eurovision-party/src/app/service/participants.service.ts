import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RegisterRequest, RegisterResponse} from './user.service';

export interface Participant {
  id: string;
  name: string;
  song_name: string;
  country: string;
  url: string;
  image: string;
  points: number;
}

export interface Vote {
  participant_id: string;
  points: number;
}

export interface VoteRequest {
  votes: Vote[];
}

export interface VoteResponse {
  status: string;
}

export interface ParticipantsResponse {
  participants: Participant[];
}

export interface VotesIndividualResponse {
  votes: Participant[];
}

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private apiUrlList = '/api/participants';
  private apiUrlVote = '/api/vote';
  private apiUrlResults = '/api/final_results';
  private apiUrlResultsIndividual = 'https://fnnek.com/api/user/results/';

  constructor(private http: HttpClient) {}

  getParticipants(): Observable<ParticipantsResponse> {
    return this.http.get<ParticipantsResponse>(this.apiUrlList);
  }

  getResults(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.apiUrlResults);
  }

  getResultsIndividual(user_id: string): Observable<VotesIndividualResponse> {
    console.log("get resutl" + user_id);
    return this.http.get<VotesIndividualResponse>(this.apiUrlResultsIndividual + user_id);
  }

  submit(list: Participant[], user_id: string): Observable<VoteResponse> {

    return this.http.post<VoteResponse>(this.apiUrlVote, {votes : mapParticipantsToVotes(list),
    user_id: user_id});
  }
}

function mapParticipantToVote(participant: Participant): Vote {
  return {
    participant_id: participant.id,
    points: participant.points
  };
}

function mapParticipantsToVotes(participants: Participant[]): Vote[] {
  return participants.map(participant => mapParticipantToVote(participant));
}

