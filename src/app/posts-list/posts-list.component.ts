import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostCreateComponent } from '../post-create/post-create.component';
import { PostsService } from '../posts-service/posts.service';
import { Post } from '../posts.model';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  /*posts = [
    { title: 'First title', body: 'This is the firsts post\'s body' },
    { title: 'Second title', body: 'This is the second post\'s body' },
    { title: 'Third title', body: 'This is the third post\'s body' }
  ];
*/

posts = [];
private postsSub: Subscription;
  constructor(public postsService: PostsService) {

   }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) =>this.posts = posts);

  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }

}
