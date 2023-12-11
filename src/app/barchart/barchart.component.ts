import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import 'highcharts/modules/accessibility';
import { HttpClient } from '@angular/common/http';
import 'highcharts/modules/accessibility';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css'],
})
export class BarchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // C'est la propriété chartOptions
isChartsVisible:boolean=false;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const backendUrl = 'http://localhost:8081/api/clients/client-counts-by-address';

    this.http.get(backendUrl).subscribe(
      (data: any) => {
        if (data) {
          this.isChartsVisible=true;
          const seriesData = Object.keys(data).map((key) => ({
            name: key,
            y: data[key],
          }));

          this.chartOptions = {
            chart: {
              type: 'bar',
            },
            accessibility: {
              enabled: false,
            },
            title: {
              text: 'Client Counts By Address',
            },
            xAxis: {
              type: 'category',
            },
            yAxis: {
              title: {
                text: 'Client Counts',
              },
            },
            series: [
              {
                name: 'Clients',
                data: seriesData,
              } as Highcharts.SeriesColumnOptions,
            ],
          };
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
