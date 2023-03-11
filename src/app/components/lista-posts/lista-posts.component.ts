import { PostsService } from './../../services/posts.service';
import { Post } from './../../interfaces/post.interface';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  posts: Post[];

  constructor(
    private postService: PostsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.posts = [];
  }

  
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
       this.posts = this.postService.getAll()
     })
   
  }

  onClick($event: any) {
    if ($event.target.value === 'Todos') {
      this.posts = this.postService.getAll()
    } else {
      this.posts = this.postService.getByCategory($event.target.value)
    }
  }


  borrar(indice: number) {
    this.postService.delatePost(indice)
  }
}

