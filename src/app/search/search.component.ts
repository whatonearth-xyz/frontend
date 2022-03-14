import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  randomNumber = Math.random();
  public query = '';
  public searched_query = '';
  public loading = false;
  public result : any = "README.md";

  constructor(private router: Router, private route: ActivatedRoute, public http : HttpClient) { 
    this.router.events.subscribe((val) => {
        this.route.queryParams.subscribe(query_temp => {
          if(query_temp['query'] != null && query_temp['query'] != this.query) {
            this.query = query_temp['query'];
            this.search();
          }
        });
      }
    );
  }

  ngOnInit(): void {
  }

  async search() {
    this.loading = true;
    this.searched_query = this.query;
    var res = await this.http.get("https://whatonearth.azurewebsites.net/get?query="+this.searched_query).toPromise() as any;
    console.log(res);
    this.result = JSON.parse(res)["intent"]["name"];
    this.loading = false;
  }

}
