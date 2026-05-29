import Bharatesh from "../assets/Bharatesh_B.jpg"
import Sangamesh from "../assets/Sangamesh_K.jpg"
import Panchakshari from "../assets/Panchakshari_J.jpg"
import Swayam from "../assets/Swayam_N.jpg"
import Pooja from "../assets/Pooja.jpg"
import Aditya from "../assets/Aditya_V.jpg"
import Apoorva from "../assets/Apoorva_J.jpg"
import Subramanya from "../assets/Subramanya_M.jpg"
import Ashwini from "../assets/Ashwini_Y.jpg"
import Vishwanath from "../assets/Vishwanath_D.jpg"
import Kartik from "../assets/Kartik_E.jpg"
import Shreya from "../assets/Shreya_H.jpg"
import Sakshi from "../assets/Sakshi_D.jpg"
import Shreyas from "../assets/Shreyas_R.jpg"
import Sanju from "../assets/Sanju_H.jpg"
import Bhagyashree from "../assets/Bhagyashree_K.jpg"
import Omkar from "../assets/Omkar_S.jpg"
import Soorabhi from "../assets/Soorabhi_A.jpg"
import Channa from "../assets/Channamallikarjun.jpg"
import Siddharudha from "../assets/Siddharudha_B.jpg"
import Ankit from "../assets/Ankit.jpg"
import Pranav from "../assets/Pranav_P.jpg"
import Triveni from "../assets/Triveni_V.jpg"

export interface Member {
  name: string;
  designation: string;
  image: string;
  linkedin: string;
  portfolio: string;
  email: string;
}

export interface Committee {
  name: string;
  members: Member[];
}

