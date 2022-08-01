import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  about: any[]=[
    {image: "../../assets/images/location.svg", title: "Location", text1: "Nairobi, Kenya", text2: "Remote / Flexible"},
    {image: "../../assets/images/experience.svg", title: "Experience", text1: "6 years"},
    {image: "../../assets/images/contact.svg", title: "Contact", text1: "dennischivatsi@gmail.com", text2: "+254715415865"},
    {image: "../../assets/images/education.svg", title: "Education", text1: "Bachelor of Science, Computer Science, University of Nairobi", text2: "Social Impact Strategy: Tools for Entrepreneurs and Innovators, University of Pennsylvania"},
    {image: "../../assets/images/design-icons.svg", title: "My Design Icons", text1: "Steve Jobs", text2: "Virgil Abloh", text3: "Blinky Bill"},
    {image: "../../assets/images/skills.svg", title: "Skills", text1: "Web Development", text2: "UX Research", text3: "UI Design", text4: "Graphic Design", text5: "Front-end Software Development", text6: "Digital Marketing & Entrepreneurship"}
  ]

}
