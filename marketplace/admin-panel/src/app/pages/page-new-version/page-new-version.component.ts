import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-new-version',
  standalone: true,
  imports: [],
  templateUrl: './page-new-version.component.html',
})
export class PageNewVersionComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
