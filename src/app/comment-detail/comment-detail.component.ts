
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from '../services/comment.service';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {
  comment: any;
  replyText = '';

  constructor(private route: ActivatedRoute, protected router: Router, private service: CommentsService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.getOne(id).subscribe(c => this.comment = c);
  }

  useSuggestion(s: string) {
    this.replyText = s;
  }

  submit() {
    this.service.reply(this.comment.id, { isReplied: true }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
