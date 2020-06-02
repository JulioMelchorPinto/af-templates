import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { AuthService } from '../services/auth.service';
import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    public auth: AuthService
    ) {}

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
  openDialog(): void {
    let dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
    });
  }
  deletePost(id) {
   // if (this.auth.isAuthenticated()) {
      this.dataService.deletePost(id);
      this.dataSource = new PostDataSource(this.dataService);
    //} else {
    //  alert('Login in Before');
    //}
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
