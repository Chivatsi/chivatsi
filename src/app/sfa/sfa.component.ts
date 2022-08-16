import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sfa',
  templateUrl: './sfa.component.html',
  styleUrls: ['./sfa.component.scss']
})
export class SfaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  partnersOptions = ['id', 'img', 'alt', 'class', 'link'];

  partnersCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/sfa-1.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/sfa-2.png",
      alt: "",
      class: "image"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/sfa-3.png",
      alt: "",
      class: "image"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/sfa-4.png",
      alt: "",
      class: "image"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/sfa-5.png",
      alt: "",
      class: "image"
    }
  ]

  projectItems: any[]=[
    {images : "../../assets/images/role-black.svg", text: "My Role", description: "UX/UI Designer", description2: "Wordpress Developer"},
    {images : "../../assets/images/team-black.svg", text: "The Team", description: "1x UX/UI Designer", description2: "2x Wordpress Developer"},
    {images : "../../assets/images/key-black.svg", text: "My Key Contributions", description: "Prototyping", description2: "User Research", description3: "Interaction Design", description4: "Logo Design", description5: "Front-end Development"},
    {images : "../../assets/images/tools-black.svg", text: "Tools Used", description: "Adobe XD", description2: "Wordpress"},
    {images : "../../assets/images/duration-black.svg", text: "Duration", description: "UX/UI Design - one month", description2: "Wordpress Dev - 3 months"}
  ]

  approach: any[]=[
    {images : "../../assets/images/empathy-black.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/specify-black.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/ideate-black.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/prototype-black.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/verify-black.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
  ]

  research: any[]=[
    {insight1: "Insight #1", insight2: "Document travel stories on the go", insight3: "../../assets/images/travel.svg", insight5: "User interviews conducted revealed that our target user requires a platform that is easy to use on the go.", insight6: "Results - Wordpress was the ideal content management system selected to allow for easy creating, editing and publishing content. The platform offers a mobile application to allow for publishing on the go."}, 
    {insight1: "Insight #2", insight2: "Showcase the content creator’s diverse mobile photography portfolio", insight3: "../../assets/images/mobile.svg", insight5: "User interviews conducted revealed that user is active on other social media platforms.", insight6: "Results - Integrate the content creator’s Pexel portfolio and social media accounts."}, 
    {insight1: "Insight #3", insight2: "Capture travel stories in audio format", insight3: "../../assets/images/podcast.svg", insight5: "User interviews conducted revealed that user is motivated to develop a podcast.", insight6: "Results - Integrate the content creator’s anchor.fm podcast channel."}, 
    {insight1: "Insight #4", insight2: " Eliminate the guilt and difficulty of publishing content that’s attributed to travel burnout", insight3: "../../assets/images/burnout.svg", insight5: "User interviews conducted revealed that the user is frustrated by the difficulty of posting content on the go onto the journal.", insight6: "Results - Integrate an Instagram-stories with highlights like feature onto the platform that either pulls content directly from the content creator’s Instagram or allows for publishing of highlights."}, 
  ]

  navigation: any[]=[
    {insight2: "About Me", insight5: "The About Me page contains an intriguing piece delving deeper into who Maryann is. It serves as a warm invite to readers into the life of the persona behind the articles on Stories From Around."}, 
    {insight2: "Photography", insight5: "Links out to Maryann’s Pexels Profile that showcases her photography works."},
    {insight2: "Podcast", insight5: "Links to the creator’s anchor.fm podcast channel."}, 
    {insight2: "Contact", insight5: "Contains a brief form that allows readers to get in touch with Maryann."}, 
    {insight2: "Explore", insight5: "This page contains a carousel of blogs from a select category. It’s accessed by pressing the ‘Explore’ button on the Home page welcome section."}
  ]

  colors: any[]=[
    {image: "../../assets/images/yellow-sfa.svg", hex: "#FFC03A"}
  ]

  typography: any[]=[
    {text: 'Raleway', text2: 'Medium', text3: 'Recent Transactions', class: 'raleway'},
    {text: 'Oswald', text2: 'Medium', text3: 'Recent Transactions', class: 'oswald'},
    {text: 'Primera Signature', text2: 'Medium', text3: 'Recent Transactions', class: 'primera'}
  ]

  useful: any[]=[
    {image: "../../assets/images/sfa-qr-pexels.svg", link:"https://www.pexels.com/@maryannkariuki/", subtext: "Pexels", text: "Photography Portfolio"},
    {image: "../../assets/images/sfa-qr-web.svg", link:"https://storiesfromaround.com/", subtext: "Website", text: "Storiesfromaround"},
    {image: "../../assets/images/sfa-qr-anchor.svg", link:"https://anchor.fm/maryann-kariuki0", subtext: "Podcast", text: "Anchor Fm"}
  ]

}
