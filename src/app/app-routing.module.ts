
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';


const routes: Routes = [
  { path: '', component: CommentListComponent },
  { path: 'comments/:id', component: CommentDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
