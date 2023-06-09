import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getAll(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));
  }

  getOne(id: number): Observable<Hero> {
    return this.http
      .get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(tap((hero) => this.log(`fetched ${this.descAttributes(hero)}`)));
  }

  search(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http
      .get<Hero[]>(`${this.heroesUrl}?name=${term}`)
      .pipe(
        tap((heroes) =>
          heroes.length
            ? this.log(`found ${heroes.length} hero(es) matching "${term}"`)
            : this.log(`no heroes metching "${term}"`)
        )
      );
  }

  create(hero: Hero): Observable<Hero> {
    return this.http
      .post<Hero>(this.heroesUrl, hero)
      .pipe(tap((hero) => this.log(`create ${this.descAttributes(hero)}`)));
  }

  update(hero: Hero): Observable<Hero> {
    return this.http
      .put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
      .pipe(tap((hero) => this.log(`update ${this.descAttributes(hero)}`)));
  }

  delete(hero: Hero): Observable<any> {
    return this.http
      .delete<any>(`${this.heroesUrl}/${hero.id}`)
      .pipe(tap((hero) => this.log(`delete ${this.descAttributes(hero)}`)));
  }

  private descAttributes(hero: Hero): string {
    return `hero id = ${hero.id} and name = ${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }
}
