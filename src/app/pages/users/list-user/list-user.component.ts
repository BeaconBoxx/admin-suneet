import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  closeResult: string;

  //table: any
  action:string;


 
  ngOnInit(): void {
  }
  people = [
    { 
      serial_no:'1',
      firstname: 'Sandy', 
      lastname: 'Doe',  
      dob: "19-09-1950",    
      contact:"+91-33434343",
      heartrate:"90",
      sp:"80",
      heartvariability:"80",
      email:"sand@example.com",
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",      
    },
    { 
      serial_no:'2',
      firstname: 'Rohan', 
      lastname: 'Arya',  
      dob: "04-02-1955",  
      contact:"+91-33434343",
      heartrate:"90",
      sp:"80",
      heartvariability:"70",
      email:"sand@example.com",  
      address:"#454 1st Block, Rammurthy, Bangalore-560016",
      status:"",
      action:"1",      
    },
    { 
      serial_no:'3',   
      firstname: 'john', 
      lastname: 'Root',  
      dob: "19-02-1955",    
      contact:"+91-33434343",
      heartrate:"90",
      sp:"80",
      heartvariability:"60",
      email:"sand@example.com", 
      address:"#454 1st Block, Rammurthy, Bangalore-560016",   
      status:"",
      action:"1",      
    },
   
  ]
}
