import { Component, OnInit, ViewChild } from '@angular/core';
import { CarModelsService } from 'src/app/services/car-models.service';
import { FormControl } from '@angular/forms';
import { MatDatepicker, DateAdapter, NativeDateAdapter } from '@angular/material';
import { PricesChartService } from 'src/app/services/prices-chart.service';
import { PricesChartFilterOptions } from 'src/app/models/pricesChartFilterOptions';
import { Brand } from 'src/app/models/brand';
import { Model } from 'src/app/models/model';
import { BrandsModelsService } from 'src/app/services/brands-models.service';
import { FuelType } from 'src/app/models/fuelType';

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
    isGasoline = false;
    isDiesel = false;

    selectedBrand: number;
    availableBrands: Brand[] = [];

    selectedModel: number;
    availableModels: Model[] = [];

    @ViewChild('startPicker', {read: MatDatepicker}) startPicker;
    @ViewChild('endPicker', {read: MatDatepicker}) endPicker;

    startDate = new FormControl(new Date());
    endDate = new FormControl(new Date());

    public chartLabels: Array<any> = [];
    public chartDatasets: Array<any> = [];


    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(218,65,103, .2)',
            borderColor: 'rgba(218,65,103, .7)',
            borderWidth: 2,
        },
        {
            backgroundColor: 'rgba(138,28,124, .2)',
            borderColor: 'rgba(138,28,124, .7)',
            borderWidth: 2,
        },
        {
            backgroundColor: 'rgba(137,157,120, .2)',
            borderColor: 'rgba(137,157,120, .7)',
            borderWidth: 2,
        },
        {
            backgroundColor: 'rgba(243,167,18, .2)',
            borderColor: 'rgba(243,167,18, .7)',
            borderWidth: 2,
        }
    ];

    public chartOptions: any = {
        responsive: true,
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                    return value + ' €';
                }
              }
            }]
          }
    };

    constructor(private carModelsService: CarModelsService, private pricesChartService: PricesChartService, 
        private brandsModelsService: BrandsModelsService) {
        brandsModelsService.getBrands()
            .subscribe(allBrands => this.availableBrands = allBrands);
    }

    ngOnInit(): void { }

    onBrandChange(): void {
        this.selectedModel = null;
        this.brandsModelsService.getModelsByBrandId(this.selectedBrand)
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

    generate() {
        const fuelType = this.isDiesel === this.isGasoline ? null :
            (this.isDiesel ? FuelType.Diesel : FuelType.Gasoline);

        const filters: PricesChartFilterOptions = {
            yearRange: {
                start: this.startDate.value.getFullYear(),
                end: this.endDate.value.getFullYear()
            },
            brandId: this.selectedBrand,
            modelId: this.selectedModel,
            fuelType: fuelType
        };

        console.log(filters);

        const brandModel: Brand | Model = this.availableModels.find(m => m.id === this.selectedModel) ||
            this.availableBrands.find(b => b.id === this.selectedBrand);

        let label = brandModel != null ? brandModel.name : 'All';

        if (fuelType != null) {
            label += this.isDiesel ? ' Diesel' : ' Gasoline';
        }

        this.pricesChartService.getPricesChartByManufactureDate(filters)
            .subscribe(dataSet => {
                this.chartLabels = dataSet.map(yearPrice => yearPrice.year.toString());
                this.chartDatasets.push({
                    data: dataSet.map(yearPrice => yearPrice.price),
                    label: label
                });
            });
    }

    clear() {
        this.chartLabels = [];
        this.chartDatasets = [];
    }
}
