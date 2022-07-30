import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  navItems: any[]=[  
      {title:'Wavvy Wallet', link: '/wavvy-wallet'},  
      {title:'Onekana', link: '/onekana'},  
      {title:'Ally Fresh', link: '/ally-fresh'},  
      {title:'Stories From Around', link: '/stories-from-around'},
  ]  

  socialNav: any[]=[
    {image: '../../assets/images/instagram.svg', link: 'https://www.instagram.com/djallyfresh/'},
    {image: '../../assets/images/linkedin.svg', link: 'https://www.linkedin.com/in/chivatsi/'},
    {image: '../../assets/images/behance.svg', link: 'https://www.behance.net/chivatsi'}
  ]

  constructor() { }

  ngOnInit(): void {
  }
  

}
