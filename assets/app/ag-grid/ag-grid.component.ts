import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { AgGridDataService } from '../shared/ag-grid-data.service';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  private gridOptions: GridOptions;
  title = 'app';
  constructor(private http: HttpClient, private gridData: AgGridDataService) {
    this.gridOptions = <GridOptions>{}

  }
  columnDefs = this.gridData.fetchColumn();
  rowData = this.gridData.fetchData();
  ngOnInit() {
    // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
  }
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
