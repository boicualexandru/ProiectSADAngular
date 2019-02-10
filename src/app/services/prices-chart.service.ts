import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { YearPrice } from '../models/yearPrice';
import { PricesChartFilterOptions } from '../models/pricesChartFilterOptions';

@Injectable()
export class PricesChartService {
    constructor(private http: HttpClient) {}

    getPricesChartByManufactureDate(filters: PricesChartFilterOptions) {
        return this.http.post<YearPrice[]>(environment.apiBaseUrl + '/PricesChart/ByManufactureDate', filters);
    }
}
