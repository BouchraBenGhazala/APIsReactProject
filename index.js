const express= require('express');
const app=express();
const PORT =8083;
const cors = require('cors');

app.use(cors());

// fire up API on server
app.listen(
    PORT,
    ()=>{console.log(`Server is running on http://localhost:${PORT}`)}
); 

app.use(express.json()); //middleware

app.get('/stadium',(req,res)=>{
    res.status(200).send({
        stadium:[
            {
                id: 1,
                name: "Agadir Grand Stadium",
                formerName: ["Adrar stadium"],
                location: {
                  address: {
                    city: "Agadir",
                    neighborhood: "City Center",
                    street: " Mac Mahon"
                  },
                },
                owner: "Moroccan Ministry of Youth and Sports",
                capacity: 45480,
                events: ["Hassania d'Agadir vs Jeunesse sportive de Kabylie, 11 October 2013", "Morocco vs South Africa, 11 October 2013", "Raja Casablanca vs Auckland City FC, 11 December 2013"],
                field: {
                  length: 105,
                  width: 84,
                  surface: "Natural grass"
                },
                construction: {
                  opened: "October 2013",
                  renovated: ["none"],
                },
                tenants: ["Hassania Agadir", "Olympique Dcheira"],
                image: "https://maroc-diplomatique.net/wp-content/uploads/2022/05/stade-agadir.jpg",
                description: "Grand Stade d'Agadir, also known as Stade Adrar, is a football stadium located in Agadir, Morocco. Inaugurated on October 11, 2013, it is owned by the Moroccan Ministry of Youth and Sports and managed by SONARGES (Société Nationale de Réalisation et de Gestion des Stades). With an estimated total cost of 860 million MAD, construction began in June 2004, with completion in August 2013. The stadium hosts home matches for the resident clubs, Hassania d'Agadir and Olympique Dcheira. The stadium has witnessed significant events, including the FIFA Club World Cup 2013 matches. It features a natural grass surface and a seating capacity of 45,480, making it a key sports venue in Agadir."
              },
            {
                id: 2,
                name: "Tangier Grand Stadium",
                formerName: ["Ibn-Batouta stadium"],
                location: {
                    address: {
                        city: "Tangier",
                        neighborhood: "Ibn Battuta Airport",
                        street: "Av. Ibn Sina"
                    },
                },
                owner: "City of Tangier",
                capacity: 68000,
                events: ["Atlético Madrid B vs IR Tanger, April 26, 2011", "Atlético Madrid vs Raja Club Athletic, April 26, 2011"," LOSC Lille Métropole vs Olympique de Marseille, July 27, 2011"],
                field: {
                    length:105 ,
                    width: 68,
                    surface: "natural"
                },
                construction: {
                    opened: "April 26, 2011",
                    renovated: ["none"],
                },
                tenants: ["IR Tangier"],
                image: "https://static.ostadium.com/galleries/stade-ibn-batouta-illus.jpg",
                description: "The Grand Stade de Tanger, opened on April 26, 2011, is located 3 km from Ibn Battouta Airport. It spans a total area of 82 hectares. The current seating capacity is over 62,000, with ongoing construction to increase it to 80,000 seats. The stadium is equipped with numerous modern facilities, including football changing rooms, saunas, athletics changing rooms, and offices for match officials."
                },
            {
            id: 3,
            name: "Prince Moulay Abdellah Sports Complex",
            formerName: ["CSPMA"],
            location: {
              address: {
                city: "Rabat",
                neighborhood: "southwest of the capital",
                street: "Near the highway"
              },
            },
            owner: "City of Rabat",
            capacity:45800,
            events: ["Moghreb de Tétouan vs Auckland City FC, December 10, 2014", "Entente de Sétif vs Auckland City FC, December 13, 2014"," Raja CA vs Ittihad FC, August 21, 2021"],
            field: {
              length: 105,
              width: 68,
              surface: "Hybrid lawn"
            },
            construction: {
              opened: "1983",
              renovated: ["2000", "2014"],
            },
            tenants: ["AS FAR","Morocco national football team"],
            image: "https://static.menara.ma/content/uploads/2023/01/complexe-sportif-moulay-abdellah.jpg",
            description: "Prince Moulay Abdellah Sports Complex, inaugurated in 1983, is a crucial sports venue in Rabat with a capacity of 45,800. Renovated in 2000 and 2014, it has played a pivotal role in major events such as CAN 1988 and the FIFA Club World Cup 2014, leaving a lasting impact on Morocco's sports history."
            },
            {
            id: 4,
            name: "Marrakech Grand Stadium",
            formerName: ["GSM"],
            location: {
              address: {
                city: "Marrakech",
                neighborhood: "entrance to the city",
                street: "National Highway 9"
              },
            },
            owner: "The state",
            capacity: 45240,
            events: ["Wydad Athletic Club vs Paris Saint-Germain, January 5, 2011"," Kawkab de Marrakech vs Olympique Lyonnais, January 5, 2011"," Morocco vs Niger, February 9, 2011"],
            field: {
              length: 108,
              width: 71,
              surface: "natural lawn"
            },
            construction: {
              opened: "5 January 2011",
              renovated: ["none"],
            },
            tenants: ["Kawkab Marrakech", "Morocco national football team"],
            image: "https://ic7m.com/images/stade/s5.jpg",
            description: "The Grand Stade de Marrakech in Morocco, inaugurated in 2011 with a seating capacity of 45,240 (70,000 covered), faced criticism for its design separating stands from the field. However, it features extensive facilities, including a media hall and a 7,500-capacity parking lot, meeting international standards for football and athletics. With a budget of one billion MAD (around 90 million euros), it serves as a versatile venue for national and international competitions."
          },
          {
            id: 5,
            name: "Mohammed V stadium",
            formerName: ["Stadium of Honor"],
            location: {
              address: {
                city: "Casablanca",
                neighborhood: "Maârif",
                street: "Al-Azrak Ahmed"
              },
            },
            owner: "The City of Casablanca",
            capacity: 45891,
            events: ["Wydad AC vs Budapest Honvéd, January 1, 1956"," Wydad AC vs Bayern Munich, January 7, 1959"," Morocco vs Egypt, July 28, 1985."],
            field: {
              length: 105,
              width: 68,
              surface: "Natural lawn"
            },
            construction: {
              opened: "6 March 1955",
              renovated: ["1981", "2000", "2007", "2015"],
            },
            tenants: ["Wydad Athletic Club", "Raja Club Athletic", "Morocco national football team"],
            image: "https://www.casa-amenagement.ma/uploads/gallery/travaux-du-complexe-med-v/DJI_0145.JPG",
            description: "Stade Mohammed V in Casablanca, Morocco, originally Stade Marcel Cerdan, played a key role in Morocco's 1970 World Cup qualification. Renamed Stade d'Honneur, it underwent significant renovations and is set to host the historic 2025 African Football League final, epitomizing the blend of tradition and progress in Moroccan sports."
          },
          {
            id: 6,
            name: "Sports Complex of Fes",
            formerName: ["CSF"],
            location: {
              address: {
                city: "Fès",
                neighborhood: "Mohammed V",
                street: "Sefrou Road"
              },
            },
            owner: "City of Fez",
            capacity: 45000,
            events: ["Morocco vs Zambia, January 12, 2008"," Morocco vs Algeria, May 17, 2008"," FAR de Rabat vs Club Africain, January 25, 2009"],
            field: {
              length: 108,
              width: 71,
              surface: "Natural lawn"
            },
            construction: {
              opened: "November 25, 2007",
              renovated: ["2004"],
            },
            tenants: ["Maghreb of Fes", "Wydad of Fès"],
            image: "https://maroc-diplomatique.net/wp-content/uploads/2019/09/F%C3%A8s.jpg",
            description: "The Stadium of the Sports Complex in Fes, Morocco, with a capacity of 45,000 seats, features a distinctly Moroccan architectural style. Construction began in 1992 to host the 1997 Junior Africa Cup of Nations but faced technical challenges, leading to completion in 2003. Despite renovations in 2004 for unsuccessful bids to host the 2006 and 2010 World Cups, the stadium was officially inaugurated in November 2007, serving as the home ground for the Maghreb de Fes football team."
          },

    ]

    })
});

