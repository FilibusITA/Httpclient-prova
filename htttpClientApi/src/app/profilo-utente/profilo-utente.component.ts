import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig, AppConfigService } from '../app-config.service';

@Component({
    selector: 'app-profilo-utente',
    templateUrl: './profilo-utente.component.html',
    styleUrls: ['./profilo-utente.component.css']
})
export class ProfiloUtenteComponent implements OnInit {

    data: any;

    chartOptions: any;

    subscription: Subscription | undefined;

    config: AppConfig;

    constructor(private configService: AppConfigService) {
        this.config = this.configService.config;

    }

    ngOnInit(): void {
        this.data = {
            labels: ['Java EE', 'Frontend development', 'Angular 2', 'HTML 5', 'C++', 'Python', 'PASCAL', 'C#'],
            datasets: [
                {
                    label: 'Le tue skill',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [5, 10, 12, 2, 10, 6, 7, 3]
                },
            ]
        };

        this.updateChartOptions();
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
    }

    updateChartOptions() {
        this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
    }

    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        color: '#495057',
                    },
                    grid: {
                        color: '#ebedef',
                    },
                    angleLines: {
                        color: '#ebedef'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        color: '#ebedef',
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.2)',
                    },
                    angleLines: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }
        }

    }

}
