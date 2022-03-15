import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  randomNumber = Math.random();
  query = '';

  constructor(public http : HttpClient) {
    
  }

  ngOnInit(): void {
  }

  search() {
    window.location.href = "/search?query="+this.query;
  }

}
