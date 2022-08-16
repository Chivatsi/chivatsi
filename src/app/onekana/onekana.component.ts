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

  mobileOptions = ['id', 'img', 'alt', 'class', 'link'];

  mobileCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/onekana-1.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/onekana-2.png",
      alt: "",
      class: "image"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/onekana-3.png",
      alt: "",
      class: "image"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/onekana-4.png",
      alt: "",
      class: "image"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/onekana-5.png",
      alt: "",
      class: "image"
    },
    {
      id: '5',
      link: "",
      img: "../../assets/images/onekana-6.png",
      alt: "",
      class: "image"
    },
    {
      id: '6',
      link: "",
      img: "../../assets/images/onekana-7.png",
      alt: "",
      class: "image"
    },
    {
      id: '7',
      link: "",
      img: "../../assets/images/onekana-8.png",
      alt: "",
      class: "image"
    },
    {
      id: '8',
      link: "",
      img: "../../assets/images/onekana-9.png",
      alt: "",
      class: "image"
    },
    {
      id: '9',
      link: "",
      img: "../../assets/images/onekana-10.png",
      alt: "",
      class: "image"
    }
  ]

  webOptions = ['id', 'img', 'alt', 'class', 'link'];

  webCarousel: any = [
    {
      id: '0',
      link: "",
      img: "../../assets/images/onekana-w1.png",
      alt: "",
      class: "image"
    },
    {
      id: '1',
      link: "",
      img: "../../assets/images/onekana-w2.png",
      alt: "",
      class: "image"
    },
    {
      id: '2',
      link: "",
      img: "../../assets/images/onekana-w3.png",
      alt: "",
      class: "image"
    },
    {
      id: '3',
      link: "",
      img: "../../assets/images/onekana-w4.png",
      alt: "",
      class: "image"
    },
    {
      id: '4',
      link: "",
      img: "../../assets/images/onekana-w5.png",
      alt: "",
      class: "image"
    }
  ]

  projectItems: any[]=[
    {images : "../../assets/images/onekana-role.svg", text: "My Role", description: "UX/UI Designer", description2: "Front-end Developer"},
    {images : "../../assets/images/onekana-team.svg", text: "The Team", description: "2x UX/UI Designer", description2: "3x Front-end Developer", description3: "1x Back-end Developer"},
    {images : "../../assets/images/onekana-key.svg", text: "My Key Contributions", description: "Concept Ideation", description2: "Prototyping", description3: "User Research", description4: "Interaction Design", description5: "Logo Design", description6: "App & Dashboard Development"},
    {images : "../../assets/images/onekana-tools.svg", text: "Tools Used", description: "Adobe XD", description2: "Adobe Illustrator", description3: "Ionic", description4: "Angular"},
    {images : "../../assets/images/onekana-duration.svg", text: "Duration", description: "6 years - ongoing"}
  ]

  approach: any[]=[
    {images : "../../assets/images/onekana-empathy.svg", text: "Empathize", description: "Background Research", description2: "Founder/user interviews", description3: "Competitor Analysis"},
    {images : "../../assets/images/onekana-specify.svg", text: "Specify", description: "Feature Prioritization", description2: "App Functionality"},
    {images : "../../assets/images/onekana-ideate.svg", text: "Ideate", description: "Lo-fi Sketches"},
    {images : "../../assets/images/onekana-prototype.svg", text: "Bring to Life", description: "Prototype Design"},
    {images : "../../assets/images/onekana-verify.svg", text: "Verify", description: "Prototype Testing", description2: "User Testing"},
    {images : "../../assets/images/onekana-training.svg", text: "Training", description: "User Training", description2: "Feedback Analysis"},
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

  research: any[]=[
    {insight1: "Approach #1", insight2: "Biometric Solution", insight3: "../../assets/images/biometric.svg", insight5: "In this option, the process would involve the use of a biometric gadget to pick the unique students’ bio data at particular points during the school sessions. A fingerprint scanner would be the cheapest and easiest to deploy, with regards to usage, each student would be expected to sign in and out of each class by pressing their system registered finger against the biometric reader/scanner.", insight6: "Implication - The comparative cost of setup and infrastructure costs of the hardware devices would be relatively higher and also the recurrent costs of maintenance of the system could be relatively higher as compared to other systems."}, 
    {insight1: "Approach #2", insight2: "Optical Character Recognition (OCR)", insight3: "../../assets/images/ocr.svg", insight5: "Optical Character Recognition (OCR), is a technology that enables one to convert different types of documents, such as scanned paper documents, PDF files or images captured by a digital camera into editable and searchable data. The software singles out letters on the image, puts them into words and sentences, thus enabling one to edit the content of the original document.", insight6: "Implication - The system would rely on paper based data collection and additional steps to convert the captured data to a system. This would be additional duties to the user who is already constrained and overly stretched in terms of time hence the system is not viable and scalable. The two systems above would require third party equipment to view reports."}, 
    {insight1: "Approach #3", insight2: "Software Application", insight3: "../../assets/images/software.svg", insight5: "The third and preferred approach is to develop an integrated mobile and web application system. These system would involve the use of a mobile smart phone or a web portal to capture the students attendance data that would be transmitted via internet and processed remotely. The mobile phone and web portal would also be used to view customized reports These two applications would be accessed by different categories of users ensuring the system is scalable and fits the needs of the users without becoming an extra burden on their daily duties."}, 
  ]

  colors: any[]=[
    {image: "../../assets/images/onekana-blue.svg", hex: "#3880FF"}
  ]

  typography: any[]=[
    {text: 'Prompt', text2: 'Medium', text3: 'Recent Transactions'}
  ]

  useful: any[]=[
    {image: "../../assets/images/qr-code-manual.svg", link:"https://tzdash.request.africa/Onekana%20User%20Manual.pdf", subtext: "Document", text: "User Manual"},
    {image: "../../assets/images/qr-code-app.svg", link:"https://play.google.com/store/search?q=onekana&c=apps", subtext: "Google Playstore", text: "Mobile Application"},
    {image: "../../assets/images/qr-code-web.svg", link:"https://onekana.naconek.ke/", subtext: "onekana.naconek.ke", text: "Web Dashboard"}
  ]


}
