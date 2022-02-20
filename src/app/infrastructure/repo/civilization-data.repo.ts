import { Injectable } from '@angular/core';
import { CivilizationRepo } from 'src/app/application/repo/civilization.repo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CivilizationDto } from '../dtos/civilization.dto';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Civilization } from 'src/app/domain/civilization';

@Injectable()
export class CivilizationDataRepo implements CivilizationRepo {
  constructor(private http: HttpClient) {}

  public getCivilization(id: number): Promise<Civilization> {
    return lastValueFrom(
      this.http
        .get<CivilizationDto>(`${environment.url}civilization/${id}`)
        .pipe(map(CivilizationDto.toDomain))
    );
  }

  public getAll(): Promise<Civilization[]> {
    return lastValueFrom(
      this.http
        .get<{ civilizations: CivilizationDto[] }>(
          `${environment.url}civilizations`
        )
        .pipe(map((res) => res.civilizations.map(CivilizationDto.toDomain)))
    );
  }
}
