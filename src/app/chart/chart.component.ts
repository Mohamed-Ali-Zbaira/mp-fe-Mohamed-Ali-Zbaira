import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  isChartVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Fetch data from your backend (replace with actual API call)
    const backendUrl = 'http://localhost:8081/api/clients/active-clients-count';

    // Sample data (replace with actual data retrieved from the API)
    const activeClientsCount = 50;
    const inactiveClientsCount = 100 - activeClientsCount;

    this.chartOptions = {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Active Clients',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          type: 'pie', // Explicitly specify the type here
          name: 'Client Count',
          colorByPoint: true,
          data: [
            {
              name: 'Active Clients',
              y: activeClientsCount,
              sliced: true,
              selected: true,
            },
            {
              name: 'Inactive Clients',
              y: inactiveClientsCount,
            },
          ],
        } as Highcharts.SeriesPieOptions,
      ],
    };

    this.isChartVisible = true;
  }
}
