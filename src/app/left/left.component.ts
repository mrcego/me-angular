import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  social = [
    {
      icon: 'facebook',
      url: 'https://www.facebook.com/mrcego'
    },
    {
      icon: 'twitter',
      url: 'https://twitter.com/mrcego'
    },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/mrcego/'
    },
    {
      icon: 'download',
      url: '../../assets/Resume_CAGH_ES.pdf'
    },
    // 'twitter', 'linkedin'
  ];

  constructor() { }

  ngOnInit() {
  }

}
