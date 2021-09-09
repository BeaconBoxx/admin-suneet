import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../_services/common.service';

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
  constructor(private http:CommonService) {
    this.subtitle = 'This is some text within a card block.';
  }

  userData:any;
  emergencyData:any;

  ngOnInit(){
    this.getUserData(2);
    this.getEmergencyData(2);
  }

  getUserData(type:any){
    var params={
      'filter_type':type
    }
     this.http.post('admin/get-total-users-graph/',params).subscribe((res :any) => {
        if(res.code == 200){
          this.userData=res.data;
          this.data = this.userData.map(val => val.date);
        this.lineChartLabels = [...this.data];
        this.data1 = this.userData.map(val => val.count);
        this.lineChartData[0]['data'] = [...this.data1];
        this.status = true;
        }
     })
  }

  getEmergencyData(type:any){
    var params={
      'filter_type':type
    }
    this.http.post('admin/get-total-emergency-messages-graph/',params).subscribe((res :any) => {
     if(res.code == 200){
       this.emergencyData=res.data;
       this.data2 = this.emergencyData.map(val => val.date);
        this.barChartLabels = [...this.data2];
        this.data3 = this.emergencyData.map(val => val.count);
        this.barChartData[0]['data'] = [...this.data3];
        this.status = true;
     }
  })
 }
  // This is for the dashboar line chart
  // lineChart
  public lineChartData: Array<any> = [
    { data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' },
    // { data: [80, 100, 60, 200, 150, 100, 150], label: 'Earnings' }
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
    maintainAspectRatio: false
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
  public lineChartLegend = false;
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
  public barChartData: Array<any> = [
    { data: [1.1, 1.4, 1.1, 0.9, 2.1, 1, 0.3], label: 'Cost' }
  ];
  public barChartLabels: Array<any> = [
  ];
  public barChartOptions: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    
    scales: {
      
      xAxes: [{
        display: false,
        
      }],
      yAxes: [{
        display: false
      }]
    }
  };
  public barChartColors: Array<any> = [
    {
      backgroundColor: '#1a1d4a',
      hoverBackgroundColor: '#1a1d4a',
      hoverBorderWidth: 2,
      hoverBorderColor: '#1a1d4a'
    }
  ];
  public barChartLegend = false;
  public barChartType = 'bar';
}
