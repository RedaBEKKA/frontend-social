
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentsService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  displayedColumns = ['postTitle', 'comment', 'sentiment', 'date'];
  dataSource: any[] = [];

  constructor(private service: CommentsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(comments => {
      this.dataSource = comments.filter(c => !c.isReplied);
    });
  }

  openDetail(row: any) {
    this.router.navigate(['/comments', row.id]);
  }
}
