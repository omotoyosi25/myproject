import Image from 'next/image'
import Link from 'next/link'
import style from '../style.module.css'


export const ball =
[
  {
    id: 1,
    title: "Cinderella Stories in Sports",
    subtitle: "Rise of the Unexpected Victors",
    author: "Jane Doe",
    author_image: "/author2.jpg",
    image: "/cinderella.jpg",
    read_time: "8 min",
    date_posted: "2023-03-15",
    article: [
      "In the world of sports, there's nothing more exhilarating than witnessing an underdog rise to the occasion. From historic upsets in March Madness to unexpected triumphs in the Premier League, these Cinderella stories capture the essence of competition and resilience.",
      "The unpredictability of sports is what keeps fans on the edge of their seats. These underdog victories not only showcase the power of determination but also challenge the status quo, proving that anything is possible in the world of athletics.",
      "This article explores some of the most memorable underdog moments in sports history, celebrating the teams and individuals who defied the odds. From David vs. Goliath matchups to unlikely championship runs, we'll delve into the heartwarming and inspiring stories that make sports truly magical.",
      "So, buckle up for a journey through the triumphs of the underestimated and discover why the allure of the underdog is an integral part of what makes sports so captivating."
    ]
  },
  {
    id: 2,
    title: "Women Pioneers in the World of Sports",
    subtitle: "Defying Gravity and Stereotypes",
    author: "John Smith",
    author_image: "/author2.jpg",
    image: "/women.jpg",
    read_time: "6 min",
    date_posted: "2023-04-02",
    article: [
      "Extreme sports have long been dominated by male athletes, but a new wave of fearless women is breaking barriers and redefining what's possible. From rock climbing to snowboarding, these pioneers are not only defying gravity but also challenging gender stereotypes in the world of sports.",
      "This article sheds light on the incredible achievements of women who have pushed the boundaries of extreme sports. We'll explore the stories of trailblazers who have overcome adversity, shattered glass ceilings, and paved the way for the next generation of female athletes.",
      "As society embraces inclusivity and diversity, it's essential to recognize and celebrate the accomplishments of women in sports that were once considered male-dominated. Join us in acknowledging these extraordinary women who continue to inspire and elevate the world of extreme sports.",
      "Prepare to be inspired as we showcase the indomitable spirit of these athletes, proving that passion and skill know no gender boundaries in the adrenaline-fueled realm of extreme sports."
    ]
  },
  {
    id: 3,
    title: "The Evolution of eSports",
    subtitle: "Competing in the Digital Arena",
    author: "Alex Rodriguez",
    author_image: "/author2.jpg",
    image: "/esports.jpg",
    read_time: "10 min",
    date_posted: "2023-04-18",
    article: [
      "Once considered a niche subculture, eSports has undergone a remarkable transformation, emerging from the shadows to become a mainstream phenomenon. This article takes a deep dive into the evolution of eSports, tracing its roots, and exploring the factors that propelled it into the digital spotlight.",
      "From casual gamers to professional leagues with multimillion-dollar prize pools, eSports has captured the attention of a global audience. We'll examine the rise of popular eSports titles, the development of dedicated arenas, and the cultural impact of competitive gaming on a new generation of fans.",
      "As traditional sports and digital entertainment converge, eSports stands at the forefront of this dynamic shift. Join us in exploring the dynamic landscape of competitive gaming, from grassroots tournaments to international championships, and discover how eSports has become a cultural force to be reckoned with.",
      "Whether you're a seasoned gamer or a newcomer to the world of eSports, this article provides insights into the industry's past, present, and exciting future as it continues to redefine the way we perceive and engage with competitive gaming."
    ]
  },
  {
    id: 4,
    title: "The Impact of Sports Psychology",
    subtitle: "Mind Over Matter on the Playing Field",
    author: "Emily Johnson",
    author_image: "/author2.jpg",
    image: "/spots.jpg",
    read_time: "7 min",
    date_posted: "2023-05-05",
    article: [
      "In the realm of sports, the mental aspect often plays a crucial role in an athlete's success. Sports psychology has emerged as a game-changer, helping athletes harness the power of their minds to achieve peak performance. This article explores the profound impact of sports psychology on the playing field.",
      "From visualization techniques to goal setting, sports psychologists work with athletes to enhance focus, resilience, and overall mental well-being. We'll delve into case studies of athletes who credit their success to the mental strategies learned through sports psychology, highlighting the symbiotic relationship between mind and body in the world of sports.",
      "The discussion extends beyond individual athletes to team dynamics, as sports psychology principles are increasingly integrated into coaching strategies and team culture. Discover how a winning mindset can be cultivated and the ways in which sports psychology continues to revolutionize the way athletes approach their craft.",
      "Whether you're an athlete looking to sharpen your mental game or a sports enthusiast intrigued by the psychology behind the victories, this article offers a comprehensive exploration of the transformative role sports psychology plays in the world of sports."
    ]
  },
  {
    id: 5,
    title: "Behind the Scenes of Sports Event ",
    subtitle: "Making Game Day a Seamless Experience",
    author: "Mike Thompson",
    author_image: "/author2.jpg",
    image: "/event.jpg",
    read_time: "9 min",
    date_posted: "2023-05-20",
    article: [
      "While athletes take the spotlight during a game, there's a dedicated team working behind the scenes to ensure everything runs seamlessly. This article shines a light on the unsung heroes of sports events – the event management professionals who orchestrate the logistics and create memorable experiences for fans.",
      "From coordinating stadium logistics to planning fan engagement activities, event managers play a pivotal role in the success of sports events. We'll explore the challenges they face, the innovative solutions they implement, and the passion that drives them to create unforgettable moments for both athletes and spectators.",
      "Get an insider's perspective on what it takes to manage a major sports event, from the meticulous planning stages to the adrenaline-filled execution on game day. Discover the stories of those who work tirelessly behind the scenes to ensure that every aspect of the event, big or small, contributes to the overall success of the spectacle.",
      "Join us in acknowledging the dedication of these event management professionals and gain a newfound appreciation for the intricate dance that unfolds behind the curtain, making every sports event a well-orchestrated masterpiece."
    ]
  }
]

const baller = ball.map(spot => (
  <article key={spot.id} className='grid justify-center items-center'>
    <Link href={`/sport/${spot.title.split(' ').join('')}`}>
    <Image src={spot.image} alt='spot' width={300} height={300} className={style.politics}/>
    <h2 className='font-bold text-sm text-center'>{spot.title}</h2>
    </Link>
  </article>
))


export default function page() {
  return (
    <main className='grid grid-cols-3 m-auto w-4/5'>
      {baller}
      </main>
  )
}
