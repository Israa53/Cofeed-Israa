import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Story , stories } from 'src/app/models/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  @Input() story: Story;
  stories  =  stories;
  constructor() { }
  ngOnInit(): void {
  }

}
