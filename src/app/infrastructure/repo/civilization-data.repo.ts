import { Injectable } from "@angular/core";
import { CivilizationRepo } from "src/app/application/repo/civilization.repo";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { CivilizationDto } from "../dtos/civilization.dto";
import { lastValueFrom, map, Observable } from "rxjs";
import { Civilization } from "src/app/domain/civilization";


@Injectable()
export class CivilizationDataRepo implements CivilizationRepo {
    constructor(private http: HttpClient) {}

    public getAll(): Promise<Civilization[]> {
        return lastValueFrom(
            this.http.get<{civilizations: []}>(`${environment.url}civilizations`).pipe(
                map(res => {
                    const novas = res.civilizations.map((dto: any) => new CivilizationDto(
                            dto.id,
                            dto.name,
                            dto.expansion,
                            dto.army_type,
                            dto.unique_unit,
                            dto.unique_tech, 
                            dto.team_bonus,
                            dto.civilization_bonus
                        ));
                    return novas.map(dto => dto.toDomain());
                })
            ));
    }
}