app.get('/historyCities',(req,res)=>{
    res.status(200).send({
        historyCities:[
          {
            id: 1,
            cityName: "Agadir",
            overview: "Agadir is a coastal city in southwestern Morocco known for its beautiful beaches and modern architecture. Historically, Agadir faced a devastating earthquake in 1960, leading to the reconstruction of the city. Today, it is a popular tourist destination and a key economic hub in the region.",
            climate: "Agadir has a mild Mediterranean climate, with hot summers and warm winters. The city enjoys a significant amount of sunshine throughout the year.",
            population: 600000,
            languages: ["Arabic", "Amazigh", "French"],
            industries: ["Tourism", "Fishing", "Agriculture"],
            universities: ["University of Ibn Zohr"],
            keyEvents: [
              { year: 1960, event: "Destructive earthquake hits Agadir, leading to significant reconstruction efforts." },
              { year: 2000, event: "Agadir becomes a major tourist destination, attracting visitors from around the world." },
            ],
            notableLandmarks: [
              "Kasbah of Agadir Oufella",
              "Valley of the Birds",
              "La Médina d'Agadir"
            ],
          },
          {
            id: 2,
            cityName: "Tanger",
            overview: "Tanger, located at the northern tip of Morocco, is a historic port city with a rich cultural heritage. It has been a crossroads of various civilizations and is known for its unique blend of European and Moroccan influences.",
            climate: "Tanger experiences a Mediterranean climate with warm, dry summers and mild, wet winters. The city enjoys a strategic position overlooking the Strait of Gibraltar.",
            population: 950000,
            languages: ["Arabic", "French"],
            industries: ["Port and Maritime Trade", "Tourism", "Textiles"],
            universities: ["Abdelmalek Essaâdi University"],
            keyEvents: [
              { year: 1923, event: "Treaty of Tanger grants international status to the city, leading to its multicultural character." },
              { year: 1956, event: "Morocco gains independence, and Tanger becomes part of the newly formed Kingdom of Morocco." },
            ],
            notableLandmarks: [
              "The Kasbah Museum",
              "Grand Socco",
              "Caves of Hercules"
            ],
          },
          {
            id: 3,
            cityName: "Rabat",
            overview: "Rabat, the capital of Morocco, is a city with a rich history and a mix of modern and traditional elements. It has been the political and administrative center of the country for centuries.",
            climate: "Rabat experiences a Mediterranean climate with warm, dry summers and mild, wet winters. The city benefits from its coastal location along the Atlantic Ocean.",
            population: 1200000,
            languages: ["Arabic", "French"],
            industries: ["Government Services", "Education", "Tourism"],
            universities: ["Mohammed V University", "International University of Rabat"],
            keyEvents: [
              { year: 1150, event: "Construction of the Hassan Tower and the beginnings of the Kasbah of the Udayas." },
              { year: 1912, event: "French protectorate established in Morocco, with Rabat as a key administrative center." },
            ],
            notableLandmarks: [
              "Hassan Tower",
              "Chellah Necropolis",
              "Royal Palace of Rabat"
            ],
          },
          {
            id: 4,
            cityName: "Marrakech",
            overview: "Marrakech, also known as the 'Red City,' is famous for its vibrant markets, historic palaces, and bustling medinas. It has a rich cultural history as a former imperial city.",
            climate: "Marrakech has a hot semi-arid climate with extremely hot summers and mild winters. The city is known for its distinct red buildings and sandy surroundings.",
            population: 1000000,
            languages: ["Arabic", "Amazigh", "French"],
            industries: ["Tourism", "Handicrafts", "Entertainment"],
            universities: ["Cadi Ayyad University"],
            keyEvents: [
              { year: 1062, event: "Foundation of Marrakech by the Almoravid dynasty." },
              { year: 1971, event: "Marrakech hosts the memorial of Josephine Baker, a famous dancer and singer." },
            ],
            notableLandmarks: [
              "Jamaa el Fna Square",
              "Koutoubia Mosque",
              "Bahia Palace"
            ],
          },
          {
            id: 5,
            cityName: "Casablanca",
            overview: "Casablanca is Morocco's largest city and a major economic hub. Known for its modern architecture and vibrant atmosphere, it has played a significant role in Morocco's development.",
            climate: "Casablanca experiences a Mediterranean climate with hot, dry summers and mild, wet winters. The city is characterized by its modern skyscrapers and coastal location.",
            population: 3600000,
            languages: ["Arabic", "French"],
            industries: ["Finance", "Trade", "Technology"],
            universities: ["Hassan II University", "Casablanca American School"],
            keyEvents: [
              { year: 1907, event: "Construction of the Casablanca Cathedral, a symbol of the city's French colonial history." },
              { year: 1942, event: "Casablanca Conference during World War II, attended by Winston Churchill and Franklin D. Roosevelt." },
            ],
            notableLandmarks: [
              "Hassan II Mosque",
              "Corniche Ain Diab",
              "Old Medina of Casablanca"
            ],
          },
          {
            id: 6,
            cityName: "Fes",
            overview: "Fes, one of the oldest imperial cities in Morocco, is known for its well-preserved historic medina and traditional crafts. It has been a center of learning and culture for centuries.",
            climate: "Fes experiences a Mediterranean climate with hot, dry summers and cool, wet winters. The city is renowned for its ancient university and traditional Moroccan architecture.",
            population: 1200000,
            languages: ["Arabic", "Amazigh", "French"],
            industries: ["Handicrafts", "Education", "Tourism"],
            universities: ["University of Al Quaraouiyine"],
            keyEvents: [
              { year: 808, event: "Foundation of the University of Al Quaraouiyine in Fes, considered the oldest continuously operating educational institution in the world." },
              { year: 1276, event: "Construction of the Madrasa Bou Inania, a masterpiece of Marinid architecture." },
            ],
            notableLandmarks: [
              "Fes el Bali (Medina of Fes)",
              "Al-Attarine Madrasa",
              "Bab Bou Jeloud (Blue Gate)"
            ],
          },

      ]

    })
});
app.get('/TraditionsCultures',(req,res)=>{
  res.status(200).send({
    CitiesTraditionsCultures: [
      {
        id:1,
        name: "Agadir",
        traditions: {
          festivals: ["Agadir Festival", "Timitar Festival"],
          local_cuisine: ["Amlou", "Fish Chermoula"],
          crafts: ["Agadir pottery", "Argan oil products"],
          traditional_clothing: ["Amazigh clothing"],
          historical_sites: ["Kasbah of Agadir", "Agadir Oufella"]
        },
        "culture": {
          "language": "Tamazight",
          "music": "Amazigh music",
          "landmarks": ["Kasbah of Agadir", "Agadir Oufella"]
        },
        "images": {
          "festivals": ["agadir_festival.jpg", "timitar_festival.jpg"],
          "local_cuisine": ["amlou.jpg", "fish_chermoula.jpg"],
          "crafts": ["agadir_pottery.jpg", "argan_oil_products.jpg"],
          "traditional_clothing": ["amazigh_clothing.jpg"],
          "historical_sites": ["kasbah_of_agadir.jpg", "agadir_oufella.jpg"]
        }
      },
      {
        id:2,
        "name": "Tanger",
        "traditions": {
          "festivals": ["Tangier International Film Festival", "Tanjazz Festival"],
          "local_cuisine": ["Tajine", "Mint Tea"],
          "crafts": ["Tangier ceramics", "Leather goods"],
          "traditional_clothing": ["Traditional Moroccan Djellaba"],
          "historical_sites": ["Kasbah of Tangier", "Grand Socco"]
        },
        "culture": {
          "language": "Arabic",
          "music": "Andalusian music",
          "landmarks": ["Kasbah of Tangier", "Grand Socco"]
        },
        "images": {
          "festivals": ["tangier_film_festival.jpg", "tanjazz_festival.jpg"],
          "local_cuisine": ["tajine.jpg", "mint_tea.jpg"],
          "crafts": ["tangier_ceramics.jpg", "leather_goods.jpg"],
          "traditional_clothing": ["moroccan_djellaba.jpg"],
          "historical_sites": ["kasbah_of_tangier.jpg", "grand_socco.jpg"]
        }
      },
      {
        id:3,
        "name": "Rabat",
        "traditions": {
          "festivals": ["Mawazine Festival", "Rabat Biennale"],
          "local_cuisine": ["Pastilla", "Zaalouk"],
          "crafts": ["Rabat carpets", "Metalwork"],
          "traditional_clothing": ["Traditional Moroccan Caftan"],
          "historical_sites": ["Kasbah of the Udayas", "Hassan Tower"]
        },
        "culture": {
          "language": "Arabic",
          "music": "Gnawa music",
          "landmarks": ["Kasbah of the Udayas", "Hassan Tower"]
        },
        "images": {
          "festivals": ["mawazine_festival.jpg", "rabat_biennale.jpg"],
          "local_cuisine": ["pastilla.jpg", "zaalouk.jpg"],
          "crafts": ["rabat_carpets.jpg", "metalwork.jpg"],
          "traditional_clothing": ["moroccan_caftan.jpg"],
          "historical_sites": ["kasbah_of_udayas.jpg", "hassan_tower.jpg"]
        }
      },
      {
        id:4,
        "name": "Marrakech",
        "traditions": {
          "festivals": ["Marrakech International Film Festival", "Marrakech Popular Arts Festival"],
          "local_cuisine": ["Tagine", "Couscous"],
          "crafts": ["Marrakech carpets", "Leather goods"],
          "traditional_clothing": ["Traditional Moroccan Jellaba"],
          "historical_sites": ["Jemaa el-Fnaa", "Majorelle Garden"]
        },
        "culture": {
          "language": "Arabic",
          "music": "Berber music",
          "landmarks": ["Jemaa el-Fnaa", "Majorelle Garden"]
        },
        "images": {
          "festivals": ["marrakech_film_festival.jpg", "popular_arts_festival.jpg"],
          "local_cuisine": ["tagine.jpg", "couscous.jpg"],
          "crafts": ["marrakech_carpets.jpg", "leather_goods.jpg"],
          "traditional_clothing": ["moroccan_jellaba.jpg"],
          "historical_sites": ["jemaa_el_fnaa.jpg", "majorelle_garden.jpg"]
        }
      },
      {
        id:5,
        "name": "Casablanca",
        "traditions": {
          "festivals": ["Casablanca Festival", "Jidar - Toiles de Rue"],
          "local_cuisine": ["Bisteeya", "Harira"],
          "crafts": ["Casablanca ceramics", "Textiles"],
          "traditional_clothing": ["Traditional Moroccan Takchita"],
          "historical_sites": ["Hassan II Mosque", "Corniche"]
        },
        "culture": {
          "language": "Arabic",
          "music": "Chaabi music",
          "landmarks": ["Hassan II Mosque", "Corniche"]
        },
        "images": {
          "festivals": ["casablanca_festival.jpg", "jidar_toiles_de_rue.jpg"],
          "local_cuisine": ["bisteeya.jpg", "harira.jpg"],
          "crafts": ["casablanca_ceramics.jpg", "textiles.jpg"],
          "traditional_clothing": ["moroccan_takchita.jpg"],
          "historical_sites": ["hassan_ii_mosque.jpg", "corniche.jpg"]
        }
      },
      {
        id:6,
        "name": "Fes",
        "traditions": {
          "festivals": ["Fes Festival of World Sacred Music", "Fes Festival of Sufi Culture"],
          "local_cuisine": ["Mechoui", "Fes Pastilla"],
          "crafts": ["Fes ceramics", "Embroidery"],
          "traditional_clothing": ["Traditional Moroccan Fouta"],
          "historical_sites": ["Medina of Fes", "Bou Inania Madrasa"]
        },
        "culture": {
          "language": "Arabic",
          "music": "Andalusian music",
          "landmarks": ["Medina of Fes", "Bou Inania Madrasa"]
        },
        "images": {
          "festivals": ["fes_sacred_music_festival.jpg", "fes_sufi_culture_festival.jpg"],
          "local_cuisine": ["mechoui.jpg", "fes_pastilla.jpg"],
          "crafts": ["fes_ceramics.jpg", "embroidery.jpg"],
          "traditional_clothing": ["moroccan_fouta.jpg"],
          "historical_sites": ["medina_of_fes.jpg", "bou_inania_madrasa.jpg"]
        }
      }
    ]
  })
})

