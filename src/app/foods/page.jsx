import Image from 'next/image'
import style from "../style.module.css"
import Link from 'next/link'

export const food = [
      {
        id:1,
        food_title: "Delicious Homemade Pizza",
        image:"/pizza.jpg",
        writer:"chef toyo",
        writer_image:"/toyo.jpg",
        read_time:"6 mins",
        date:"nov-21",
        article: [
          "If you're a pizza lover, you'll be delighted to try our homemade pizza recipe. We start with a perfect pizza dough that's crispy on the outside and chewy on the inside. Next, we spread a rich tomato sauce made from ripe, sun-kissed tomatoes and top it with a generous amount of mozzarella cheese. Add your favorite toppings, whether it's classic pepperoni, fresh veggies, or gourmet options like prosciutto and arugula. Bake it to perfection, and you'll have a slice of heaven in every bite.",
          "The secret to a fantastic homemade pizza is in the toppings. Fresh ingredients make all the difference. Visit your local farmers' market to pick up the ripest tomatoes, basil, and other veggies for the ultimate flavor. Don't forget to experiment with different cheeses and herbs to create your unique signature pizza. Whether you're hosting a pizza night with friends or enjoying a cozy evening in, our homemade pizza recipe is sure to impress.",
          "To complete the experience, pair your homemade pizza with a bottle of your favorite wine or some ice-cold craft beer. Whether you're a traditionalist or an adventurous foodie, this homemade pizza recipe will satisfy your cravings and leave you craving for more."
        ]
      },
      {
        id:2,
        food_title: "Chocolate Brownies",
        image:"/brownies.jpg",
        writer:"chef toyo",
        read_time:"6 mins",
        date:"nov-21",
        writer_image:"/toyo.jpg",
        article: [
          "Indulge your sweet tooth with our mouthwatering chocolate brownies. These decadent treats are a chocolate lover's dream come true. Made with premium dark chocolate and a hint of espresso, our brownies are incredibly rich and fudgy. They're so good; you won't be able to stop at just one.",
          "The key to perfect brownies is the quality of chocolate you use. Choose the best dark chocolate you can find, and it will make a world of difference. For an extra layer of flavor, add some chopped nuts or swirl in a generous portion of caramel. Whether you enjoy them warm with a scoop of vanilla ice cream or straight out of the oven, our chocolate brownies are a delightful indulgence.",
          "If you're feeling generous, share these brownies with friends and family, but be prepared for them to ask for the recipe. These chocolate brownies are the ultimate comfort food, perfect for any occasion or just when you need a little pick-me-up."
        ]
      },
      {
        id:3,
        food_title: "Spinach and Stuffed Chicken",
        image:"/spinach.jpg",
        writer:"chef toyo",
        read_time:"6 mins",
        date:"nov-21",
        writer_image:"/toyo.jpg",
        article: [
          "Looking for an impressive yet easy-to-make dinner? Try our savory spinach and feta stuffed chicken recipe. It's a showstopper that's perfect for special occasions or a delightful weeknight meal. We start with boneless, skinless chicken breasts, which are stuffed with a delicious mixture of spinach, feta cheese, and garlic. The result is a juicy, flavorful chicken dish that will have your taste buds dancing.",
          "To make this dish even more spectacular, we recommend serving it with a side of roasted vegetables or a light lemon garlic sauce. The combination of the creamy feta and the earthy spinach perfectly complements the tender chicken. Plus, it's a healthy option that doesn't skimp on taste. Your family and guests will love this flavorful, stuffed chicken recipe.",
          "Whether you're a seasoned home chef or just getting started in the kitchen, our spinach and feta stuffed chicken is sure to impress. Give it a try and savor the delightful flavors in every bite."
        ]
      },
      {
        id:4,
        food_title: "Mango and Avocado Salad",
        image:"/salad.jpg",
        writer:"chef toyo",
        reading_time:"6 mins",
        date:"nov-21",
        writer_image:"/toyo.jpg",
        article: [
          "When it's hot outside, there's nothing quite as refreshing as a mango and avocado salad. This salad combines the sweetness of ripe mangoes with the creamy goodness of avocados, creating a harmonious blend of flavors and textures. It's a perfect side dish for summer barbecues or a light and healthy lunch option.",
          "To make this salad, simply dice up some mangoes and avocados, toss them together, and drizzle with a zesty lime vinaigrette. You can also add some red onion, cilantro, and a pinch of chili flakes for a little extra kick. The combination of sweet, tangy, and creamy in every bite will transport your taste buds to a tropical paradise.",
          "This mango and avocado salad is not only delicious but also packed with vitamins and nutrients. It's a great way to enjoy the abundance of fresh produce during the summer months. Try it once, and it might just become your new favorite salad recipe."
        ]
      },
      {
        id:5,
        food_title: "Thai Cuisine",
        image:"/cuisine.jpg",
        writer:"chef toyo",
        read_time:"6 mins",
        date:"nov-21",
        writer_image:"/toyo.jpg",
        article: [
          "Thai cuisine is renowned for its bold and vibrant flavors that tantalize the taste buds. From the spicy kick of red curry to the refreshing notes of lemongrass and lime, Thai dishes are a culinary adventure you don't want to miss. Whether you're a fan of street food or elegant dining, Thai cuisine has something for everyone.",
          "One of the signature dishes of Thailand is Pad Thai, a stir-fried noodle dish that combines the sweetness of tamarind with the umami of fish sauce and the crunch of peanuts. It's a harmonious blend of flavors and textures that's sure to please your palate.",
          "If you're up for a culinary challenge, you can try your hand at making green curry from scratch. The aromatic green curry paste, creamy coconut milk, and tender pieces of chicken or tofu come together to create a dish that's both comforting and exotic. Don't forget to garnish it with fresh Thai basil for an authentic touch."
        ]
      },
      {
        id:6,
        food_title: "The Art of Sushi Making",
        image:"/sushi.jpg",
        writer:"chef toyo",
        read_time:"6 mins",
        date:"nov-21",
        writer_image:"/toyo.jpg",
        article: [
          "Sushi is more than just a meal; it's a work of art. The delicate balance of flavors, textures, and presentation makes sushi a culinary masterpiece. While it may seem intimidating to make sushi at home, with a little practice and the right ingredients, you can become a sushi chef in your own kitchen.",
          "Start with the basics by learning how to make sushi rice. The seasoning of the rice with rice vinegar, sugar, and salt is a crucial step in achieving that authentic sushi taste. Once you have your rice ready, you can experiment with various fillings like fresh fish, avocado, cucumber, and more.",
          "Rolling sushi is an art in itself. Invest in a bamboo sushi rolling mat, nori (seaweed sheets), and a sharp knife. With practice, you'll be able to create beautiful sushi rolls that are as delicious as they are visually appealing. So, gather your ingredients and embark on a sushi-making journey!"
        ]
      },
]

const foodArticles = food.map(sushi => (
  <article key={sushi.id} className='text-center grid justify-center items-center'>
   <Link href={`/food/${sushi.food_title.split(' ').join('')}`}>
    <Image src={sushi.image} alt='sushi' className={style.pizza} height={300} width={300}/>
    <span className='text-center mb-8 mt-2 font-bold text-xs'>
      {sushi.food_title}
    </span>
    </Link>
  </article>
))

export default function foods() {
  return (
    <main className='grid grid-cols-3 mt-5 items-center m-auto w-4/5'>
      {foodArticles}
    </main>
  )
}
