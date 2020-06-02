import { Component, OnInit } from '@angular/core';
import { CanonicalService } from './shared/canonical.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meta-tags';
  constructor(
    private canonicalService: CanonicalService,
    private metaTagService: Meta,
    private titleService: Title,
    ){}
  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'description', content: 'This is the site description' },
      { name: 'keywords', content: 'keyword frase 1, keyword frase 2, keyword frase n' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Julio Cesar Melchor Pinto' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2020-06-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }
}
