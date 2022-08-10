import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onekana',
  templateUrl: './onekana.component.html',
  styleUrls: ['./onekana.component.scss']
})
export class OnekanaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectItems: any[]=[
    {images : "../../assets/images/role.svg", text: "My Role", description: "UX/UI Designer", description2: "Front-end Developer"},
    {images : "../../assets/images/team.svg", text: "The Team", description: "2x UX/UI Designer", description2: "3x Front-end Developer", description3: "1x Back-end Developer"},
    {images : "../../assets/images/contributions.svg", text: "My Key Contributions", description: "Concept Ideation", description2: "Prototyping", description3: "User Research", description4: "Interaction Design", description5: "Logo Design", description6: "App & Dashboard Development"},
    {images : "../../assets/images/tools.svg", text: "Tools Used", description: "Adobe XD", description2: "Adobe Illustrator", description3: "Ionic", description4: "Angular"},
    {images : "../../assets/images/duration.svg", text: "Duration", description: "6 years - ongoing"}
  ]

  approach: any[]=[
    {images : "../../assets/images/empathy.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/specify.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/ideate.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/prototype.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/verify.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
    {images : "../../assets/images/verify.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
  ]

  partnerOptions = ['id', 'img', 'alt', 'class', 'link'];

  partnerCarousel: any = [
    {
      id: '0',
      link: "https://www.unicef.org/kenya/",
      img: "../../assets/images/unicef.svg",
      alt: "unicef-logo",
      class: "unicef"
    },
    {
      id: '1',
      link: "https://c4dlab.ac.ke/",
      img: "../../assets/images/c4dlab-2.svg",
      alt: "c4dlab",
      class: "c4dlab"
    },
    {
      id: '2',
      link: "https://www.naconek.go.ke/",
      img: "../../assets/images/naconek-03.svg",
      alt: "naconek",
      class: "naconek"
    },
    {
      id: '3',
      link: "https://www.education.go.ke/",
      img: "../../assets/images/coat-of-arms.png",
      alt: "coat",
      class: "coa"
    },
    {
      id: '4',
      link: "/stories-from-around",
      img: "../../assets/images/educate.svg",
      alt: "educate",
      class: "educate"
    }
  ]

}
