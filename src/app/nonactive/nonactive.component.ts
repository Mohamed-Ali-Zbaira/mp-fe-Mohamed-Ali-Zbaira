import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nonactive',
  templateUrl: './nonactive.component.html',
  styleUrls: ['./nonactive.component.css']
})
export class NonactiveComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  isChartVisible: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch data from your backend for non-active clients
    const backendUrl = 'http://localhost:8081/api/clients/non-active-clients-count';
    const totalClientsUrl = 'http://localhost:8081/api/clients/all-client-count';

    // Fetch the total number of clients
    this.http.get<number>(totalClientsUrl).subscribe(
      (totalClients) => {
        // Fetch data for non-active clients
        this.http.get<number>(backendUrl).subscribe(
          (nonActiveClientsCount) => {
            const activeClientsCount = totalClients - nonActiveClientsCount;

            this.chartOptions = {
              chart: {
                type: 'pie',
              },
              title: {
                text: 'Active and Non-Active Clients',
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
                  type: 'pie',
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
                      name: 'Non-Active Clients',
                      y: nonActiveClientsCount,
                    },
                    // You can add more data points if needed
                  ],
                } as Highcharts.SeriesPieOptions,
              ],
            };

            this.isChartVisible = true;
          },
          (error) => {
            console.error('Error fetching data:', error);
            // Handle error appropriately (e.g., display an error message)
          }
        );
      },
      (error) => {
        console.error('Error fetching total clients data:', error);
        // Handle error appropriately (e.g., display an error message)
      }
    );
  }
}