app.get('/CityHotels',(req,res)=>{
  res.status(200).send({
    CityHotels: [
      {
        cityId: 1,
        cityName: "Agadir",
        hotels: [
          { 
            name: "Sofitel Agadir Thalassa Sea & Spa",
            stars: 5,
            address: "Chemin des Dunes, B.P. 901, Agadir 80007, Morocco",
            amenities: ["Private Beach", "Spa", "Gourmet Dining"],
            averagePrice: 200,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/36/96/b9/welcome.jpg?w=700&h=-1&s=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/307183967.jpg?k=4c2d58706b359fcfb03a30299b64c7a3c18fd013ae416f6d7663d006d5da2963&o=&hp=1",
                     "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/52/2021/08/03095605/23-26-1170x780.jpg"
                    ]
          },
          { 
            name: "Iberostar Founty Beach",
            stars: 4,
            address: "B.P. No 13 Cité Founty P4, Agadir 80010, Morocco",
            amenities: ["Rooftop Bar", "Fitness Center", "Conference Rooms"],
            averagePrice: 120,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/76/7f/c7/iberostar-founty-beach.jpg?w=700&h=-1&s=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466916577.jpg?k=ff6b770c7975c520e13d2d4c1c2ab0172af645bed8c7ad58608c8d5e0cf481c5&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/145874407.jpg?k=a82837bda8319fb0a2465ea450e63394faab49af9b1a7cfc572dfbae63b3742c&o=&hp=1"
                    ]  
          },
          { 
            name: "Atlantic Palace Agadir Golf Thalasso & Casino Resort",
            stars: 5,
            address: "Secteur Balneaire Et Touristique, BP 194, Agadir 80000, Morocco",
            amenities: ["Pool", "Rooms with Sea View", "Family-Friendly"],
            averagePrice: 180,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e8/5e/8f/atlantic-palace-agadir.jpg?w=700&h=-1&s=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d4/13/a5/atlantic-palace-agadir.jpg?w=700&h=-1&s=1", 
                     "https://z.cdrst.com/foto/hotel-sf/11675/granderesp/atlantic-palace-agadir-golf-thalasso-casino-resort-habitacion-108de6f0.jpg"
                    ]
          },
        ],
      },
      {
        cityId: 2,
        cityName: "Tanger",
        hotels: [
          { 
            name: "El Minzah Hotel",
            stars: 5,
            address: "85 Rue de la Liberté, Tanger 90000, Morocco",
            amenities: ["Port View", "Fine Dining", "Business Center"],
            averagePrice: 250,
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/223929205.jpg?k=d078e72eea7a90a7bba14dac4da7ba6f113e022ac65aa58cb1a6e27c35994cda&o=&hp=1",
                     "https://media-cdn.tripadvisor.com/media/photo-s/2a/83/e7/13/deluxe-room-with-terrace.jpg", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223929150.jpg?k=10c6f6c896cffcc4eed8caac9ba53c55ed17c5a61be187c95153aa0f0d01b28e&o=&hp=1"
                    ]
          },
          { 
            name: "Hotel Continental",
            stars: 3,
            address: "36 Rue Dar El Baroud, Tanger 90000, Morocco",
            amenities: ["Free Wi-Fi", "Buffet Breakfast", "Pet-Friendly"],
            averagePrice: 80,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a9/29/f0/dining-room.jpg?w=700&h=-1&s=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/102094590.jpg?k=c5d61c472c5e82531c48bb3bf86f0cfa08e4067c9b9b3592f1c202aef83a57ff&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/102998040.jpg?k=57f0402c315d53c99c02e65b2b7ce9f3aea2f0ec067c7cb4679b758f3dd39d2c&o=&hp=1"
                    ]
          },
          { 
            name: "Grand Hotel Villa de France",
            stars: 4,
            address: "36 Rue Dar El Baroud, Tanger 90000, Morocco",
            amenities: ["Spacious Rooms", "Waterfront Terrace", "Fitness Club"],
            averagePrice: 150,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/09/09/75/villade-france-property.jpg?w=700&h=-1&s=1",
                     "https://q-xx.bstatic.com/xdata/images/hotel/max500/38065317.jpg?k=ba4531ad41478659b43bd550c0a5973db5374e9dff9c22b25e1b73e5a4546b4a&o=", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/38065268.jpg?k=ff3f818aeeead4702276149e875fd7c98386a6d1705c06a6364392e7eac08f53&o=&hp=1"
                    ]
          },
        ],
      },
      {
        cityId: 3,
        cityName: "Rabat",
        hotels: [
          { 
            name: "The View Hotel",
            stars: 5,
            address: "Avenue Hassan II, Rabat 10000, Morocco",
            amenities: ["Executive Suites", "Gourmet Dining", "Spa"],
            averagePrice: 300,
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/111231833.jpg?k=d6964b1e5ab0871c714e86394a805fe95e6aea12c06fd1214993f0eeeb59b7ac&o=&hp=1",
                     "https://scontent.fcmn1-2.fna.fbcdn.net/v/t39.30808-6/241184044_4225043500924746_2267611381889388139_n.jpg?stp=dst-jpg_p640x640&_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_ohc=7DY-qc3aXPgAX_96Vlp&_nc_zt=23&_nc_ht=scontent.fcmn1-2.fna&oh=00_AfCOGOf2gfFT5qpdHtP4VC5C7qaFNkRY8s_7_o81_cloBg&oe=6573DED0", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/100492717.jpg?k=b19d2e93ba0058b4f6a361c6926039d812ad7904491505bf7ae81c9c8d0e6927&o=&hp=1"
                    ]
          },
          { 
            name: "Sofitel Rabat Jardin des Roses",
            stars: 5,
            address: "BP 450 Souissi, Rabat 10000, Morocco",
            amenities: ["Beach Access", "Poolside Bar", "Conference Facilities"],
            averagePrice: 220,
            photos: ["https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/hotelier-images/67/f5/fcb83f2ecd4dc581956ba45d508d2fd76ed66c757c68e9665b4ecc131765.jpeg",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a2/8c/63/exterior-view.jpg?w=700&h=-1&s=1", 
                     "https://www.ahstatic.com/photos/6813_ho_00_p_1024x768.jpg"
                    ]
          },
          { 
            name: "Villa Mandarine",
            stars: 4,
            address: "19 Rue Ouled Ben Allal, Rabat 10000, Morocco",
            amenities: ["Antique Decor", "Inner Garden", "Complimentary Breakfast"],
            averagePrice: 120,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c7/a2/6c/le-patio-de-nuit.jpg?w=700&h=-1&s=1",
                     "http://admin.villamandarine.com/Images/Diaporamas/8/slide3.jpg", 
                     "https://images2.bovpg.net/r/back/fr/prestationHotelCommon/60b3157f88e8c5b6c7768aa31fd785aa.jpg"
                    ]
          },
        ],
      },
      {
        cityId: 4,
        cityName: "Marrakech",
        hotels: [
          { 
            name: "La Mamounia",
            stars: 5,
            address: "Avenue Bab Jdid, Marrakech 40040, Morocco",
            amenities: ["Royal Suites", "Gardens", "Michelin Star Restaurant"],
            averagePrice: 400,
            photos: ["https://mamounia.com/media/cache/jadro_resize/rc/9Qszg6tN1700567529/jadroRoot/medias/611cca0f424ac/le-pavillon-de-la-piscine-0800.jpg",
                     "https://www.kayak.fr/rimg/himg/85/df/34/leonardo-2680807-Al_Mamoun_Suite_(3)_O-918712.jpg?width=1366&height=768&crop=true", 
                     "https://www.laurentdelporte.com/wp-content/uploads/2018/03/1300HP-803725605939386791y6747_G-iloveimg-resized-iloveimg-cropped.jpg"
                    ]
          },
          { 
            name: "Riad Kniza",
            stars: 4,
            address: "34 Derb L'Hotel, Bab Doukala, Marrakech 40000, Morocco",
            amenities: ["Traditional Decor", "Spa", "Souvenir Boutique"],
            averagePrice: 180,
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/40887389.jpg?k=f6b110a8b6962d014a481cec2b48138f200b28c551041bcdaf238e3b9041551d&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/40883812.jpg?k=75b8e2cf6788170ac389e6977db3e3e6befd36f3e1f3bc83acdaa2ed83dbf821&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/40883621.jpg?k=fbcb80f7acae9c48996c98eb491113685c98c63577420857dc359b4de1c83fc7&o=&hp=1"
                    ]
          },
          { 
            name: "Hotel Ali",
            stars: 3,
            address: "120 Rue Berrima, Marrakech 40000, Morocco",
            amenities: ["Outdoor Pool", "Entertainment Hall", "Budget-Friendly"],
            averagePrice: 70,
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/23111398.jpg?k=fef37c131b70d1b82b31d246bc24c51dc940cf19ac5b0a3bef45a3246db09e51&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23111414.jpg?k=ec40bd9ff4a760b73d2e89d24b2da91582ae69dd468c5bb84cd03531fca7bc2c&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/23111510.jpg?k=055eb374fe5791ef4a660e8233d5211524dbef1e327c1cd968ff5ca728155bf3&o=&hp=1"
                    ]
          },
        ],
      },
      {
        cityId: 5,
        cityName: "Casablanca",
        hotels: [
          { 
            name: "Four Seasons Hotel Casablanca",
            stars: 5,
            address: "Anfa Boulevard, Casablanca 20000, Morocco",
            amenities: ["City View Suites", "Business Center", "Panoramic Lounge"],
            averagePrice: 500,
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/08/f5/fd/cblhotelexterior.jpg?w=700&h=-1&s=1",
                     "https://industries.ma/wp-content/uploads/2020/07/d06607ec2765503440f7adb9d06698a5.jpg", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67590766.jpg?k=e84f9e4d1af13d43c3bd4143db77e06a519d49a8236528f5f840f8ed54405f9d&o=&hp=1"
                    ]
          },
          { 
            name: "Hyatt Regency Casablanca",
            stars: 4,
            address: "Place des Nations Unies, Casablanca 20000, Morocco",
            amenities: ["Coastal Rooms", "Casino", "Nightclub"],
            averagePrice: 300,
            photos: ["https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/11/23/0620/CASAB-P0412-Exterior.jpg/CASAB-P0412-Exterior.16x9.jpg?imwidth=1280",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/460875952.jpg?k=2ef9033172ebdbdbabe526d06375f7cd14ef756fd2c070670e294ca6ab836362&o=&hp=1", 
                     "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2022/08/18/0555/CASAB-P0424-Dar-Beida-Seating.jpg/CASAB-P0424-Dar-Beida-Seating.16x9.jpg?imwidth=1280"
                    ]
          },
          { 
            name: "Mövenpick Hotel Casablanca",
            stars: 4,
            address: "Rond-Point Hassan II, Casablanca 20070, Morocco",
            amenities: ["Poolside Bar", "Gardens", "Family Suites"],
            averagePrice: 250,
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/49030157.jpg?k=8ef91a4ea5d6e9e79eef3a7382543f83906b4d68a744ba593cf0fddf64d05ced&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413768595.jpg?k=1e4393131a0905136721e643e76ac90a3d5074814fb9a8756be2332f2c9c06e1&o=&hp=1", 
                     "https://www.il.kayak.com/rimg/himg/7a/6b/c5/ice-133377-68038432_3XL-097170.jpg?width=1366&height=768&xhint=1440&yhint=1123&crop=true"
                    ]
          },
        ],
      },
      {
        cityId: 6,
        cityName: "Fes",
        hotels: [
          { 
            name: "Palais Amani",
            stars: 4,
            address: "12 Derb El Miter, Fes 30000, Morocco",
            amenities: ["Traditional Architecture", "Inner Courtyard", "Authentic Cuisine"],
            averagePrice: 180,
            photos: ["https://images4.bovpg.net/r/back/fr/sale/178b048de71762.jpg",
                     "https://www.palaisamani.com/wp-content/uploads/2020/03/DSC04384-2-2.jpg", 
                     "https://www.fescity.com/wp-content/uploads/job_listings/2015/02/amani_cover.jpg"
                    ]
          },
          { 
            name: "Barceló Fès Medina",
            stars: 4,
            address: "53 Avenue Hassan II, Fes 30000, Morocco",
            amenities: ["Pool", "Family-Friendly", "Entertainment Programs"],
            averagePrice: 120,
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/501772250.jpg?k=66930ab007267c376f2eba1dde700a768c95ec40c171d8754b55af4346e5d9ed&o=&hp=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/48/25/55/pool--v10278011.jpg?w=700&h=-1&s=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501772167.jpg?k=461b7cc5ebb95aacf7d1e57e8366468bbcd715cb60b039c9608d10e72a102782&o=&hp=1"
                    ]
          },
          { 
            name: "Riad Fès",
            stars: 5,
            address: "5 Derb Ben Slimane, Fes 30000, Morocco",
            amenities: ["Moroccan Decor", "Rooftop Terrace", "Cultural Experiences"],
            averagePrice: 250,
            photos: ["https://www.hotel.de/de/media/image/9d/c7/bf/Riad_Fes-Fes-Aussenansicht-8-378736.jpg",
                     "https://media-cdn.tripadvisor.com/media/photo-s/14/9e/49/48/riad-dar-fes.jpg", 
                     "https://www.lopinion.ma/photo/art/grande/71050737-49510563.jpg?v=1677408237"
                    ]
          },
        ],
      },
    
    ]
    
  })
})
app.get('/PopularPlaces',(req,res)=>{
  res.status(200).send({
    
  "PopularPlaces": [
    {
      id:1,
      city: "Agadir",
      places: [
        {
          "name": "Agadir Beach",
          "description": "A beautiful sandy beach with a stunning view of the Atlantic Ocean.",
          "image": "https://www.worldbeachguide.com/photos/agadir-beach-view.jpg",
          "location": "Agadir Beach, Agadir, Morocco"
        },
        {
          "name": "Souk El Had",
          "description": "A bustling market offering a variety of goods, from spices to traditional crafts.",
          "image": "https://lh3.googleusercontent.com/p/AF1QipN9kN0qwWmL3PwzoVxN5z5z0a_b77vG0CBsX5Xa=s1360-w1360-h1020",
          "location": "Souk El Had, Agadir, Morocco"
        },
        {
          "name": "Valley of the Birds",
          "description": "A lush park where visitors can enjoy the company of various bird species.",
          "image": "valley_of_the_birds.jpg",
          "location": "Valley of the Birds, Agadir, Morocco"
        }
      ]
    },
    {
      id:2,
      city: "Tanger",
      places: [
        {
          "name": "Kasbah Museum",
          "description": "A historic fortress turned museum, showcasing artifacts from Tanger's past.",
          "image": "kasbah_museum.jpg",
          "location": "Kasbah Museum, Tanger, Morocco"
        },
        {
          "name": "Caves of Hercules",
          "description": "A natural cave with a legendary connection to Hercules, offering scenic views.",
          "image": "caves_of_hercules.jpg",
          "location": "Caves of Hercules, Tanger, Morocco"
        },
        {
          "name": "Parc Perdicaris",
          "description": "A serene park with diverse plant life, named after a historical figure.",
          "image": "parc_perdicaris.jpg",
          "location": "Parc Perdicaris, Tanger, Morocco"
        }
      ]
    },
    {
      id:3,
      "city": "Rabat",
      "places": [
        {
          "name": "Royal Palace of Rabat",
          "description": "The official residence of the King of Morocco, known for its grand architecture.",
          "image": "royal_palace_rabat.jpg",
          "location": "Royal Palace of Rabat, Rabat, Morocco"
        },
        {
          "name": "Chellah Necropolis",
          "description": "An ancient Roman and medieval Muslim necropolis with picturesque ruins.",
          "image": "chellah_necropolis.jpg",
          "location": "Chellah Necropolis, Rabat, Morocco"
        },
        {
          "name": "Rabat Archaeological Museum",
          "description": "A museum housing a rich collection of artifacts from Morocco's archaeological sites.",
          "image": "rabat_archaeological_museum.jpg",
          "location": "Rabat Archaeological Museum, Rabat, Morocco"
        }
      ]
    },
    {
      id:4,
      "city": "Marrakech",
      "places": [
        {
          "name": "Jardin Majorelle",
          "description": "A vibrant garden designed by Jacques Majorelle, featuring exotic plants and blue structures.",
          "image": "jardin_majorelle.jpg",
          "location": "Jardin Majorelle, Marrakech, Morocco"
        },
        {
          "name": "Bahia Palace",
          "description": "A magnificent palace with stunning gardens, once home to a grand vizier.",
          "image": "bahia_palace.jpg",
          "location": "Bahia Palace, Marrakech, Morocco"
        },
        {
          "name": "Saadian Tombs",
          "description": "Historical tombs dating back to the Saadian dynasty, rediscovered in 1917.",
          "image": "saadian_tombs.jpg",
          "location": "Saadian Tombs, Marrakech, Morocco"
        }
      ]
    },
    {
      id:5,
      "city": "Casablanca",
      "places": [
        {
          "name": "Hassan II Mosque",
          "description": "A grand mosque with intricate architecture, situated on the Atlantic Ocean.",
          "image": "hassan_ii_mosque.jpg",
          "location": "Hassan II Mosque, Casablanca, Morocco"
        },
        {
          "name": "Old Medina",
          "description": "A historic walled area with narrow streets, traditional markets, and historic sites.",
          "image": "old_medina_casablanca.jpg",
          "location": "Old Medina, Casablanca, Morocco"
        },
        {
          "name": "Corniche Ain Diab",
          "description": "A popular waterfront area with cafes, restaurants, and scenic views of the sea.",
          "image": "corniche_ain_diab.jpg",
          "location": "Corniche Ain Diab, Casablanca, Morocco"
        }
      ]
    },
    {
      id:6,
      "city": "Fes",
      "places": [
        {
          "name": "Medina of Fes",
          "description": "A UNESCO World Heritage Site, the ancient and bustling heart of Fes.",
          "image": "medina_of_fes.jpg",
          "location": "Medina of Fes, Fes, Morocco"
        },
        {
          "name": "Bou Inania Madrasa",
          "description": "A beautifully decorated madrasa showcasing Islamic architecture and design.",
          "image": "bou_inania_madrasa.jpg",
          "location": "Bou Inania Madrasa, Fes, Morocco"
        },
        {
          "name": "Dar Batha Museum",
          "description": "A museum housed in a former palace, featuring Moroccan art and artifacts.",
          "image": "dar_batha_museum.jpg",
          "location": "Dar Batha Museum, Fes, Morocco"
        }
      ]
    }
  ]
  })
})

app.post('/stadium/:id',(req,res)=>{
    const{id}=req.params;
    const{logo}=req.body; //express does not parse json in the body by default -> middleware

    if(!logo){
        res.status(418).send({
            message:"We need a logo!"
        })
    }
    res.send({
        stadium:`Mohammed V with your logo ${logo} and ID of ${id}`
    })
});


