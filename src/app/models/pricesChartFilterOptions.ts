import { IntRange } from './intRange';
import { FuelType } from './fuelType';

export interface PricesChartFilterOptions {
    yearRange: IntRange;
    brandId?: number;
    modelId?: number;
    fuelType?: FuelType;
}
