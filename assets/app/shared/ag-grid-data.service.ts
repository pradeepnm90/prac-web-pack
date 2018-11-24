import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgGridDataService {
  columnDefs = [
    { headerName: 'Deal Name', field: 'dealName', width: 250 },
    { headerName: 'Contract#', field: 'contract', width: 120 },
    { headerName: 'Inception', field: 'inception', width: 120 },
    { headerName: 'Target', field: 'target', width: 120 },
    { headerName: 'Priority', field: 'priority', width: 120 },
    { headerName: 'Submitted', field: 'submitted', width: 130 },
    { headerName: 'Deal#', field: 'deal', width: 120 },
    { headerName: 'Underwriter', field: 'underwriter', width: 140 },
    { headerName: 'Underwriter2', field: 'underwriter2', width: 140 },
    { headerName: 'Technical Assistant', field: 'technicalAssistant', width: 200, editable: true },
    { headerName: 'Modeler', field: 'modeler', width: 120 },
    { headerName: 'Actuary', field: 'actuary', width: 120 },
    { headerName: 'Status', field: 'status', width: 120 },
    { headerName: 'Actions', field: 'actions', width: 120 }
  ];
  rowData = [
    {
      dealName: 'Giles & Ransome,Inc - 2018',
      contract: "1949",
      inception: "02-08-2018",
      target: "",
      priority: "",
      submitted: "02-08-2018",
      deal: "123287",
      underwriter: "Diana Lafemina",
      underwriter2: "",
      technicalAssistant: "LKate Trent",
      modeler: "",
      actuary: "Richard Millilo",
      status: "bound",
      actions: ""
    },
    {
      dealName: 'Giles & Ransome,Inc - 2018',
      contract: "1949",
      inception: "02-08-2018",
      target: "",
      priority: "",
      submitted: "02-08-2018",
      deal: "123287",
      underwriter: "Diana Lafemina",
      underwriter2: "",
      technicalAssistant: "LKate Trent",
      modeler: "",
      actuary: "Richard Millilo",
      status: "bound",
      actions: ""
    },
    {
      dealName: 'Giles & Ransome,Inc - 2018',
      contract: "1949",
      inception: "02-08-2018",
      target: "",
      priority: "",
      submitted: "02-08-2018",
      deal: "123287",
      underwriter: "Diana Lafemina",
      underwriter2: "",
      technicalAssistant: "LKate Trent",
      modeler: "",
      actuary: "Richard Millilo",
      status: "bound",
      actions: ""
    },
    {
      dealName: 'Giles & Ransome,Inc - 2018',
      contract: "1949",
      inception: "02-08-2018",
      target: "",
      priority: "",
      submitted: "02-08-2018",
      deal: "123287",
      underwriter: "Diana Lafemina",
      underwriter2: "",
      technicalAssistant: "LKate Trent",
      modeler: "",
      actuary: "Richard Millilo",
      status: "bound",
      actions: ""
    },
    {
      dealName: 'Giles & Ransome,Inc - 2018',
      contract: "1949",
      inception: "02-08-2018",
      target: "",
      priority: "",
      submitted: "02-08-2018",
      deal: "123287",
      underwriter: "Diana Lafemina",
      underwriter2: "",
      technicalAssistant: "LKate Trent",
      modeler: "",
      actuary: "Richard Millilo",
      status: "bound",
      actions: ""
    },
    {
      dealName: 'X',
      contract: "Y",
      inception: "03-08-2018",
      target: "",
      priority: "",
      submitted: "04-08-2018",
      deal: "12",
      underwriter: "Z",
      underwriter2: "",
      technicalAssistant: "P",
      modeler: "",
      actuary: "A",
      status: "dsdsfdsfsd",
      actions: ""
    }
  ];
  constructor() { }

  fetchColumn() {
    return this.columnDefs;
  }
  fetchData() {
    return this.rowData;
  }
}
