import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../_services/common.service';
import { PageEvent } from '@angular/material/paginator';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExportToCsv } from 'export-to-csv';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  closeResult: string;
  is_active: any = null;
  constructor(private commn_: CommonService, private spinner: NgxSpinnerService,private router: Router, private toastr: ToastrService) { }
  //table: any
  action: string;
  page = 1;
  pageSize = 10;
  people = []
  length = 0;
  searchText = ""
  pageEvent: PageEvent;

  ngOnInit(): void {
    this.userList();
  }
  
  //
  
  // Route to Edit
  sendID(id) {
    this.router.navigate(["/users/useredit"], { queryParams: { id: id } });
  }

  // Route to Edit
  ViewSendID(id) {
    this.router.navigate(["/users/userdetail"], { queryParams: { id: id } });
  }

  //get all users
  userList() {
    let body = {
      "is_active": this.is_active,
      "draw": 2,
      "columns": [
        {
          "data": "first_name",
          "name": "",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "",
            "regex": false
          }
        },
        {
          "data": "last_name",
          "name": "",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "",
            "regex": false
          }
        },
        {
          "data": "phone_number",
          "name": "",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "",
            "regex": false
          }
        },
        {
          "data": "email",
          "name": "",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "",
            "regex": false
          }
        },
        {
          "data": "id",
          "name": "",
          "searchable": true,
          "orderable": true,
          "search": {
            "value": "",
            "regex": false
          }
        }
      ],
      "order": [
        {
          "column": 3,
          "dir": "undefined"
        }
      ],
      "start": this.page,
      "length": this.pageSize,
      "search": {
        "value": this.searchText,
        "regex": false
      }
    }
    this.commn_.post("admin/get-all-users-with-pagination/", body).subscribe(res => {
      this.people = res.data;
      this.length = res.recordsTotal;
    });
  }

  //pagination
  pageSizeChanged(e): PageEvent {
    if (e.pageIndex == 0) {
      this.page = e.pageIndex;
    } else {
      if (e.previousPageIndex < e.pageIndex) {
        this.page = this.page + e.pageSize;
      } else {
        this.page = this.page - e.pageSize;
      }
    }
    this.pageSize = e.pageSize
    this.userList();
    return e;
  }

  // Search
  timer: any;
  search(event) {
    this.spinner.show();
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.searchText = event.target.value;
      this.userList();
      this.spinner.hide();
    }, 1000);
  }

  // toggle Button 
  changeStatus(id) {
    this.commn_.put("admin/change-user-status-by-id/" + id + "/", {}).subscribe(res => {
      if (res.code == 200) {
        this.toastr.success(res.message, "Success");
        this.userList();
      }
      else {
        this.toastr.error(res.message, "Error");
      }
    });
  }

  // change status button
  changeStatusList(key) {
    this.spinner.show();
    this.is_active = key;
    this.userList();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  //Export Csv
  exportCsv() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: '',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };
    this.commn_.get("admin/get-all-users-without-pagination/").subscribe(res => {
      console.log(res);
      const csvExporter = new ExportToCsv(options);
      res.data.map((item, index) => {
        item["#"] = parseInt(index) + 1;
        delete item.image;
        return item;
      })
      csvExporter.generateCsv(res.data);
    });
  }

  //Delete User 
  deleteUser(id) {
    Swal.fire({
      title: 'Are you sure want to delete this user?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.spinner.show();
        this.commn_.delete("admin/delete-users-by-id/" + id + "/").subscribe(res => {
          if (res.code == 200) {
            Swal.fire('Success!','Deleted Successfully!','success');
            this.userList();
            this.spinner.hide();
          }
          else {
            this.toastr.error(res.message, "Error");
            this.spinner.hide();
          }
        });
      }
    });
  }
}
