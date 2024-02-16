import Image from "next/image"
import style from "../style.module.css"
import Link from "next/link"


export const code= [
  {
    title: "Mastering HTML Basics",
    subtitle:"A Comprehensive Guide",
    id: "html101",
    authorName: "John Coder",
    authorImage: "/author2.jpg",
    image: "/html.jpg",
    readTime: "10 min",
    datePosted: "2023-01-15",
    content: [
      "HTML, or HyperText Markup Language, is the backbone of web development. In this comprehensive guide, we will explore the basics of HTML, from structuring your documents to understanding essential tags.",
      "Whether you're a beginner or looking to refresh your skills, this article will provide you with the knowledge needed to create well-structured and semantically meaningful web pages.",
      "Join us on this journey as we dive into the world of HTML and uncover the secrets to building a solid foundation for your web development endeavors."
    ],
  },
  {
    title: "Responsive Web Design",
    subtitle:"Responsive Web Design with HTML and CSS",
    id: "responsive_design",
    authorName: "Emily Developer",
    authorImage: "/author2.jpg",
    image: "/tech1.webp",
    readTime: "8 min",
    datePosted: "2023-02-02",
    content: [
      "Creating websites that look great on any device is a must in today's digital landscape. In this article, we'll explore the principles of responsive web design using HTML and CSS.",
      "Learn how to use media queries, flexible grids, and other techniques to ensure your web pages adapt seamlessly to different screen sizes. Follow practical examples to implement responsive design in your projects today!",
      "Whether you're a frontend developer or just starting your coding journey, mastering responsive web design is essential for creating user-friendly and accessible websites.",
    ],
  },
  {
    title: "A Guide for Developers",
    subtitle: "Optimizing HTML for Search Engines",
    id: "seo_optimization",
    authorName: "Sarah SEO",
    authorImage: "/author2.jpg",
    image: "/tech3.webp",
    readTime: "12 min",
    datePosted: "2023-03-10",
    content: [
      "Unlock the potential of your web pages by optimizing HTML for search engines. In this guide, we'll cover best practices for structuring your HTML to enhance search engine visibility and improve your website's ranking.",
      "Discover the importance of meta tags, header tags, and other HTML elements in the context of SEO. Follow actionable tips to make your content more discoverable and increase organic traffic to your site.",
      "Whether you're a seasoned developer or just getting started, this article will empower you to make your web pages stand out in the crowded online space."
    ],
  },
  {
    title: "The Power of HTML Forms",
    sibtitle:"A Deep Dive into User Interaction",
    id: "html_forms",
    authorName: "Michael Formsmith",
    authorImage: "/author2.jpg",
    image: "/tech4.jpg",
    readTime: "15 min",
    datePosted: "2023-04-05",
    content: [
      "Forms are a fundamental part of web development, enabling user interaction and data collection. Join us in this in-depth exploration of HTML forms, from basic form elements to advanced techniques for creating interactive and user-friendly forms.",
      "Learn how to validate user input, implement various form controls, and enhance the overall user experience. Whether you're building a simple contact form or a complex registration system, this article has you covered.",
      "Stay tuned as we unravel the intricacies of HTML forms and empower you to create web applications that seamlessly interact with users."
    ],
  },
  {
    title: "Going Beyond HTML",
    subtitle:"Exploring Advanced Frontend Technologies",
    id: "advanced_frontend",
    authorName: "Alex Techwizard",
    authorImage: "/author2.jpg",
    image: "/tech2.webp",
    readTime: "18 min",
    datePosted: "2023-05-20",
    content: [
      "HTML is the foundation, but the world of frontend development is vast and ever-evolving. Join us on a journey beyond HTML as we explore advanced frontend technologies and their role in creating modern, interactive web applications.",
      "From JavaScript frameworks to CSS preprocessors, we'll delve into tools and technologies that elevate your frontend development skills. Stay informed about the latest trends and empower yourself to build cutting-edge web applications.",
      "Whether you're a frontend enthusiast or a seasoned developer, this article will open doors to the exciting possibilities that lie beyond the basics of HTML."
    ],
  },
]



const codes = code.map(html => (
  <article key={html.id} className="grid text-center justify-center">
    <Link href={`/htmlslug/${html.title.split(' ').join('')}`} >
    <Image src={html.image} alt="html" width={300} height={300} className={style.entertainment}/>
    <h2 className="font-bold text-xs ">{html.title}</h2>
    </Link>
  </article>
)) 

 export default function page() {
   return (
     <div className="grid grid-cols-3">{codes}</div>
   )
 }
 