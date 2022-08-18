import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  isMobile = false;

  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 992;
    console.log(w);
    if (w < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  navItems: any[]=[  
      {title:'Onekana', link: '/onekana'}, 
      {title:'Wavvy Wallet', link: '/wavvy-wallet'},
      {title:'UJAM', link: '/ujam'},  
      {title:'Ally Fresh', link: '/ally-fresh'},  
      {title:'Request Africa', link: '/request-africa'},
      {title:'Stories From Around', link: '/stories-from-around'},
  ]  

  socialNav: any[]=[
    {image: '../../assets/images/instagram.svg', link: 'https://www.instagram.com/djallyfresh/'},
    {image: '../../assets/images/linkedin.svg', link: 'https://www.linkedin.com/in/chivatsi/'},
    {image: '../../assets/images/behance.svg', link: 'https://www.behance.net/chivatsi'}
  ]

  constructor() { }

  ngOnInit(): void {
      this.isMobile = this.getIsMobile();
      window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

}
