import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  title = 'page-title';
  constructor(
    private metaTagService: Meta,
    private titleService: Title
    ) { }

    ngOnInit() {
      this.titleService.setTitle(this.title);
      this.metaTagService.updateTag(
        { name: 'description', content: 'This is the description of Page' }
      );
    }

}
