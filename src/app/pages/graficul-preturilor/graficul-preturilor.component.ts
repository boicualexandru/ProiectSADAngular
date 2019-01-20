import { Component, OnInit } from '@angular/core';
import { CarModelsService } from 'src/app/services/car-models.service';

@Component({
    selector: 'app-graficul-preturilor',
    templateUrl: './graficul-preturilor.component.html',
    styleUrls: ['./graficul-preturilor.component.scss']
})
export class GraficulPreturilorComponent implements OnInit {
    combustibil: string;
    combustibilOptions: string[] = ['Gasoline', 'Diesel'];

    brand: string;
    availableBrands: string[] = [];

    model: string;
    availableModels: string[] = [];


    public chartType = 'line';

    public chartDatasets: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
    ];

    public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(105, 0, 132, .2)',
            borderColor: 'rgba(200, 99, 132, .7)',
            borderWidth: 2,
        }
    ];

    public chartOptions: any = {
        responsive: true
    };

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

    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
}
