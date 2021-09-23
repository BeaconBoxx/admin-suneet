import { urls } from './../../_services/urls';
import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../_services/common.service';
import { Color, Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit{
  subtitle: string;
  data: any;
  data1: any;
  data2:any;
  data3:any;
  status: boolean = false;
  constructor(private http:CommonService,private spinner: NgxSpinnerService) {
    this.subtitle = 'This is some text within a card block.';
  }

  userData:any;
  emergencyData:any;

  ngOnInit(){
    this.getUserData(2);
    this.getEmergencyData(2);
  }

  getUserData(type:any){
    this.spinner.show();
    var params={
      'filter_type':type
    }
     this.http.post(urls.getTotalUserGraph,params).subscribe((res :any) => {
        if(res.code == 200){
        this.userData=res.data;
        this.data = this.userData.map(val => val.date);
        this.lineChartLabels = [...this.data];
        this.data1 = this.userData.map(val => val.count);
        this.lineChartData[0]['data'] = [...this.data1];
        this.status = true;
        setTimeout(()=>{this.spinner.hide()},1000);
        }
     })
  }

  getEmergencyData(type:any){
    this.spinner.show();
    var params={
      'filter_type':type
    }
    this.http.post(urls.getTotalEmergencyMessageGraph,params).subscribe((res :any) => {
     if(res.code == 200){
       this.emergencyData=res.data;
       this.data2 = this.emergencyData.map(val => val.date);
        this.barChartLabels = [...this.data2];
        this.data3 = this.emergencyData.map(val => val.count);
        this.barChartData[0]['data'] = [...this.data3];
        this.status = true;
        setTimeout(()=>{this.spinner.hide()},1000);
     }
  })
 }
  // This is for the dashboard line chart
  // lineChart
  public lineChartData:ChartDataSets[] = [
    { data: [], label: 'Users' },
  ];

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(25,118,210,0.0)',
      borderColor: 'rgba(25,118,210,1)',
      pointBackgroundColor: 'rgba(25,118,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(25,118,210,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(38,218,210,0.0)',
      borderColor: 'rgba(38,218,210,1)',
      pointBackgroundColor: 'rgba(38,218,210,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(38,218,210,0.5)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // Doughnut
  public doughnutChartLabels: string[] = ['Sales', 'Earning', 'Cost'];

  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // Sales Analytics Pie chart
  public pieChartLabels: string[] = ['Sales', 'Earning', 'Cost'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType = 'pie';




// bar chart

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Messages Sent' }
  ];

  public barChartColors: Array<any> = [
    {
      backgroundColor: '#1a1d4a',
      hoverBackgroundColor: '#1a1d4a',
      hoverBorderWidth: 2,
      hoverBorderColor: '#1a1d4a'
    }
  ];
}
