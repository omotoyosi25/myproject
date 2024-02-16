import Image from 'next/image'
import React from 'react'
import style from '../style.module.css'
import Link from 'next/link'


export const govern =
  [
    {
      id: 1,
      title: "The Changing Dynamics of Global Diplomacy",
      subtitle: "Navigating the Complexities in the 21st Century",
      author: "Emma Thompson",
      author_image: "/author2.jpg",
      image: "/global.jpg",
      read_time: "8 mins",
      date_posted: "2023-01-15",
      content: [
        "In an era marked by geopolitical shifts and technological advancements, the landscape of global diplomacy is undergoing a profound transformation. Traditional power dynamics are being challenged as new players assert themselves on the world stage. This article explores the factors shaping these changes and the challenges and opportunities they present for international relations.",
        "As non-state actors gain influence and digital communication reshapes the way nations interact, the rules of diplomacy are evolving. The emergence of cyber warfare, economic interdependence, and global challenges like climate change require a reevaluation of diplomatic strategies. Navigating this intricate web demands innovative approaches that transcend traditional statecraft.",
        "Furthermore, the rise of populist movements in various countries adds a layer of complexity to international relations. Leaders must balance domestic pressures with global responsibilities, and the success of diplomacy hinges on adaptability and foresight. The changing dynamics of global diplomacy demand a nuanced understanding of interconnected issues and a willingness to embrace collaborative solutions.",
        "In the coming years, diplomats and policymakers will face the formidable task of fostering cooperation in an increasingly interconnected but uncertain world. As we examine the current state of global diplomacy, it becomes clear that strategic agility and effective communication are more crucial than ever to navigate the intricate web of international relations."
      ]
    },
    {
      id: 2,
      title: "The Role of Social Media in Modern Politics",
      subtitle: "Shaping Public Opinion and Redefining Campaigns",
      author: "Johnathan Rodriguez",
      author_image: "/author2.jpg",
      image: "/social.jpg",
      read_time: "6 mins",
      date_posted: "2023-02-02",
      content: [
        "Social media has become an influential force in shaping political landscapes worldwide. As platforms like Facebook, Twitter, and Instagram connect billions of people, the impact on political discourse and campaigns is undeniable. This article delves into the role of social media in modern politics, exploring its strengths, challenges, and the implications for democratic processes.",
        "One of the strengths of social media lies in its ability to provide a platform for diverse voices and opinions. Politicians can engage directly with their constituents, and citizens can participate in discussions that transcend traditional media narratives. However, this democratization of information comes with challenges, including the spread of misinformation and the polarization of public opinion.",
        "In the realm of political campaigns, social media has revolutionized the way candidates connect with voters. From viral moments to targeted advertising, the digital landscape has become a crucial battleground. Yet, questions arise about the ethical use of data, the role of algorithms, and the potential for online platforms to influence electoral outcomes.",
        "As we navigate this digital era, it is essential to critically examine the impact of social media on political processes. Striking a balance between free expression and responsible online engagement will be key to ensuring that social media remains a tool for democratic participation rather than a source of division and manipulation."
      ]
    },
    {
      id: 3,
      title: "The Rise of Populism: A Global Phenomenon",
      subtitle: "Analyzing Causes, Consequences, and Controversies",
      author: "Sophie Chen",
      author_image: "/author2.jpg",
      image: "/popular.jpg",
      read_time: "7 mins",
      date_posted: "2023-02-20",
      content: [
        "In recent years, the world has witnessed a surge in populist movements, reshaping political landscapes across continents. This article aims to dissect the phenomenon of populism, examining its root causes, consequences for governance, and the controversies surrounding its rise.",
        "Populism often emerges in response to economic disparities, cultural shifts, and a perceived disconnect between political elites and the general population. Leaders adopting populist rhetoric promise to champion the concerns of the 'common people' against established institutions. While this approach resonates with many, it also raises concerns about the erosion of democratic norms and institutions.",
        "The consequences of populism extend beyond domestic politics, influencing foreign policy, international alliances, and global cooperation. As populist leaders challenge the status quo, they introduce a degree of unpredictability that can have far-reaching implications. This article delves into case studies from various regions to provide a nuanced understanding of the diverse manifestations and impacts of populism.",
        "In a world grappling with complex challenges, understanding the dynamics of populist movements is essential for policymakers, analysts, and citizens alike. By unraveling the layers of this global phenomenon, we can engage in informed discussions and work towards fostering resilient democracies."
      ]
    },
    {
      id: 4,
      title: "The Ethics of AI in Political Decision-Making",
      subtitle: "Balancing Efficiency with Democratic Values",
      author: "Michael Turner",
      author_image: "/author2.jpg",
      image: "/ai.jpg",
      read_time: "9 mins",
      date_posted: "2023-03-10",
      content: [
        "Artificial Intelligence (AI) is increasingly finding its way into the realm of political decision-making, promising efficiency and data-driven governance. However, the integration of AI in politics raises ethical questions about transparency, accountability, and the potential for bias. This article explores the delicate balance between leveraging AI for governance and upholding democratic principles.",
        "Proponents argue that AI can enhance decision-making processes by analyzing vast amounts of data, predicting outcomes, and optimizing resource allocation. From policy formulation to crisis management, the applications of AI seem limitless. However, skeptics raise concerns about the opacity of algorithms, the risk of reinforcing existing biases, and the potential for undemocratic decision-making by machines.",
        "As AI systems become more sophisticated, policymakers must grapple with the challenge of creating regulatory frameworks that ensure responsible and ethical use. Transparency, accountability, and public engagement are paramount to prevent the concentration of power in the hands of a few. Striking the right balance between harnessing the potential of AI and safeguarding democratic values is a pressing concern for the future of political governance.",
        "This article invites readers to contemplate the ethical implications of AI in politics, encouraging a dialogue that will shape the responsible integration of technology into the decision-making processes that impact us all."
      ]
    },
    {
      id: 5,
      title: "Climate Change Policy: Global Challenges and Collaborative Solutions",
      subtitle: "Addressing the Urgency of Environmental Stewardship",
      author: "Elena Rodriguez",
      author_image: "/author.jpg",
      image: "/climate.jpg",
      read_time: "10 mins",
      date_posted: "2023-04-05",
      content: [
        "As the global community grapples with the escalating impacts of climate change, the need for comprehensive and collaborative policy solutions has never been more urgent. This article delves into the challenges posed by climate change, the complexities of international cooperation, and the crucial role of political leaders in addressing this existential threat.",
        "The scientific consensus on climate change is clear, and its consequences are already evident. Rising sea levels, extreme weather events, and biodiversity loss demand immediate action. Crafting effective climate policies requires a commitment to sustainable practices, international collaboration, and bold leadership.",
        "However, achieving consensus among nations with varying priorities and interests is a formidable task. The article examines key international agreements, the role of grassroots movements, and the potential for green technologies to drive a sustainable transition. It emphasizes the importance of political will and public engagement in steering the course toward a more sustainable and resilient future.",
        "In the face of this planetary challenge, political leaders have a historic responsibility to unite and implement policies that prioritize environmental stewardship. This article serves as a call to action, urging readers to consider the intersection of politics and the environment and the pivotal role political decisions play in shaping the future of our planet."
      ]
    }
  ]
  
const political = govern.map(govt => (
  <article key={govt.id} className='grid justify-center items-center'>
    <Link href={`/politic/${govt.title.split(' ').join('')}`}>
    <Image src={govt.image} alt='govt' width={300} height={300} className={style.politics}/>
    <h2 className='font-bold text-center'>{govt.title}</h2>
    </Link>
  </article>
))


export default function page() {
  return (
    <main className='grid grid-cols-3 m-auto w-4/5 '>{political}</main>
  )
}