export const committees: Committee[] = [
  {
    name: "",
    members: [
      {
        name: "Bharatesh Karabari",
        designation: "Chairperson",
        image: `${Bharatesh}`,
        linkedin: "https://www.linkedin.com/in/bharatesh-b-10707a246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://v0-bharatesh-portfolio-design.vercel.app/",
        email: "bharteshbkieee@gmail.com",
      },
      {
        name: "Sangamesh Kanabur ",
        designation: "Vice Chairperson",
        image: `${Sangamesh}`,
        linkedin: "https://www.linkedin.com/in/channamallikarjun-c-yankanchi-a6a951307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://sangamesh-kanabur-gbw6iqm.gamma.site/",
        email: "sanguk2005@ieee.org",
      },
      {
        name: "Panchakshari Jogi",
        designation: "Treasurer",
        image: `${Panchakshari}`,
        linkedin: "https://www.linkedin.com/in/panchakshari-jogi-412451212",
        portfolio: "https://panchakshari99.github.io/websiteportfolio/",
        email: "panchu6486@gmail.com",
      },
      {
        name: "Swayam Nandagaon",
        designation: "Secretary",
        image: `${Swayam}`,
        linkedin: "https://www.linkedin.com/in/swayam-nandagaon-237616320?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        portfolio: "https://swayams-portfolio-website.b12sites.com/",
        email: "swayamnandagaon7@gmail.com",
      },
      {
        name: "Pooja Rathi ",
        designation: "Joint Secretary",
        image: `${Pooja}`,
        linkedin: "https://www.linkedin.com/in/pooja-rathi-72679b332⁠",
        portfolio: "https://pooja-ashok-rathi-portfolio.b12sites.com/",
        email: "poojaarathi27@gmail.com",
      },
      {
        name: "Aditya Vantagodi ",
        designation: "Joint Treasurer",
        image: `${Aditya}`,
        linkedin: "https://www.linkedin.com/in/aditya-vantagodi-4b3871333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        portfolio: "https://shreyahalingali5.github.io/Adityaieee/",
        email: "adityavantagodi@gmail.com",
      },
    ],
  },
  {
    name: "Operating Committee",
    members: [
      {
        name: "Apoorva Joshi ",
        designation: "Operating Committee Chair",
        image: `${Apoorva}`,
        linkedin: "https://www.linkedin.com/in/apoorva-kedarnath-joshi",
        portfolio: "https://apoorvajoshi.vercel.app/",
        email: "apoorvajoshika@ieee.org",
      },
      {
        name: "Pranav Pattan ",
        designation: "Operating Committee Vice Chair",
        image: `${Pranav}`,
        linkedin: "https://www.linkedin.com/in/pranav-r-pattan-792082298?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        portfolio: "https://pranavpattan.vercel.app/",
        email: "pranavpattan@ieee.org",
      },
      {
        name: "Vishwanath Diggavi ",
        designation: "MDC Chair",
        image: `${Vishwanath}`,
        linkedin: "/in/vishwanath-diggavi",
        portfolio: "https://vishwa-2004.github.io/vishwanath-diggavi.github.io/",
        email: "vishwanathdiggavi07@ieee.org",
      },
      {
        name: "Ashwini Yakajanavar ",
        designation: "SAC Chair",
        image: `${Ashwini}`,
        linkedin: "www.linkedin.com/in/ashwini-yakajanavar-642225390",
        portfolio: "https://shre34.github.io/Ashwini/",
        email: "ashwiniyakajanavar94@gmail.com",
      },
      {
        name: "Shreya Halingali",
        designation: "Meeting Coordinator",
        image: `${Shreya}`,
        linkedin: "https://www.linkedin.com/in/shreyahalingali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://shreyahalingali5.github.io/Shreya-portfolio/",
        email: "shreyahalingali5@gmail.com",
      },
      {
        name: "Kartik Emmi",
        designation: "Operating Committee Secretary",
        image: `${Kartik}`,
        linkedin: "https://www.linkedin.com/in/kartik-emmi-637a9532a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://kartik-emmi-portfolio.lovable.app",
        email: "kmemmi05@gmail.com",
      },
      {
        name: "Subramanya Math ",
        designation: "Operating Committee Secretary",
        image: `${Subramanya}`,
        linkedin: "https://www.linkedin.com/in/subramanya-math-406142334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://subramnya.github.io/portfolio/",
        email: "subramanyamath876@gmail.com",
      },
      {
        name: "Sakshi Desai ",
        designation: "Membership Coordinator",
        image: `${Sakshi}`,
        linkedin: "https://www.linkedin.com/in/sakshi-desai-024146334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://sakshi-1612.github.io/portfolio/",
        email: "dsakshi1612@gmail.com",
      },
      {
        name: "Triveni Venkatesh",
        designation: "Membership Coordinator",
        image: `${Triveni}`,
        linkedin: "https://www.linkedin.com/in/trivenivenkatesh",
        portfolio: "https://triveni6363.github.io/portfolio/",
        email: "trivenivenkatesh55@gmail.com",
      }
      
    ],
  },
  {
    name: "Web Team",
    members: [
      {
        name: "Shreyas Rathod",
        designation: "Webmaster",
        image: `${Shreyas}`,
        linkedin: "www.linkedin.com/in/shreyas-rathod-97b2a4303",
        portfolio: "https://shre34.github.io/Shreyas/",
        email: "shreyasrathod54@gmail.com",
      },
      {
        name: "Bhagyashri kanade",
        designation: " Joint Webmaster",
        image: `${Bhagyashree}`,
        linkedin: "https://www.linkedin.com/in/bhagyashri-kanade-4462122aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://myrepository2.vercel.app",
        email: "bhagyashree4876@gmail.com",
      },
      {
        name: "Sanju Hugar",
        designation: "Joint Webmaster",
        image: `${Sanju}`,
        linkedin: "https://www.linkedin.com/in/sanju-hugar-a01380337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://sanjuhugar123.github.io/portfolio/",
        email: "sanjuhugar2003@gmail.com",
      },
    ],
  },
  {
    name: "Content Team",
    members: [
      {
        name: "Omkar Sanjeev ",
        designation: "Design Head",
        image: `${Omkar}`,
        linkedin: "http://www.linkedin.com/in/omkarsanjeev",
        portfolio: "https://vin-cenz01.github.io/Portfolio/",
        email: "prooomkar1@ieee.org",
      },
      {
        name: "Channamallikarjun Y",
        designation: "Design Lead",
        image: `${Channa}`,
        linkedin: "https://www.linkedin.com/in/channamallikarjun-c-yankanchi-a6a951307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://channamallikarjunportfolio.lovable.app",
        email: "cmcyankanchi@gmail.com",
      },
      {
        name: "Soorabhi Aragi",
        designation: "Editorial Head",
        image: `${Soorabhi}`,
        linkedin: "https://www.linkedin.com/in/soorabhi-aragi-b99143334?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        portfolio: "https://soorabhi-aragi-portfolio.b12sites.com/",
        email: "soorabhiaragi@gmail.com",
      },
       {
        name: "Siddharudha M B",
        designation: "Social Media Head",
        image: `${Siddharudha}`,
        linkedin: "https://www.linkedin.com/in/siddharudha-m-b-695075293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        portfolio: "https://sidvlogsin.github.io/sidvlogsportfolio/",
        email: "siddubhairaji1123@gmail.com",
      },
      {
        name: "Honawad Ankit",
        designation: "Social Media Lead",
        image: `${Ankit}`,
        linkedin: "https://www.linkedin.com/in/honawad-ankit-4a4a4232a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        portfolio: "https://honawadankitportfolio.lovable.app",
        email: "Sankit02429@gmail.com",
      },
    ],
  },
];
