import { Component, OnInit, ViewChild } from '@angular/core';
import { CarModelsService } from 'src/app/services/car-models.service';
import { FormControl } from '@angular/forms';
import { MatDatepicker, DateAdapter, NativeDateAdapter } from '@angular/material';

class YearOnlyDateAdapter extends NativeDateAdapter {

    format(date: Date, displayFormat: Object): string {
        return date.getFullYear().toString();
    }
}

@Component({
    selector: 'app-graficul-preturilor',
    templateUrl: './graficul-preturilor.component.html',
    styleUrls: ['./graficul-preturilor.component.scss'],
    providers: [
        {
            provide: DateAdapter, useClass: YearOnlyDateAdapter
        }
    ]
})
export class GraficulPreturilorComponent implements OnInit {
    combustibil: string;
    combustibilOptions: string[] = ['Gasoline', 'Diesel'];

    brand: string;
    availableBrands: string[] = [];

    model: string;
    availableModels: string[] = [];

    @ViewChild('startPicker', {read: MatDatepicker}) startPicker;
    @ViewChild('endPicker', {read: MatDatepicker}) endPicker;

    startDate = new FormControl(new Date());
    endDate = new FormControl(new Date());


    public chartType = 'line';

    public chartDatasets: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
    ];

    public chartLabels: Array<any> = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];

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


    startYearSelected(params) {
        console.log('startYearSelected');
        this.startDate.setValue(params);
        this.startPicker.close();
    }
    endYearSelected(params) {
        console.log('endYearSelected');
        this.endDate.setValue(params);
        this.endPicker.close();
    }
}
