import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ColumnsComponent } from '../columns/columns.component';
import { mapData } from '../models/mapData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    //@ViewChild(ColumnsComponent, { static: false }) columns: ColumnsComponent;
    public gridData: any[] = mapData;
    //public columns:  ColumnsComponent;
  constructor() { }

    ngOnInit() {
      var columns = [];
      let arr = [];
      let index;
      var t;

      mapData.forEach((value) => {

        if (value.IsApprovalProductionAccountant === true) {
          if (columns.indexOf("hd_production_accountant") === -1) columns.push([0, "hd_production_accountant"]);
        }
        if (value.IsApprovalProductionSupervisor === true) {
          if (columns.indexOf("hd_production_supervisor") === -1) columns.push([1, "hd_production_supervisor"]);
        }
        if (value.IsApprovalAupm === true) {
          if (columns.indexOf("hd_aupm") === -1) columns.push([2, "hd_aupm"]);
        }
        if (value.IsApprovalUpm === true) {
          if (columns.indexOf("hd_upm") === -1) columns.push([3, "hd_upm"]);
        }
        if (value.IsApprovalLineProducer === true) {
          if (columns.indexOf("hd_line_producer") === -1) columns.push([4, "hd_line_producer"]);
        }
        if (value.IsApprovalStudio === true) {
          if (columns.indexOf("hd_studio") === -1) columns.push([5, "hd_studio"]);
        }
        if (value.IsPayrollPacketFound === true) {
          if (columns.indexOf("hd_sent_to_payroll") === -1) columns.push([6, "hd_sent_to_payroll"]);
        }
        if (value.IsStudioPacketFound === true) {
          if (columns.indexOf("hd_sent_to_studio") === -1) columns.push([7, "hd_sent_to_studio"]);
        }

      });
      //filter array to get rid of duplicates
        arr = columns.filter((t = {}, a => !(t[a] = a in t)));
        console.log(arr);
      return arr;
    }
    ngAfterViewInit() {
      
    }

}
