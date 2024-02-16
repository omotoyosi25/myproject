import Image from 'next/image'
import style from "../style.module.css"
import Link from 'next/link'



export const faith = [
    {
      id: 1,
      title: "Exploring Sacred Festivals",
      subtitle: "A Journey into the Spiritual Celebrations Across Cultures",
      author: "Anna Mitchell",
      author_image: "/author1.jpg",
      image: "/religion.jpg",
      read_time: "8 minutes",
      date_posted: "2023-01-15",
      content: [
        "Sacred festivals hold a significant place in various religious traditions, offering moments of reflection, gratitude, and communal celebration. In this exploration, we will delve into the diverse sacred festivals celebrated across cultures, uncovering the spiritual significance that unites communities globally.",
        "From Diwali's vibrant lights symbolizing the triumph of good over evil to Ramadan's month-long fasting fostering self-discipline and empathy, sacred festivals provide a cultural tapestry that weaves together ancient traditions and contemporary beliefs.",
        "This article aims to transcend geographical boundaries, shedding light on lesser-known sacred festivals that carry profound spiritual meanings. By understanding and appreciating these diverse celebrations, we can foster interfaith understanding and enrich our own spiritual journeys.",
        "Join us on this insightful journey as we explore the rituals, traditions, and spiritual significance of sacred festivals. Through shared stories and practices, we discover the common threads that bind us together in our collective pursuit of meaning and connection."
      ]
    },
    {
      id: 2,
      title: "The Role of Faith",
      subtitle: "Drawing Strength from Spiritual Beliefs During Challenges",
      author: "David Patel",
      author_image: "/author2.jpg",
      image: "/religion.jpg",
      read_time: "10 minutes",
      date_posted: "2023-02-05",
      content: [
        "Faith has long been a source of solace and strength for individuals facing adversity. In this article, we will explore the transformative power of faith, examining how various religious beliefs provide a foundation for resilience in challenging times.",
        "The stories of individuals who turn to their faith in times of hardship are both inspiring and universal. Whether it's through prayer, meditation, or rituals, faith becomes a guiding light that helps navigate the stormy seas of life.",
        "We will delve into case studies and personal narratives, showcasing the ways in which faith communities come together to support one another during crises. The communal aspect of faith often plays a crucial role in fostering resilience and hope.",
        "Join us in this exploration of the profound impact that faith can have on individuals and communities facing adversity. Through a deeper understanding of these experiences, we gain insights into the resilience of the human spirit and the role of spirituality in overcoming challenges."
      ]
    },
    {
      id: 3,
      title: "Sacred Spaces",
      subtitle: "A Visual and Spiritual Journey through Iconic Religious Sites",
      author: "Sophia Rodriguez",
      author_image: "/author3.jpg",
      image: "/religion.jpg",
      read_time: "12 minutes",
      date_posted: "2023-03-20",
      content: [
        "Places of worship, whether grand cathedrals, ancient temples, or humble mosques, serve as physical embodiments of spiritual devotion. This article invites you on a captivating journey through some of the world's most iconic and sacred spaces, exploring their architectural marvels and spiritual significance.",
        "Beyond their architectural beauty, these sacred spaces carry a deep spiritual resonance. From the serene ambiance of Buddhist monasteries to the awe-inspiring grandeur of cathedrals, each place of worship tells a unique story of faith and devotion.",
        "Through stunning visuals and historical insights, we will uncover the cultural and religious diversity expressed in these sacred spaces. This visual and spiritual journey aims to foster appreciation for the rich tapestry of beliefs that adorn our world.",
        "Join us as we virtually traverse continents and cultures, exploring the sacredness encapsulated within these architectural wonders. Through this exploration, we hope to inspire a sense of awe and reverence for the diverse ways in which humanity seeks the divine."
      ]
    },
    {
      id: 4,
      title: "The Intersection",
      subtitle: "Navigating the Relationship Between Faith and Scientific Inquiry",
      author: "Dr. Jonathan Barnes",
      author_image: "/author4.jpg",
      image: "/religion.jpg",
      read_time: "15 minutes",
      date_posted: "2023-04-10",
      content: [
        "The relationship between science and religion has been a subject of debate for centuries. In this thought-provoking article, Dr. Jonathan Barnes, a renowned scientist and theologian, explores the intersections and dialogues between these seemingly divergent realms, shedding light on how they can coexist harmoniously.",
        "Dr. Barnes will draw from his expertise in both fields to dismantle common misconceptions and stereotypes surrounding the supposed conflict between science and religion. The article will highlight instances where scientific inquiry and spiritual understanding complement each other.",
        "Through careful analysis and historical examples, Dr. Barnes will navigate the complexities of this relationship, encouraging readers to embrace the idea that science and faith can coexist and even enhance our understanding of the universe.",
        "Join us in this intellectually stimulating exploration as we seek to bridge the gap between science and religion. Driven by a spirit of inquiry and open-mindedness, this article aims to inspire conversations that transcend perceived boundaries."
      ]
    },
    {
      id: 5,
      title: "Cultural Expressions of Faith",
      subtitle: "Understanding the Creative Dimensions of Religious Practices",
      author: "Elena Nguyen",
      author_image: "/author5.jpg",
      image: "/religion.jpg",
      read_time: "14 minutes",
      date_posted: "2023-05-18",
      content: [
        "The expressions of faith go beyond traditional rituals and extend into the realms of art, music, and cultural practices. In this enriching article, Elena Nguyen explores the diverse and creative ways in which different religious traditions express their spirituality through various art forms.",
        "From the intricate artistry of religious paintings to the soul-stirring melodies of sacred music, cultural expressions of faith offer a profound insight into the beliefs and values that shape a community's identity.",
        "This article will showcase examples of how religious rituals and ceremonies become works of art themselves, weaving together the spiritual and the aesthetic. The exploration will emphasize the role of creativity in fostering a deeper connection with the divine.",
        "Join us in this celebration of the creative dimensions of faith as we explore the art, music, and rituals that contribute to the rich cultural tapestry of religious traditions worldwide. Through this exploration, we aim to highlight the universal language of creativity that transcends religious boundaries."
      ]
    }
]
  

  const relly= faith.map(fate => (
    <article key={fate.id} className='grid text-center justify-center m-auto'>
      <Link href={`/religions/${fate.title.split(' ').join('')}`}>
      <Image src={fate.image} alt='faith' width={300} height={300} className={style.entertainment}/>
      <h2 className='font-bold text-xl'>{fate.title}</h2>
      </Link>
    </article>
  ))


export default function page() {
  return (
    <div className='grid grid-cols-3'>
      {relly}
    </div>
  )
}
