import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from './characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Characters> { // Use Characters como o tipo de retorno
    return this.http.get<Characters>(this.apiUrl);
  }
}
