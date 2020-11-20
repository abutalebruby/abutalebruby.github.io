import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-graphic-des',
  templateUrl: './graphic-des.component.html',
  styleUrls: ['./graphic-des.component.css']
})
export class GraphicDesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }
}
