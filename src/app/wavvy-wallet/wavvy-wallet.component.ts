import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wavvy-wallet',
  templateUrl: './wavvy-wallet.component.html',
  styleUrls: ['./wavvy-wallet.component.scss']
})
export class WavvyWalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  partnersOptions = ['id', 'img', 'alt', 'class', 'link'];

  partnersCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/prototype3.svg",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/prototype1.svg",
      alt: "",
      class: "image"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/prototype2.svg",
      alt: "",
      class: "image"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/prototype4.svg",
      alt: "",
      class: "image"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/prototype5.svg",
      alt: "",
      class: "image"
    },
    {
      id: '5',
      link: "",
      img: "../../assets/images/prototype6.svg",
      alt: "",
      class: "image"
    },
    {
      id: '6',
      link: "",
      img: "../../assets/images/prototype7.svg",
      alt: "",
      class: "image"
    },
    {
      id: '7',
      link: "",
      img: "../../assets/images/prototype8.svg",
      alt: "",
      class: "image"
    },
    {
      id: '8',
      link: "",
      img: "../../assets/images/prototype9.svg",
      alt: "",
      class: "image"
    },
    {
      id: '9',
      link: "",
      img: "../../assets/images/prototype10.svg",
      alt: "",
      class: "image"
    },
    {
      id: '10',
      link: "",
      img: "../../assets/images/prototype12.svg",
      alt: "",
      class: "image"
    },
    {
      id: '11',
      link: "",
      img: "../../assets/images/prototype11.svg",
      alt: "",
      class: "image"
    },
  ]

  projectItems: any[]=[
    {images : "../../assets/images/role.svg", text: "My Role", description: "UX/UI Designer"},
    {images : "../../assets/images/team.svg", text: "The Team", description: "1x UX/UI Designer", description2: "1x Front-end Developer", description3: "1x Back-end Developer"},
    {images : "../../assets/images/contributions.svg", text: "My Key Contributions", description: "Concept Ideation", description2: "Competitive Research", description3: "Prototyping", description4: "User Research", description5: "Interaction Design", description6: "Logo Design"},
    {images : "../../assets/images/tools.svg", text: "Tools Used", description: "Adobe XD", description2: "Adobe Illustrator"},
    {images : "../../assets/images/duration.svg", text: "Duration", description: "UX - one week", description2: "UI Design - two weeks"}
  ]

  approach: any[]=[
    {images : "../../assets/images/empathy.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/specify.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/ideate.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/prototype.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/verify.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
  ]

  research: any[]=[
    {insight1: "Insight #1", insight2: "Spending Money Without A Budget", insight3: "../../assets/images/umbrella.svg", insight5: "User interviews conducted revealed that our target users very often spend money without a set budget.", insight6: "Results - Wavvy Wallet allows users to track individual transactions in a few easy steps as well as setting spending limits to manage different transaction items, that way users automatically are nudged to start Spending money with a budget."}, 
    {insight1: "Insight #2", insight2: "Tracking Expenses Seems Tasking", insight3: "../../assets/images/expense.svg", insight5: "User interviews conducted revealed that users find the process of tracking individual tasking.", insight6: "Results - Wavvy Wallet uses recommendation algorithms to auto-tag and predict user expenditures, offloading the task from the user to the machine. Users also receive notifications every time they transact reminding them to categorize the incoming transaction."}, 
    {insight1: "Insight #3", insight2: "Forming a Consistent Saving Culture", insight3: "../../assets/images/piggy.svg", insight5: "User interviews conducted revealed that users would like to form consistent saving cultures in order to achieve a positive financial positon.", insight6: "Results - The mobile application provides automated investment vehicles that allow for mobile saving with interest."}, 
    {insight1: "Insight #4", insight2: "Personalizing User Needs", insight3: "../../assets/images/personalized.svg", insight5: "User interviews conducted revealed that users have different goals, needs and motivation with regards to their financials.", insight6: "Results - Wavvy Wallet incorporates a personalized user feed that recommends alternatives based on user interests."}, 
    {insight1: "Insight #5", insight2: "Marketing Campaigns For Business", insight3: "../../assets/images/marketing.svg", insight5: "User interviews conducted revealed that users would like to increase their revenues.", insight6: "Results - The platform identifies return customers and populate marketing lists for Bulk SMS and social media marketing campaigns by auto-generating customer lifetime value."}
  ]

  colors: any[]=[
    {image: "../../assets/images/purple.svg", hex: "#7240FF"},
    {image: "../../assets/images/yellow.svg", hex: "#FFCC66"},
    {image: "../../assets/images/blue.svg", hex: "#24B6F7"},
    {image: "../../assets/images/red.svg", hex: "#EE4444"},
    {image: "../../assets/images/gray.svg", hex: "#DFDFD6"},
    {image: "../../assets/images/black.svg", hex: "#141418"}
  ]

  typography: any[]=[
    {text: 'Montserrat', text2: 'Medium', text3: 'Recent Transactions'}
  ]
}

