import { Component } from '@angular/core';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { ColumnsComponent } from './columns/columns.component';
import { PlaceholderTableComponent } from './placeholder-table/placeholder-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
}
