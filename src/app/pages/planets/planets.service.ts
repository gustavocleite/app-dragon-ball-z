import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planets } from './planets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private apiUrl = 'https://dragonball-api.com/api/planets';

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planets> {
    return this.http.get<Planets>(this.apiUrl);
  }
}
