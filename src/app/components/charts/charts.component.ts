import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [BaseChartDirective, CommonModule, HttpClientModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent {


  // Bar Chart
  constructor(private http: HttpClient) { }

  labels: any = [];
  datasets: any = [];
  APIURL = "http://localhost:8000/";

  ngOnInit() {
    this.get_data();
  }

  get_data() {
    this.http.get<ApiResponse>(this.APIURL).subscribe((res) => {
      this.labels = res.labels;
      this.datasets = res.datasets;
      this.updateChartData(); // Update chart data here
    });
  }

  updateChartData() {
    this.barChartData = {
      labels: this.labels,
      datasets: this.datasets
    };
  }

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.labels,
    datasets: this.datasets
  };
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

 // Pie Chart
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };

  // Line Chart
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgb(253, 218, 13)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

}

interface ApiResponse {
  labels: any[];
  datasets: any[];
}
