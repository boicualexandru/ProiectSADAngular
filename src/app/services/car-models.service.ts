import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface CarBrand {
    brand: string;
    models: string[];
}

@Injectable()
export class CarModelsService {
    constructor(private http: HttpClient) {}

    getAllBrands(): Observable<string[]> {
        return this.http.get<CarBrand[]>('assets/car-list.json')
            .pipe(
                map(allCars => allCars.map(brand => brand.brand).sort())
            );
    }

    getModelsByBrand(brandName: string): Observable<string[]> {
        return this.http.get<CarBrand[]>('assets/car-list.json')
            .pipe(
                map(allCars => allCars.filter(brand => brand.brand === brandName)[0].models.sort())
            );
    }
}
