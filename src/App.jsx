import React, { useEffect, useState } from 'react'
import { NavigationBar } from './components/navbar'
import history from './assets/history-rabbit.png'
import { Footer } from './components/footer'
import wortel from './assets/wortel.png'
import apel from './assets/apel.png'
import brokoli from './assets/brokoli.png'
import jagung from './assets/jagung.png'
import kangkung from './assets/kangkung.png'
import papaya from './assets/papaya.png'
import pepaya from './assets/pepaya.png'
import rumput from './assets/rumput.png'
import selada from './assets/selada.png'
import tomat from './assets/tomat.png'
import ubi from './assets/ubi jalar.png'
import lobak from './assets/lobak.png'
import kol from './assets/kol.png'
import seledri from './assets/seledri.png'
import lorong from './assets/lorong.jpeg';
import semak from './assets/semak.jpg';
import kandang from './assets/kandang.jpg';
import rabbitGarden from './assets/rabbitGarden.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function App() {

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
  
    // Tambahkan class blur pada navbar saat scroll position lebih besar dari 0
    if (window.scrollY > 0) {
      navbar.classList.add('blur');
    } else {
      navbar.classList.remove('blur');
    }
  });

  const foods = [
    {
      title : "Carrot",
      image : wortel,
      desc  : "Rabbits' liking for this food is not just a myth because rabbits really like this tuber. Not only are they liked, carrot intake is also good for rabbits' health because of their nutritional content."
    },
    {
      title : "Apple",
      image : apel,
      desc  : "Toppers can add pieces of apple, either green apples or red apples, to the rabbit's food menu. However, make sure the apples that Toppers give you are fresh and free of pesticides so that the rabbits don't contract health problems."
    },
    {
      title : "Broccoli",
      image : brokoli,
      desc  : "Broccoli itself is one of the vegetable choices that Toppers can make into a diet for rabbits along with other vegetables. The fiber in broccoli can also help facilitate the digestive system in rabbits."
    },
    {
      title : "Corn",
      image : jagung,
      desc  : "Rich in calories and various other nutrients, Toppers must limit this type of feed so that rabbits do not become obese."
    },
    {
      title : "Cabbage",
      image : kol,
      desc  : "cabbage, or what is often also known as cabbage. Whether it's green cabbage or purple cabbage, Toppers can use these two vegetables to make a variety of food menus so that the rabbit doesn't get bored with the same food menu."
    },
    {
      title : "Seledri",
      image : seledri,
      desc  : "Not only is it rich in vitamins, celery also contains many other nutrients needed to support rabbit health."
    },
    {
      title : "Turnip",
      image : lobak,
      desc  : "These leaves provide antibody protection to your pet rabbit to keep it healthy and agile."
    },
    {
      title : "Papaya",
      image : papaya,
      desc  : "Rich in fiber and vitamins, papaya fruit is not only easy to find but is also good for rabbit digestion."
    },
    {
      title : "Grass",
      image : rumput,
      desc  : "Grass is a food option for rabbits that is rich in fiber and is good for nourishing rabbits, especially rabbits that are pregnant or breastfeeding."
    },
    {
      title : "Lettuce",
      image : selada,
      desc  : "Rich in minerals and vitamins, Toppers can vary lettuce with celery, kale, or other rabbit food to enrich the nutritional intake of their beloved rabbit."
    },
    {
      title : "Tomato",
      image : tomat,
      desc  : "Tomatoes are a food rich in vitamins and antioxidants which are not only good for maintaining the health and endurance of rabbits, but can also help the growth and development of young rabbits."
    },
    {
      title : "Sweet potato",
      image : ubi,
      desc  : "Containing calories, high fiber, and a variety of vitamins and minerals, this food for rabbits is believed to act as a constipation medicine for rabbits. Apart from that, sweet potatoes can also help absorb fat and cholesterol in rabbits."
    },
  ];

  const datas = [
    {
      id: 1,
      image: lorong,
      title: "Underground Passage",
      text: 'Rabbits natural habitat is generally underground tunnels in hilly areas or parks. They live in groups, both to defend against enemy attacks, to protect themselves, and to find food. They will make underground passages to store food, take shelter, reproduce, and live in groups. Underground passages are a safe location for rabbits.'
    },
    {
      id: 2,
      image: semak,
      title: "Shrubs",
      text: "Apart from underground passages, rabbit habitat also includes bushes and bush roots in grasslands. Not all rabbits live in the same bushland habitat. It all depends on the type of rabbit. However, in general, grass is the real rabbit habitat. Grass is also a staple food for rabbits and is highly nutritious. Grass can improve the rabbit's digestive system. Therefore, rabbits are called herbivorous animals."
    },
    {
      id: 3,
      image: kandang,
      title: "In the Cage",
      text: "If you want to keep rabbits, it's best to follow their natural habitat. However, if you have to put it in a cage, make sure it is a spacious cage for the rabbit to run around in. Also provide a litter box as a place to urinate and defecate. Make sure the cage is not covered so it can be exposed to morning sunlight. There are two types of cages that must be provided, namely cages to shelter from heat, rain and wind. Second, namely a cage in the form of a box for the rabbits to live in one by one."
    },
    {
      id: 4,
      image: rabbitGarden,
      title: "Rabbit Garden",
      text: "For rabbit keepers, providing a rabbit garden is necessary so that rabbits are able to interact with nature. This rabbit garden can be implemented in the back yard of the house as a playground for rabbits."
    }
  ];

  return (
    <>
        <header class="fixed-top">
            <nav id='navbar' className='navbar'>
            <a href="#history">History</a>
            <a href="#type">Type</a>
            <a href="#habitat">Habitat</a>
            <a href="#foods">Foods</a>
            </nav>
        </header>

      <main id='content'>
{/* History Page */}
<div className='' style={{backgroundColor: '#d9d9d9'}}>
        <section id='history'>
          <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="row" style={{padding: "80px 0"}}>
              <div className="col-md-6">
                <h1>Bunny</h1>
                <p style={{fontSize: 25}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div className="col-md-6 text-end">
                <img src={history} alt="Bunny Hunter" style={{width: '90%'}}/>
              </div>
            </div>
          </div>
          {/* <div className="" style={{width: '100%', maxWidth: '1200px', margin: '0 auto', height: '100%'}}>
            <div className="col d-flex" style={{ padding: '40px 0', gap: 20}}>
              <div>
                <h3>Bunny Hunter</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, iusto asperiores explicabo, ipsa delectus soluta.</p>
              </div>
              <div>
                <img src={history} alt="Bunny Hunter"/>
              </div>
            </div>
          </div> */}
        </section>
      </div>

      {/* Type Page */}
      <section id='type'>
      <div className='' style={{ width: '100%'}} >
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <h1 className='d-flex justify-content-center pb-3 fw-bold fst-italic' >Type</h1>
              <div class="carousel-item active">
                <div className="cards-wrapper d-flex justify-content-center gap-5">
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/anggora.jpg' class="card-img-top" alt="..." style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Angora Rabbit (Ornamental)</h5>
                      <p class="card-text " >
                      Kelinci Anggora is one of the most often recognised types of hias kelinci. This kelinci originates from Ankara, Turkey. There are four types of anggora that are classified as follows: Anggora Inggris, Anggora Perancis, Anggora Giant, and Anggora Jerman.
                      In general, this kelinci has a soft and flexible bulu. This weight ranges from 2 to 4 kg. Every month, anggora's bulb can grow by about 2 cm. In addition to being used as a kelinci hias, this type of bulu is often used as a wol.
                      One of the advantages of this type of kelinci is that it can be used to make wool. However, the above-mentioned kelinci kind needs to be taken into consideration because it is not from a tropical region, making illness transmission easier.
                      </p>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/lop.jpg' class="card-img-top" alt="..." style={{ height: '250px'}} />
                    <div class="card-body">
                      <h5 class="card-title">Lop Rabbit (Ornamental)</h5>
                      <p class="card-text">
                      There are many varieties of kelinci lop, including English, dwarf, French, Holland, American, Angora, and quite a few others. The most well-known kind is the English kelinci type.
                      The kelinci Lop is located in the middle of the telinga. Telinga kelinci lop terlihat saat kelinci berumur 2-4 bulan, dan ditambangkan dari kepala sampai ke pipi. Another of Lop's kelinci's ciri-ciri is the stiff neck.  The tubular kuran is 12–23 cm.
                      The distinguishing feature of Lop as a hias kelinci is its unique form, similar to anjing telinga that bends and differs from other types of kelinci. However, kelinci Lop needs special consideration in terms of treatment because it is easily susceptible to illness.
                      Because this kind of kelinci is easily stressed out, Budidaya kelinci Lop yaitu harus memperhatikan tingkat stress si kelinci. The other thing that
                      </p>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/flemish.jpg' class="card-img-top" alt="..." style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Flemish Giant Rabbit (Meat/Ornamental)</h5>
                      <p class="card-text">
                      Comparing Flemish Giant kelinci to other kelinci types, the former has a larger body mass. The first kelinci to originate from Argentina was the liar, and it was later adopted throughout Europe.
                      The Flemish Giant has large bones with the lowest weight of 8 kg and the highest weight of 13 kg, with the record breaking 22.23 kg according to Guinness World Records. The length of its body is 51 cm, the width of its telinga is 15 cm, and its kaki is large.
                      The characteristics of Flemish Giant kelinci are their large tubules that can yield more fruit when compared to other types of kelinci, as well as their distinct taste. Yang terlalu berat menopang tubuhnya yang besar, serta terjadi patah kaki pada kelinci ini.
                      It is possible to perform Flemish Giant kelincian budaya.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cards-wrapper d-flex justify-content-center  gap-5">
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/rex.jpg' class="card-img-top" style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Rex Rabbit (Ornamental/Meat)</h5>
                      <p class="card-text">
                      Rex rabbits are rabbits originating from France. Rex rabbits are a breed of rabbit that is suitable for breeding in cold areas with temperatures of 5-15°C. This rabbit is used as an ornamental rabbit because of its cute shape, but can also be used as a meat rabbit.
                      There are two types of Rex rabbits that are often bred, namely standard Rex and mini Rex. A standard Rex weighs 3.6-5 kg, while a mini Rex weighs 1.4-2 kg. Rex rabbit fur has a teval of around 1-2 cm. The fur colors recognized as standard Rex rabbit colors are black, blue, castor, lynx, opal, brown, red, white, chinchilla, lilac, Himalayan, broken, and tricolor.
                      The advantage of this Rex rabbit is its beautiful fur color, so this rabbit is often used as a contest rabbit, besides that it can also be used as a meat rabbit. This rabbit can be trained with various tricks such as being called and given directions, apart from that, this rabbit is used as a leather producer.
                      </p>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/netherland.jpg' class="card-img-top" alt="..." style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Netherland Dwarf Rabbit (Ornamental)</h5>
                      <p class="card-text">
                      The Netherland Dwarf Rabbit is a rabbit originating from the Netherlands. These rabbits have very slow growth. These rabbits were brought by the Dutch and cultivated in Indonesia. These rabbits are popular with rabbit lovers and are kept as ornamental rabbits.
                      The characteristics of this rabbit are that it has a short body, round head, short neck. The weight of the Netherland Dwarf rabbit only reaches 1 kg. The fur color of these rabbits varies, but the most popular ones are rabbits with white fur and red eyes.
                      The advantage of Netherland Dwarf rabbits is their agility. This rabbit can go around the room hundreds of times a day. Meanwhile, the disadvantage of this rabbit is that it is difficult to tame because it is a wild rabbit so it is dangerous to be kept by children. Apart from that, these rabbits are easily lost if they are not placed in a safe place.
                      </p>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/himalayan.jpg' class="card-img-top" alt="..." style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Himalayan Rabbit (Ornamental/Meat)</h5>
                      <p class="card-text">
                      The Himalayan is one of the most well-known kelincis in Indonesia. This coin is referred to as a Chinese or Russian coin. The kelinci's uniqueness and kelucuan make it suitable for both pedaging and hias applications. In addition to standard Himalayan kelinci, there are also small Himalayan kelinci available.
                      These curves are bulu warnings that are salient and have a combination of hitam and polkadot warnings along the edge of the object, as well as additional warnings around the edges of the ekor and telinga. The corresponding weight range is 2.5–4.5 kg. For a tiny backpack, it weighs only about 1 kg.
                      One of the characteristics of Himalayan pearls is their unique pearls with smooth edges. The main drawback of the Himalayan peninsula is its relatively low productivity. When melahirkan, this type of kelinci can only melahirkan three to six ekor anakan at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="cards-wrapper d-flex justify-content-center  gap-5">
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/satin.jpg' class="card-img-top" alt="..." style={{ height: '250px'}} />
                    <div class="card-body">
                      <h5 class="card-title">Satin Rabbit (Decorative)</h5>
                      <p class="card-text">
                      The Satin tribe is a tribe that originated in the United States of America. This kelinci can be used as either a pedaging or a hias kelinci. These kelinci include those with large tubules. There are five types of this type of stone: California, Broken, Chincilla, Havana, and Siam.
                      The three main features of this kelinci are the panjang, the lebar, and the pendek leher. This kelinci has a tebal and rapat bulu. There are many different types of warna kelinci in this case, such as putih, hitam, coklat, kebiruan, and Californians, which include mulut, ekor, telinga, and ujung kaki berwarna hitam, as opposed to tubuh berwarna putih. This kelinci weighs about 4–5 kg.
                      The advantage of this kind of kelinci is that it's bulunya that turns into a daya tarik for those who are interested in kelinci hias.
                      </p>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/havana.jpg' class="card-img-top" alt="..." style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Havana Rabbit (Ornamental)</h5>
                      <p class="card-text">
                      In the Netherlands, the Havana rabbit was created as an ornamental in 1898. developed in 1908 in Europe. After that, Indonesia was among the places in the world where this rabbit swiftly expanded.
                      The small size and short stature of this rabbit are its distinguishing features. The shoulders of this rabbit are stocky and strong. Although there are already numerous crosses that result in Havana rabbits with striped colours, they only have one colour on their body. The average body weight is 2.75 kg. The colours of fur are blue, brown, black, and plain.
                      The Havana rabbit has the benefit of having extremely glossy, soft fur, which makes it cosy to have as a pet. Furthermore, this rabbit has a calm and sensitive demeanour.
                      </p>
                    </div>
                  </div>
                  <div class="card" style={{width: '20rem'}}>
                    <img src='src/assets/hotot.jpg' class="card-img-top" alt="..." style={{ height: '250px'}}/>
                    <div class="card-body">
                      <h5 class="card-title">Hotot Rabbit (Ornamental)</h5>
                      <p class="card-text ">
                      The Hotot rabbit is a Dutch breed of rabbit. This rabbit comes from the Netherlands. This rabbit has a small body. Hotot rabbits are one of the favorite rabbits because of their small and unique shape. This rabbit is included in the type of ornamental rabbit.
                      The characteristics of the Hotot rabbit are that it has white fur, and in the eye area there is a black pattern. There are other types of colors for this rabbit, namely black and gray, but the most popular is the white one. The body size of this rabbit is small, weighing only around 1.4-1.8 kg.
                      The advantage of this rabbit is that it is agile and moves a lot, but you need to be careful when caring for this rabbit because its agility can cause this rabbit to disappear if it is not caged safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon " aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* Habitat Page */}
      <section id='habitat'>
        <Carousel
          autoPlay
          interval={6000}
          infiniteLoop
          thumbWidth={120}
          showIndicators={false}
          showStatus={false}
          className="crsl"
        >
          {datas.map(slide => (
            <div key={slide.id}>
              <img src={slide.image} alt="" style={{width: '900px', height: '500px'}}/>
              <div className="overlay">
                <h2 className="overlay__title">{slide.title}</h2>
                <p className="overlay__text">{slide.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Foods Page */}
      <section id='foods'>
        <div className='' style={{backgroundColor: '#d9d9d9'}}>
          <section id='foods'>
            <div className="row justify-content-center">
              {
                foods?.map((item) =>  {                
                  return(
                    <div className="col d-flex  mt-5 ms-2 m-0">
                      <div className="card" style={{width:'18rem'}}>
                        <img src={item.image} alt="" className='card-img-top' style={{backgroundColor: '#d9d9d9', height: '200px'}}/>
                        <div className="card-body ">
                          <h4 className="fw-bold text-center">{item.title}</h4>
                          <p className="card-text">{item.desc}</p>
                        </div>
                      </div>
                    </div> 
                  )
                })  
              }
        
            </div>         
          </section>
        </div>
      </section>
      </main>
      
      <Footer/>
    </>
  )
}
