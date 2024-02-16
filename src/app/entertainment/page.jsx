import Image from "next/image"
import style from "../style.module.css"
import Link from "next/link"

export const entertain = [
        {
          id: 1,
          title: "Unraveling the Enigma",
          subtitle:"The Legacy of Christopher Nolan",
          author: "Emily Turner",
          auth_img: "/author1.jpg",
          img: "/christ.jpg",
          read_time: "8 min",
          date_posted: "2023-02-15",
          content: [
            "Christopher Nolan's impact on the film industry is nothing short of legendary. Known for mind-bending narratives and visually stunning cinematography, Nolan has carved out a niche that sets him apart from other directors.",
            "From 'Inception' to 'Interstellar,' Nolan's films are celebrated for their intricate plots that challenge audiences to think beyond the surface. His unique storytelling style, often involving non-linear timelines, has left an indelible mark on cinema.",
            "Nolan's commitment to practical effects and in-camera techniques adds a layer of authenticity to his work. The combination of compelling storytelling and technical prowess has garnered him a dedicated fan base and critical acclaim.",
            "As we explore the legacy of Christopher Nolan, it's essential to recognize his influence on a new generation of filmmakers. Many cite Nolan as a source of inspiration, and his impact on the industry will likely continue for years to come."
          ]
        },
        {
          id: 2,
          title: "Behind the Scenes",
          subtitle: "The Making of a Marvel Cinematic Universe Blockbuster",
          author: "Alex Reynolds",
          auth_img: "/author1.jpg",
          img: "/marvel.jpg",
          read_time: "10 min",
          date_posted: "2023-03-10",
          content: [
            "The Marvel Cinematic Universe (MCU) has become a cultural phenomenon, captivating audiences worldwide. In this article, we'll take a behind-the-scenes look at the intricate process of bringing a Marvel blockbuster to life.",
            "Crafting a successful MCU film involves meticulous planning, from the initial scriptwriting to the extensive pre-production work. The interconnected nature of the MCU requires careful coordination to maintain continuity across multiple storylines.",
            "The production phase involves a colossal effort, with teams working on everything from set design and costume creation to special effects and choreography. The scale and ambition of MCU films contribute to their blockbuster status.",
            "Post-production is where the magic truly happens. Visual effects, sound design, and editing bring the superhero universe to life. The attention to detail in post-production ensures that every frame contributes to the immersive experience."
          ]
        },
        {
          id: 3,
          title: "Iconic Music Videos",
          subtitle: "Exploring the Artistry Behind the Visuals",
          author: "Jordan Smith",
          auth_img: "/author1.jpg",
          img: "/music.jpg",
          read_time: "6 min",
          date_posted: "2023-04-05",
          content: [
            "Music videos have evolved into a powerful form of artistic expression, shaping the perception of songs and artists alike. Join us as we delve into the world of iconic music videos and the creativity that goes into their production.",
            "Directors and cinematographers play a crucial role in translating the essence of a song into a visual narrative. From Michael Jackson's 'Thriller' to Beyoncé's 'Formation,' iconic music videos often become inseparable from the songs themselves.",
            "Choreography and costume design add layers of meaning to music videos, turning them into visual spectacles. The collaboration between musicians, directors, and creative teams results in memorable moments that stand the test of time.",
            "The digital age has elevated music videos to new heights, with artists leveraging cutting-edge technology and innovative concepts. As we explore these iconic visuals, it becomes clear that music videos are an integral part of the modern entertainment landscape."
          ]
        },
        {
          id: 4,
          title: "Gaming Renaissance",
          subtitle: "The Evolution of Video Game Storytelling",
          author: "Marcus Rodriguez",
          auth_img: "/author1.jpg",
          img: "/game.jpg",
          read_time: "9 min",
          date_posted: "2023-05-20",
          content: [
            "Video games have transcended their origins as simple diversions, evolving into immersive storytelling experiences. In this article, we'll trace the evolution of video game storytelling and its impact on the gaming industry.",
            "The shift from linear narratives to open-world exploration has allowed gamers to shape their own stories. Games like 'The Witcher 3' and 'Red Dead Redemption 2' showcase the depth and complexity that storytelling in gaming has reached.",
            "The integration of cinematic techniques, motion capture, and voice acting has elevated the storytelling capabilities of video games. Players now engage with emotionally resonant narratives that rival those found in other forms of entertainment.",
            "The gaming renaissance is marked by a diverse range of genres and themes, from emotionally charged dramas to epic adventures. As technology continues to advance, the potential for immersive storytelling in video games is boundless."
          ]
        },
        {
          id: 5,
          title: "Laugh Out Loud",
          subtitle: "The Comedy Specials That Define a Generation",
          author: "Sarah Johnson",
          auth_img: "/author1.jpg",
          img: "/comedy.jpg",
          read_time: "7 min",
          date_posted: "2023-06-12",
          content: [
            "Comedy specials have become a cultural touchstone, providing audiences with laughter and commentary on the human experience. Join us as we explore the comedy specials that have left an indelible mark on a generation.",
            "Comedians like Dave Chappelle, Hannah Gadsby, and John Mulaney have redefined the comedy special genre. Their unique perspectives and fearless approach to storytelling have resonated with diverse audiences worldwide.",
            "The evolution of comedy specials reflects societal changes, with comedians tackling relevant and often challenging topics. From social issues to personal anecdotes, these specials serve as both entertainment and a lens through which we view our world.",
            "Streaming platforms have played a pivotal role in the accessibility and popularity of comedy specials. The ability to reach a global audience has allowed comedians to connect with fans on a broader scale, contributing to the cultural impact of their work."
          ]
        }
      ]
      
const entertains = entertain.map(enter => (
    <article key={enter.id} className=" text-center grid justify-center">
        <Link href={`/entertaining/${enter.title.split(' ').join('')}`}>
        <Image src={enter.img} alt="ent" width={300} height={300}  className={style.entertainment}/>
        <h2 className="font-bold text-xs mt-3">{enter.title}</h2>
        </Link>
    </article>
))


export default function page() {
  return (
    <div className="grid grid-cols-3 mt-5 items-center m-auto w-4/5">{entertains}</div>
  )
}
