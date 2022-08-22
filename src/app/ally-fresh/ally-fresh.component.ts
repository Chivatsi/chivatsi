import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ally-fresh',
  templateUrl: './ally-fresh.component.html',
  styleUrls: ['./ally-fresh.component.scss']
})
export class AllyFreshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  partnersOptions = ['id', 'img', 'alt', 'class', 'link'];

  partnersCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/allyfresh-1.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/allyfresh-2.png",
      alt: "",
      class: "image"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/allyfresh-3.png",
      alt: "",
      class: "image"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/allyfresh-4.png",
      alt: "",
      class: "image"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/allyfresh-5.png",
      alt: "",
      class: "image"
    }
  ]

  projectItems: any[]=[
    {images : "../../assets/images/role-black.svg", text: "My Role", description: "UX/UI Designer", description2: "Web Designer"},
    {images : "../../assets/images/team-black.svg", text: "The Team", description: "1x UX/UI Designer", description2: "1x Web Designer"},
    {images : "../../assets/images/key-black.svg", text: "My Key Contributions", description: "Prototyping", description2: "User Research", description3: "Interaction Design", description4: "Logo Design", description5: "Front-end Development"},
    {images : "../../assets/images/tools-black.svg", text: "Tools Used", description: "Adobe XD", description2: "Adobe Illustrator", description3: "Squarespace"},
    {images : "../../assets/images/duration-black.svg", text: "Duration", description: "UX/UI Design - 6 months", description2: "Front-end Dev - Continuous"}
  ]

  approach: any[]=[
    {images : "../../assets/images/empathy-black.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/specify-black.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/ideate-black.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/prototype-black.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/verify-black.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
  ]

  research: any[]=[
    {insight1: "Insight #1", insight2: "Incorporate creative techniques to capture users attention", insight3: "../../assets/images/artwork.svg", insight5: "User interviews conducted revealed that the platform requires elegant creative artwork/thumbnails to capture users attention.", insight6: "Results - Incorporate a hooking hero section on the home page with a well-shot high quality video that showcases the artist in his element."}, 
    {insight1: "Insight #2", insight2: "Showcase the artist's social media content", insight3: "../../assets/images/social-media.svg", insight5: "User interviews conducted revealed that the user is active on other social media platforms", insight6: "Results - Link the platform to all artist associated social media channels. In addition, incorporate the artist's Instagram posts and stories, YouTube and music streaming platform widgets."}, 
    {insight1: "Insight #3", insight2: "Create content that embodies the 3 pillars of the artist; music, fashion and technology", insight3: "../../assets/images/pillar.svg", insight5: "User interviews conducted revealed that the existing platform does not fully embody the unique value pillars revolving around the artist.", insight6: "Results - Categorize the content on the platform relevantly to help in clearly articulating the artist’s vision to the audience."},
    {insight1: "Insight #4", insight2: "Generally, target audiences get bored easily with too much information on a website due to short attention spans", insight3: "../../assets/images/attention.svg", insight5: "User interviews conducted revealed that the existing platform is picture intensive and therefore lengthy.", insight6: "Results - Condense the images on the landing page and convert social media links to icons thus reducing the scroll to bottom time of the platform."},
    {insight1: "Insight #5", insight2: "Showcase the artist’s successful brand partnership stories", insight3: "../../assets/images/partnership.svg", insight5: "User interviews conducted revealed that brand partnersnip success stories build up the artist's brand credibility and trust with the target audience.", insight6: "Results - Incorporate Brand Stories as it’s own navigation menu item. Additionally, create a brand story page that highlights the goals, motivations and successes for each individual partnership campaign."},
  ]

  navigation: any[]=[
    {insight2: "About Me", insight5: "The About Me page serves as a warm invite into the life of Ally Fresh, his passions, goals and motivations."}, 
    {insight2: "Music", insight5: "Showcases the DJ mixes and released tracks."},
    {insight2: "Gallery", insight5: "Photos of Ally Fresh captured by different photographers."}, 
    {insight2: "Merch", insight5: "Shop page to buy merchandise and related artist products."}, 
    {insight2: "Press Kit", insight5: "A link to the artist’s electronic press kit, rate card, technical rider and additional assets."},
    {insight2: "Contact", insight5: "Contact information to reach out and connect with the artist."}
  ]

  colors: any[]=[
    {image: "../../assets/images/black-allyfresh.svg", hex: "#141418"}
  ]

  typography: any[]=[
    {text: 'Helvetica Neue', text2: '', text3: ''},
    {text: 'Pragmatica Extended', text2: '', text3: ''},
  ]

  useful: any[]=[
    {image: "../../assets/images/ally-gr-ig.svg", link:"https://www.instagram.com/djallyfresh/", subtext: "Instagram", text: "Ally Fresh"},
    {image: "../../assets/images/ally-qr-web.svg", link:"https://www.djallyfresh.com/", subtext: "Website", text: "Ally Fresh"},
    {image: "../../assets/images/ally-qr-facebook.svg", link:"https://www.facebook.com/djallyfresh", subtext: "Facebook", text: "Ally Fresh"}
  ]


}
