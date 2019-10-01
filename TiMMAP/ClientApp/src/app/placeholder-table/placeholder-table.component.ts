import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PlaceholderTableDataSource, PlaceholderTableItem } from './placeholder-table-datasource';
import { Column } from '../classes/column';
import { ColumnsComponent } from '../columns/columns.component';

@Component({
  selector: 'app-placeholder-table',
  templateUrl: './placeholder-table.component.html',
  styleUrls: ['./placeholder-table.component.css']
})
export class PlaceholderTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<PlaceholderTableItem>;
  @ViewChild(ColumnsComponent, { static: false }) columns: ColumnsComponent;
  dataSource: PlaceholderTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','project', 'crewmember', 'pending', 'i9', 'gk','pa','ps','au','up','lp','st','sp','ss','at'];

  ngOnInit() {
    this.dataSource = new PlaceholderTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
