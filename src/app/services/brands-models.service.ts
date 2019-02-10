import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { YearPrice } from '../models/yearPrice';
import { Brand } from '../models/brand';
import { Model } from '../models/model';

@Injectable()
export class BrandsModelsService {
    constructor(private http: HttpClient) {}

    getBrands() {
        return this.http.get<Brand[]>(environment.apiBaseUrl + '/BrandsModels/Brands');
    }

    getModelsByBrandId(brandId: number) {
        return this.http.get<Model[]>(environment.apiBaseUrl + '/BrandsModels/Models?brandId=' + brandId);
    }
}
