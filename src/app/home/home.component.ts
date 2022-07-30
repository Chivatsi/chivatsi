import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  partnersOptions = ['id', 'img', 'alt', 'class', 'link'];

  partnersCarousel: any = [
    {
      id: '0',
      link: "https://sisitech.com/",
      img: "../../assets/images/sisitech.svg",
      alt: "sisitech",
      class: "sisitech"
    },
    {
      id: '1',
      link: "https://c4dlab.ac.ke/",
      img: "../../assets/images/c4dlab.svg",
      alt: "c4dlab",
      class: "c4dlab"
    },
    {
      id: '2',
      link: "https://www.electronicbeats.net/",
      img: "../../assets/images/teb.svg",
      alt: "teb",
      class: "teb"
    },
    {
      id: '3',
      link: "http://ujam.com/",
      img: "../../assets/images/ujam.svg",
      alt: "ujam",
      class: "ujam"
    }
  ]

  heroOptions = ['id', 'img', 'alt', 'class', 'link'];

  heroCarousel: any = [
    {
      id: '0',
      link: "/wavvy-wallet",
      img: "../../assets/images/wavvy-wallet-hero.svg",
      alt: "wavvy-wallet",
      class: "wavvy-wallet"
    },
    {
      id: '1',
      link: "/ally-fresh",
      img: "../../assets/images/chuo.svg",
      alt: "chuo",
      class: "chuo"
    },
    {
      id: '2',
      link: "/onekana",
      img: "../../assets/images/onekana-hero.svg",
      alt: "onekana-hero",
      class: "onekana-hero"
    },
    {
      id: '3',
      link: "/stories-from-around",
      img: "../../assets/images/sfa.svg",
      alt: "sfa",
      class: "sfa"
    }
  ]

  toolsOptions = ['id', 'img', 'alt', 'class', 'link'];

  toolsCarousel: any = [
    {
      id: '0',
      link: "https://www.adobe.com/products/xd.html",
      img: "../../assets/images/adobe-xd.svg",
      alt: "adobe-xd",
      class: "adobe-xd"
    },
    {
      id: '1',
      link: "https://www.adobe.com/products/illustrator.html",
      img: "../../assets/images/adobe-illustrator.svg",
      alt: "illustrator",
      class: "illustrator"
    },
    {
      id: '2',
      link: "https://zeplin.io/",
      img: "../../assets/images/zeplin.svg",
      alt: "zeplin",
      class: "zeplin"
    },
    {
      id: '3',
      link: "https://www.sketch.com/",
      img: "../../assets/images/sketch.svg",
      alt: "sketch",
      class: "sketch"
    },
    {
      id: '4',
      link: "https://angular.io/",
      img: "../../assets/images/angular.svg",
      alt: "angular",
      class: "angular"
    },
    {
      id: '5',
      link: "https://flutter.dev/",
      img: "../../assets/images/flutter.svg",
      alt: "flutter",
      class: "flutter"
    },
    {
      id: '6',
      link: "https://ionicframework.com/",
      img: "../../assets/images/ionic.svg",
      alt: "ionic",
      class: "ionic"
    }
  ]

  serviceCards: any[]=[
    {image: '../../assets/images/wavvy.svg', link: '/wavvy-wallet', title: 'Wavvy Wallet', button: 'View Case Study'},
    {image: '../../assets/images/onekana.svg', link: '/onekana', title: 'Onekana', button: 'View Case Study'},
    {image: '../../assets/images/ally-fresh.svg', link: '/ally-fresh', title: 'Ally Fresh', button: 'View Case Study'},
    {image: '../../assets/images/stories-from-around.svg', link: '/stories-from-around', title: 'Stories From Around', button: 'View Case Study'},
  ]

  serviceList: any[]=[
    {image: '../../assets/images/wavvy-service.svg', text: 'UX/UI Design', number: '01', description: 'I enjoy creating mobile interfaces and developing mobile applications that fit well with the client’s needs and requirements. From prototyping to development of the final product.'},
    {image: '../../assets/images/web-design.svg', text: 'App & Web Design', number: '02', description: 'Web design has been my passion for almost a decade now. From minimalistic to complex Interface designs that follow design principles making them intuitive and user-friendly.'},
    {image: '../../assets/images/wavvy-wallet-logo.svg', text: 'Graphic Design', number: '03', description: 'In my extra time, I design logos, flyers, posters, Infographics that communicate the client’s brand position and delivers a message in the most impactful way possible.'}
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
