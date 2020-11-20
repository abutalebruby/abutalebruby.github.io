import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-software-dev',
  templateUrl: './software-dev.component.html',
  styleUrls: ['./software-dev.component.css']
})
export class SoftwareDevComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
