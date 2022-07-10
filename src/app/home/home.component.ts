import { Component, OnInit } from '@angular/core';

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
      link: "",
      img: "../../assets/images/sisitech.svg",
      alt: "sisitech",
      class: "sisitech"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/c4dlab.svg",
      alt: "c4dlab",
      class: "c4dlab"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/teb.svg",
      alt: "teb",
      class: "teb"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/ujam.svg",
      alt: "ujam",
      class: "ujam"
    }
  ]

  toolsOptions = ['id', 'img', 'alt', 'class', 'link'];

  toolsCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/adobe-xd.svg",
      alt: "adobe-xd",
      class: "adobe-xd"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/adobe-illustrator.svg",
      alt: "c4dlab",
      class: "c4dlab"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/zeplin.svg",
      alt: "teb",
      class: "teb"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/sketch.svg",
      alt: "ujam",
      class: "ujam"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/angular.svg",
      alt: "ujam",
      class: "ujam"
    },
    {
      id: '5',
      link: "",
      img: "../../assets/images/flutter.svg",
      alt: "ujam",
      class: "ujam"
    },
    {
      id: '6',
      link: "",
      img: "../../assets/images/ionic.svg",
      alt: "ujam",
      class: "ujam"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
