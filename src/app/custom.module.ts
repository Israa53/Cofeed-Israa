import { PostComponent } from './shared/post/post.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './shared/user/user.component';
import { StoriesComponent } from './shared/stories/stories.component';



@NgModule({
  declarations: [UserComponent, StoriesComponent, PostComponent ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [UserComponent, StoriesComponent, PostComponent ],
})
export class CustomModule { }