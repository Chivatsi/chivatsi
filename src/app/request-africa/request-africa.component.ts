import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-africa',
  templateUrl: './request-africa.component.html',
  styleUrls: ['./request-africa.component.scss']
})
export class RequestAfricaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  webOptions = ['id', 'img', 'alt', 'class', 'link'];

  webCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/web-1.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/web-2.png",
      alt: "",
      class: "image"
    }
  ]

  memberOptions = ['id', 'img', 'alt', 'class', 'link'];

  memberCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/member-form.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/song-form.png",
      alt: "",
      class: "image"
    }
  ]

  projectItems: any[]=[
    {images : "../../assets/images/role-orange.svg", text: "My Role", description: "UX/UI Designer", description2: "Graphic Design", description3: "Front-end Developer"},
    {images : "../../assets/images/team-orange.svg", text: "The Team", description: "1x UX/UI Designer", description2: "2x Front-end Developer", description3: "1x Back-end Developer"},
    {images : "../../assets/images/contributions-orange.svg", text: "My Key Contributions", description: "Prototyping", description2: "User Research", description3: "Interaction Design", description4: "Logo Design", description5: "Front-end Development"},
    {images : "../../assets/images/tools-orange.svg", text: "Tools Used", description: "Adobe XD", description2: "Adobe Illustrator", description3: "Angular"},
    {images : "../../assets/images/duration-orange.svg", text: "Duration", description: "UX/UI Design - 2 years", description2: "Front-end Dev - 3 years"}
  ]

  approach: any[]=[
    {images : "../../assets/images/empathy-orange.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/specify-orange.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/ideate-orange.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/prototype-orange.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/verify-orange.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
  ]

  research: any[]=[
    {insight1: "Insight #1", insight2: "Inaccurate music identification, barren reporting and insufficient data analysis for decision making", insight3: "../../assets/images/music.svg", insight5: "User research conducted revealed that our target user requires a platform that provides accurate and real-time logs to address the need for transparency.", insight6: "Results - Integrate automated delivery of real-time logs via whatsApp and a web dashboard to maximize on convenience and prompt delivery. The logs also contain a time stamped audio file of the matching song preview matched from terrestrial media."}, 
    {insight1: "Insight #2", insight2: "Unchecked administrative and operational costs by collection management organisations (CMOs)", insight3: "../../assets/images/unchecked.svg", insight5: "User research conducted revealed that the CMOs system is plagued by corruption resulting to unchecked adminstrative and operational costs.", insight6: "Results - Foster civic education amongst artists and the stakeholder community regarding the importance of artist royalties and owning your intellectual property."}, 
    {insight1: "Insight #3", insight2: "Inefficient and costly methods of registering right-holders and manual submissions of music to the respective CMOs", insight3: "../../assets/images/expensive.svg", insight5: "User interview conducted revealed that the process of registering artistic works in rather time-consuming and manual.", insight6: "Results - Integrate a right holder registration and music submissions module to the web portal."},
  ]

  colors: any[]=[
    {image: "../../assets/images/item-orange.svg", hex: "#FF5851"}
  ]

  typography: any[]=[
    {text: 'Avenir Medium', text2: '', text3: 'Recent Transactions', class: 'raleway'},
    {text: 'Avenir Book', text2: '', text3: 'Recent Transactions', class: 'oswald'}
  ]

  useful: any[]=[
    {image: "../../assets/images/qr-request.svg", link:"https://www.pexels.com/@maryannkariuki/", subtext: "Web Dashboard", text: "Request Africa"},
  ]

  partnersOptions = ['id', 'img', 'alt', 'class', 'link'];

  partnersCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/request-1.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/request-2.png",
      alt: "",
      class: "image"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/request-3.png",
      alt: "",
      class: "image"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/request-4.png",
      alt: "",
      class: "image"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/request-5.png",
      alt: "",
      class: "image"
    }
  ]
}
