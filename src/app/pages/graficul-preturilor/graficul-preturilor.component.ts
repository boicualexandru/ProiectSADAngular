import { Component, OnInit } from '@angular/core';
import { CarModelsService } from 'src/app/services/car-models.service';

@Component({
    selector: 'app-graficul-preturilor',
    templateUrl: './graficul-preturilor.component.html',
    styleUrls: ['./graficul-preturilor.component.scss']
})
export class GraficulPreturilorComponent implements OnInit {
    combustibil: string;
    combustibilOptions: string[] = ['Benzina', 'Mototrina'];

    brand: string;
    availableBrands: string[] = [];

    model: string;
    availableModels: string[] = [];

    constructor(private carModelsService: CarModelsService) {
        this.carModelsService.getAllBrands()
            .subscribe(allBrands => this.availableBrands = allBrands);
    }

    ngOnInit(): void { }

    onBrandChange(): void {
        console.log('brand ', this.brand);
        this.carModelsService.getModelsByBrand(this.brand)
            .subscribe(models => this.availableModels = models);
    }
}
