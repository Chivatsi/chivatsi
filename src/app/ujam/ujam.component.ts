import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ujam',
  templateUrl: './ujam.component.html',
  styleUrls: ['./ujam.component.scss']
})
export class UjamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamoOptions = ['id', 'img', 'alt', 'class', 'link'];

  dynamoCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/dynamo.png",
      alt: "",
      class: "image"
    }
  ]

  projectItems: any[]=[
    {images : "../../assets/images/role-dynamo.svg", text: "My Role", description: "Front-end Developer"},
    {images : "../../assets/images/team-dynamo.svg", text: "The Team", description: "1x UX/UI Designer", description2: "3x Front-end Developer", description3: "1x Sound Designer"},
    {images : "../../assets/images/contributions-dynamo.svg", text: "My Key Contributions", description: "Prototyping", description2: "Interaction Design", description3: "Front-end Development"},
    {images : "../../assets/images/tools-dynamo.svg", text: "Tools Used", description: "Node Js", description2: "Adobe XD", description3: "Zeplin"},
    {images : "../../assets/images/duration-dynamo.svg", text: "Duration", description: "UX/UI Design - 1 month", description2: "Software Dev - 2 months"}
  ]

  approach: any[]=[
    {images : "../../assets/images/specify-dynamo.svg", text: "Specify", description: "Feature Prioritization", description2: "Plugin Functionality"},
    {images : "../../assets/images/ideate-dynamo.svg", text: "Ideate", description: "Draft Product Design"},
    {images : "../../assets/images/prototype-dynamo.svg", text: "Bring to Life", description: "Product Design"},
    {images : "../../assets/images/verify-dynamo.svg", text: "Verify", description: "Product Testing", description2: "User Testing"},
  ]

  features: any[]=[
    {text: "50 versatile multi-effect modes"},
    {text: "290+ presets pre-categorized to maximize workflow and productivity"},
    {text: "5-pattern rhythm selector, tone control and 2 variable FX controls"},
    {text: "Available in VST, AAX, AU formats"}
  ]

  useful: any[]=[
    {image: "../../assets/images/qr-dynamo-youtube.svg", link:"https://youtu.be/CCQlsHr553A", subtext: "Finisher Dynamo", text: "YouTube"},
    {image: "../../assets/images/qr-dynamo-website.svg", link:"https://www.ujam.com/finisher/dynamo/", subtext: "Finisher Dynamo", text: "Website"},
    {image: "../../assets/images/dynamo-qr-guide.svg", link:"https://www.ujam.com/fileadmin/products/Manuals/Finisher_DYNAMO_1.0.0_User_Guide.pdf", subtext: "Finisher Dynamo", text: "User Guide"}
  ]

}
