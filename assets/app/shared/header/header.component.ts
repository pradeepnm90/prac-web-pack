import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import "../../../../public/stylesheets/grs-bundle/grs-bundle.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  headerName: string = "Global Reinsurance System";
  headerNameShort: string = "GRS";
  searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      "searchInput": new FormControl(null)
    });
  }
}
