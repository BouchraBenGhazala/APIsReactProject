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
            averagePriceFor2Persn: "1980MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/36/96/b9/welcome.jpg?w=700&h=-1&s=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/307183967.jpg?k=4c2d58706b359fcfb03a30299b64c7a3c18fd013ae416f6d7663d006d5da2963&o=&hp=1",
                     "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/52/2021/08/03095605/23-26-1170x780.jpg"
                    ]
          },
          { 
            name: "Atlantic Palace Agadir Golf Thalasso & Casino Resort",
            stars: 5,
            address: "Secteur Balneaire Et Touristique, BP 194, Agadir 80000, Morocco",
            amenities: ["Pool", "Rooms with Sea View", "Family-Friendly"],
            averagePriceFor2Persn: "1750MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e8/5e/8f/atlantic-palace-agadir.jpg?w=700&h=-1&s=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d4/13/a5/atlantic-palace-agadir.jpg?w=700&h=-1&s=1", 
                     "https://z.cdrst.com/foto/hotel-sf/11675/granderesp/atlantic-palace-agadir-golf-thalasso-casino-resort-habitacion-108de6f0.jpg"
                    ]
          },
          {
            name: "Riu Palace Tikida Agadir",
            stars: 5,
            address: "Chemin des Dunes  B.P. 901, Agadir 80000, Morocco",
            amenities: ["Beachfront", "Luxury Spa", "Fine Dining"],
            averagePriceFor2Persn: "2250MAD",
            photos: ["https://www.riu.com/pt/binaris/piscina-hotel-riu-palace-tikida-agadir-2_tcm73-171413.JPG?v=tm271119_0934",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/289899115.jpg?k=245eb79d0edbdb9f99bc6351052b6ff909a336b9c3a55054473e6618452059bd&o=&hp=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/8f/f2/70/hotel-riu-palace-tikida.jpg?w=700&h=-1&s=1"
                    ]
          },
          { 
            name: "Iberostar Founty Beach",
            stars: 4,
            address: "B.P. No 13 Cité Founty P4, Agadir 80010, Morocco",
            amenities: ["Rooftop Bar", "Fitness Center", "Conference Rooms"],
            averagePriceFor2Persn: "1915MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/76/7f/c7/iberostar-founty-beach.jpg?w=700&h=-1&s=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/466916577.jpg?k=ff6b770c7975c520e13d2d4c1c2ab0172af645bed8c7ad58608c8d5e0cf481c5&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/145874407.jpg?k=a82837bda8319fb0a2465ea450e63394faab49af9b1a7cfc572dfbae63b3742c&o=&hp=1"
                    ]  
          },
          {
            name: "Labranda Dunes D'Or Resort",
            stars: 4,
            address: "Boulevard Mohamed V, Agadir 80000, Morocco",
            amenities: ["Outdoor Pool", "Fitness Center", "Buffet Restaurant"],
            averagePriceFor2Persn: "717MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/66576207.jpg?k=435a6b362aa07f24d057f8fb28dcc9418036b4838e51d2d5babb660d3b2dde7f&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/90063452.jpg?k=9a5376e26f58ce4d7a5edab9dad5f9a65cd3332ef06e57c484c700033a221da7&o=&hp=1",
                     "https://labranda-les-dunes-dor.hotels-agadir.com/data/Pictures/OriginalPhoto/3795/379504/379504552/agadir-labranda-les-dunes-dor-hotel-picture-28.JPEG"
                    ]
          },
          {
            name: "LTI Agadir Beach Club",
            stars: 4,
            address: "Rue Oued Sous, Agadir 80000, Morocco",
            amenities: ["Private Beach Access", "Entertainment Shows", "Fitness Classes"],
            averagePriceFor2Persn: "1055MAD",
            photos: ["https://gips.ltur.com/gips/scalr/770x462/pics.tui.com/pics/pics1600x1200/tui/2/2c72c5b7-af61-4341-9006-d80c161341d8.jpg",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/343057772.jpg?k=6dc45e9e65d02ef01674423ed2e6a038745916c9ee6d6d9f726c81a4d72ffadc&o=&hp=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/80/2e/c4/facade-hotel.jpg?w=700&h=-1&s=1"
                    ]
          },
          {
            name: "Tildi Hotel",
            stars: 3,
            address: "Rue Hubert Giraud, Agadir 80000, Morocco",
            amenities: ["Outdoor Pool", "Terrace Bar", "Free Wi-Fi"],
            averagePriceFor2Persn: "479MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/296235262.jpg?k=1098d51b3cb06b3de176d6b2b7de7ef1c48ebd0507993e4c4d9ff73ee9e442ae&o=&hp=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f9/fb/dd/hotel-tildi-spa.jpg?w=700&h=-1&s=1",
                     "https://static11.com-hotel.com/uploads/hotel/318091/photo/hotel-tildi-hotel-spa_159736047118.jpg"
                    ]
          },
          {
            name: "Anezi Tower Hotel",
            stars: 3,
            address: "Boulevard Mohammed V, Agadir 80000, Morocco",
            amenities: ["Panoramic Restaurant", "Outdoor Pool", "Children's Playground"],
            averagePriceFor2Persn: "785MAD",
            photos: ["https://static.logitravel.com/cloudcontent/fotos/agregadorHotelero/0000/16030/16030/14.jpg?f=16903502",
                     "https://images.trvl-media.com/lodging/2000000/1340000/1332000/1331938/a899fc52.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium",
                     "https://media-cdn.tripadvisor.com/media/photo-s/08/46/ea/b6/anezi-tower-hotel-apartments.jpg"
                    ]
          },
          {
            name: "Hotel Oasis",
            stars: 3,
            address: "Sample Address, Agadir, Morocco",
            amenities: ["Free Wi-Fi", "Outdoor Pool", "Restaurant"],
            averagePriceFor2Persn: "348MAD",
            photos: [
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103145419.jpg?k=ad9b6db3151a3086aeba5a31b88d3d9be7b643a6d492a9bdc39f284de469f25a&o=&hp=1",
              "https://cf.bstatic.com/xdata/images/hotel/max1024x768/369615992.jpg?k=e427f896732cc02a0def8a168d8bd86f8231195b192a29c80b54973d8cd9ae39&o=&hp=1",
              "https://www.blueseaholidays.co.uk/own-files/b18/dba6f1f23543fde1816b23b0accd3/z3T1KgILd5.jpg"
            ]
          }
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
            averagePriceFor2Persn: "1234MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/223929205.jpg?k=d078e72eea7a90a7bba14dac4da7ba6f113e022ac65aa58cb1a6e27c35994cda&o=&hp=1",
                     "https://media-cdn.tripadvisor.com/media/photo-s/2a/83/e7/13/deluxe-room-with-terrace.jpg", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/223929150.jpg?k=10c6f6c896cffcc4eed8caac9ba53c55ed17c5a61be187c95153aa0f0d01b28e&o=&hp=1"
                    ]
          },
          { 
            name: "Fairmont Tazi Palace Tangier",
            stars: 5,
            address: "Palais Tazi Ksar Al Mandoub Jamaa Mokrae Quartier Boubana, 9000 Tangier, Morocco ",
            amenities: ["Port View", "Fine Dining", "Business Center"],
            averagePriceFor2Persn: "2833MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/395915484.jpg?k=2f59bb48ba60ea15bed8251977ee9733f4be5d9fb709ab39ae6245a2f46e017c&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389471200.jpg?k=e81510662ae7d80885be195ab872a724330d915a7a995f394812ca6704e022d4&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/389471198.jpg?k=4d7a14e2826fc99a097f23cb01ddef9fe5e0a7060f45de9e79fcb5b9dfbde8eb&o=&hp=1"
                    ]
          },
          { 
            name: "Mövenpick Hotel & Casino Malabata Tanger",
            stars: 5,
            address: "Baie De Tanger, 90000 Tangier, Morocco ",
            amenities: ["Sea View Rooms", "Casino and Entertainment", "Wellness Spa"],
            averagePriceFor2Persn: "1516MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/330281860.jpg?k=06170ff1dc45426ffecaf95b9a15e432bfebd9afa7c448c18e2e1ced90fc7223&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/247380413.jpg?k=0c67cc80dc31bb4cca2e9810d37e1d00b2782a597cb1c5f0a471c5e36ae7d270&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/275710374.jpg?k=fef65f400a5fce2f5b09a0435cfc81c30dfa63771f0de465778897a7da85fadf&o=&hp=1"
                    ]
          },
          { 
            name: "Grand Hotel Villa de France",
            stars: 4,
            address: "Angle Rue de Hollande et Angleterre, 90000 Tangier, Morocco ",
            amenities: ["Spacious Rooms", "Waterfront Terrace", "Fitness Club"],
            averagePriceFor2Persn: "1077MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/09/09/75/villade-france-property.jpg?w=700&h=-1&s=1",
                     "https://q-xx.bstatic.com/xdata/images/hotel/max500/38065317.jpg?k=ba4531ad41478659b43bd550c0a5973db5374e9dff9c22b25e1b73e5a4546b4a&o=", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/38065268.jpg?k=ff3f818aeeead4702276149e875fd7c98386a6d1705c06a6364392e7eac08f53&o=&hp=1"
                    ]
          },
          { 
            name: "Hilton Garden Inn Tanger City Centre",
            stars: 4,
            address: "Malabata Route with Voie n 18 , 90000 Tangier, Morocco ",
            amenities: ["Beachfront", "Conference Rooms", "Restaurant"],
            averagePriceFor2Persn: "1063MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/483749421.jpg?k=3dfeb1a212eecedde099a862b6f71d3327c779795985af72255bfeb855aa10a9&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/492907104.jpg?k=83660d866dfdf4d9b73c87c6a728d5767cc7f1730b7197767de9f7742edbf5f0&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/483749432.jpg?k=8a55ace537d02aec56f7ea56779def3694c307bd727c182697d90bc82974509f&o=&hp=1"
                    ]
          },
          { 
            name: "Marina Bay",
            stars: 4,
            address: "152 Avenue Mohamed VI, 90000 Tangier, Morocco ",
            amenities: ["Garden View", "Beachfront", "Bar Lounge"],
            averagePriceFor2Persn: "1305MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/225539027.jpg?k=0e208146c0ee99d84a56512914d7254a3f49b1bd2ba97138690ad26f9cde1a4d&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/198502884.jpg?k=248184bf77886966b04e20a49027a4e2fc726a618e2c0f5261774d9fa844cf5a&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225539851.jpg?k=4f7790271cc69fe01eccd5374e950162ff5c970c1532a24883a4d9d8116ae2df&o=&hp=1"
                    ]
          },
          { 
            name: "Hotel Continental",
            stars: 3,
            address: "36 Rue Dar El Baroud, Tanger 90000, Morocco",
            amenities: ["Free Wi-Fi", "Buffet Breakfast", "Pet-Friendly"],
            averagePriceFor2Persn: "665MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a9/29/f0/dining-room.jpg?w=700&h=-1&s=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/102094590.jpg?k=c5d61c472c5e82531c48bb3bf86f0cfa08e4067c9b9b3592f1c202aef83a57ff&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/102998040.jpg?k=57f0402c315d53c99c02e65b2b7ce9f3aea2f0ec067c7cb4679b758f3dd39d2c&o=&hp=1"
                    ]
          },
          { 
            name: "ONOMO Hotel Tanger Med",
            stars: 3,
            address: " Tanger Med Port Center - secteur 9, commune Angra , 90000 Tangier, Morocco ",
            amenities: ["Free Wi-Fi", "Free Parking", "Airport shuttle (free)"],
            averagePriceFor2Persn: "677MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/228455013.jpg?k=3e4d38bbcf33fe731264f089a47e6db6713bad66f32c8a0aa419a1e77113ee1b&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/461788303.jpg?k=2759264872d1d1048f52cf1394b43d360404623d3a378ec2b61835b3c12d3d59&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/228284258.jpg?k=caa95d21c53e9ed901ded4504f5e8138fd875b41b739d7fedefae3394251da24&o=&hp=1"
                    ]
          },
          { 
            name: "Hotel Etoile Du Nord",
            stars: 3,
            address: "11 AV. SIDI MED BEN ABDELLAH, 90000 Tangier, Morocco ",
            amenities: ["Harbor View Rooms", "24-hour front desk", "Airport shuttle"],
            averagePriceFor2Persn: "461MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/445454084.jpg?k=d7179ae539fc5424743706456d50265a82bbe65f8629b1ecc0d9b8d1e5e44c8f&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/445453935.jpg?k=f03fbca0aaa7878a4700bba29367a702dfadb8ab5c0dc3116f07548a97ebf371&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325575779.jpg?k=fbc96c6199cf14ff8b12339aa56505f19e04f5bea13cae230a537f4e78eb64d6&o=&hp=1"
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
            averagePriceFor2Persn: "2270MAD",
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
            averagePriceFor2Persn: "2340MAD",
            photos: ["https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/hotelier-images/67/f5/fcb83f2ecd4dc581956ba45d508d2fd76ed66c757c68e9665b4ecc131765.jpeg",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a2/8c/63/exterior-view.jpg?w=700&h=-1&s=1", 
                     "https://www.ahstatic.com/photos/6813_ho_00_p_1024x768.jpg"
                    ]
          },
          { 
            name: "Fairmont La Marina Rabat Sale Hotel And Residences",
            stars: 5,
            address: "La Marina Avenue De Fes, 11000 Rabat, Morocco",
            amenities: ["Outdoor swimming pool", "Beachfront", "Spa and wellness centre"],
            averagePriceFor2Persn: "3500MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/500153981.jpg?k=dd633341db5d7d17bb52774c8990117212ea226bec7daa671e37ec1a8930ba26&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500153993.jpg?k=a82f27a962e1c0c598df4101473ffd8a93084c522169009b5faf56c44053fe35&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500154037.jpg?k=0c65e10b1b5875db799c7e9a23ae061b0c307d8e532eb7875c841b7737e989e6&o=&hp=1"]
            },
          { 
            name: "Villa Mandarine",
            stars: 4,
            address: "19 Rue Ouled Bousbaa, Rabat 10000, Morocco",
            amenities: ["Antique Decor", "Inner Garden", "Complimentary Breakfast"],
            averagePriceFor2Persn: "2303MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c7/a2/6c/le-patio-de-nuit.jpg?w=700&h=-1&s=1",
                     "http://admin.villamandarine.com/Images/Diaporamas/8/slide3.jpg", 
                     "https://images2.bovpg.net/r/back/fr/prestationHotelCommon/60b3157f88e8c5b6c7768aa31fd785aa.jpg"
                    ]
          },
          { 
            name: "Belere Hotel Rabat",
            stars: 4,
            address: "33 Avenue Moulay Youssef, 10000 Rabat, Morocco",
            amenities: ["Non-smoking rooms", "Room service", "Bar"],
            averagePriceFor2Persn: "878MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/352960908.jpg?k=01fedb3c1c4ced6b5c7a3a32529f7ef77f5a6b2cf2d8408e2bda680993c8db59&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/169474625.jpg?k=0d00ecd0fc6e2a9d4752cdba608d1800cac4a140878289c6ecf1c7074af17410&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/169503905.jpg?k=7e79a6b669be525f4351cdd779b6e541a1ee11c06671ab8f746c5038dac6d4e3&o=&hp=1"]
          },
          { 
            name: "Makass Appart Hotel",
            stars: 4,
            address: "Résidence MAKASS, Rue Alfostok, Hay Riad,, Hay Riad, 10100 Rabat, Morocco",
            amenities: ["Free parking", "Family rooms", "Very good breakfast"],
            averagePriceFor2Persn: "1034MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/267788918.jpg?k=955d5690c5ac9d50811b96110757dd06e93cfe9d93daedaf0c4bd6b239792232&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267657623.jpg?k=11b047ed6e60d97b5830eb8438a49b28a4813fd446d1cfa4bece4b7d2d938838&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267775070.jpg?k=4ae875daf5bfa30b2dd83adaa4435bd76d7de5e14493f2407a31d79153dcf421&o=&hp=1"]
          },
          { 
            name: "Imperial Boutique Hotel Rabat",
            stars: 3,
            address: "Angle Rue Al Mariniyine & Mekka, Hassan, 10000 Rabat, Morocco ",
            amenities: ["Restaurant", "24-hour front desk", "Good breakfast"],
            averagePriceFor2Persn: "549MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/303444469.jpg?k=0182a3af1859b97c4805f06d50a6724f79c70deb2d5fe06a1b6c6e743c9a14c1&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/303652968.jpg?k=327cc47230ebb95d5dafda311ba12c9f973eaf7338558055f2e41e59140dc744&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/303416784.jpg?k=bd883220a77a288ceb6a21f9fa8dd2b4a8c67511b59dae9bd649720448a15f6e&o=&hp=1"]
          },
          { 
            name: "Mercure Shéhérazade Rabat",
            stars: 3,
            address: "21 Rue De Tunis Quartier Hassan Rabat, Hassan, 10000 Rabat, Morocco",
            amenities: ["Family rooms", "Good breakfast", "Room service"],
            averagePriceFor2Persn: "918MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/203634272.jpg?k=528d1b6764c1262c87f6d8e119d405351e06450a0c2a1b1b4fc9ea6221ca133f&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203631859.jpg?k=35c16251da4f508334811237882309cad8719c2ec06bf8438196f2c6481073fe&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/203632731.jpg?k=678e01c1189059513033a2a394efab755008b66b43af46f862fa2e9ef436e620&o=&hp=1"]
          },
          { 
            name: "ONOMO Hotel Rabat Medina",
            stars: 3,
            address: "2, rue Ghandi, Hassan, Hassan, 10000 Rabat, Morocco ",
            amenities: ["Facilities for disabled guests", "24-hour front desk", "Airport shuttle"],
            averagePriceFor2Persn: "820MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/311515467.jpg?k=564e5e9c1b6a3884ddcaa66cbd11ad8ca901129de3bfc0719a859c6c8f20a453&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/311516058.jpg?k=6d12754c73e09d390cb4ba95b52882eff96f1dd96b3feebdda2b051f8fbcc179&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/311515176.jpg?k=9db1a94f86ce28a1d7b65ec77c38d29a37454d9be7f893f5fa328cfd7e65427d&o=&hp=1"]
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
            averagePriceFor2Persn: "7000MAD",
            photos: ["https://mamounia.com/media/cache/jadro_resize/rc/9Qszg6tN1700567529/jadroRoot/medias/611cca0f424ac/le-pavillon-de-la-piscine-0800.jpg",
                     "https://www.kayak.fr/rimg/himg/85/df/34/leonardo-2680807-Al_Mamoun_Suite_(3)_O-918712.jpg?width=1366&height=768&crop=true", 
                     "https://www.laurentdelporte.com/wp-content/uploads/2018/03/1300HP-803725605939386791y6747_G-iloveimg-resized-iloveimg-cropped.jpg"
                    ]
          },
          { 
            name: "Hivernage Hotel & Spa",
            stars: 5,
            address: "Rue Des Temples, Hivernage, 40000 Marrakech, Morocco ",
            amenities: ["Outdoor swimming pool", "Spa and wellness centr", "2 restaurants"],
            averagePriceFor2Persn: "1479MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/384277158.jpg?k=2ac390e69dca2ab1a910cb318617480714e8223664e3ec6eb4db1e7f82b482a6&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/213808915.jpg?k=5377beed454a39a756b2cde7c1f36811e7fd8ae1755729b60fcbe7edd0ca117a&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/60787668.jpg?k=ca42e361e1e93c7720503253e92f466e00936e4befffefcfdf46ab6f14ada10c&o=&hp=1"]
          },
          { 
            name: "Almaha Marrakech Restaurant & SPA",
            stars: 5,
            address: "55, Derb Ben Zina, La Kasbah, Kasbah, 40040 Marrakech, Morocco ",
            amenities: ["Spa and wellness centre", "Very good breakfast", "Bar"],
            averagePriceFor2Persn: "3365MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/122651989.jpg?k=6083e690c1f6dbda81a45598eb2836ea798f427fb0aa45c615ef9b1e726b4865&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/122681873.jpg?k=7b78a8bfd21eb09aabf1b5091fc01bcb495f3e71fe86f568f5d8b162950cda8b&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/254221623.jpg?k=33aa3d8d156f3e6c4a9cb48161fdd39c6713570af36a2362ce624ad797978445&o=&hp=1"]
          },
          { 
            name: "Riad Kniza",
            stars: 4,
            address: "34 Derb L'Hotel, Bab Doukala, Marrakech 40000, Morocco",
            amenities: ["Traditional Decor", "Spa", "Souvenir Boutique"],
            averagePriceFor2Persn: "2309MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/40887389.jpg?k=f6b110a8b6962d014a481cec2b48138f200b28c551041bcdaf238e3b9041551d&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/40883812.jpg?k=75b8e2cf6788170ac389e6977db3e3e6befd36f3e1f3bc83acdaa2ed83dbf821&o=&hp=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/40883621.jpg?k=fbcb80f7acae9c48996c98eb491113685c98c63577420857dc359b4de1c83fc7&o=&hp=1"
                    ]
          },
          { 
            name: "Bab Hotel",
            stars: 4,
            address: "Angle Bd Mansour Eddahbi, Rue Mohamed El Beqqal, Gueliz, 40000 Marrakech, Morocco",
            amenities: ["Facilities for disabled guests", "Spa and wellness centre", "Outdoor swimming pool"],
            averagePriceFor2Persn: "1039MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/338214371.jpg?k=ebd42636841202e6170fbf87aa0fe510e3d19c5aa1fd2227839bbba8887ec22a&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/338214709.jpg?k=404f7c991b4873c4a051504618ed30eefc557329410d7775b791589e395713f4&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/338213666.jpg?k=2b491a58ca7f026e43664544f4d0ad1c648c9dd8b7ec888231d987fd686be97c&o=&hp=1"]
          },
          { 
            name: "The Lemonary Marrakech",
            stars: 4,
            address: "km 15, ROUTE DE SIDI RAHAL OULED HASSOUNE, 40000 Marrakech, Morocco",
            amenities: ["Airport shuttle", "Fitness centre", "Outdoor swimming pool"],
            averagePriceFor2Persn: "1307MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/470073282.jpg?k=f265f6ee6266de1146759e14cd5077b88a8c05fe8685cf51c9eb55aca3f0d72d&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/455233115.jpg?k=8ab05bbcd1bfd8ff502e14392216a10650aae8e26f27e9d8ff7df8b7b05135c5&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/377849388.jpg?k=ca22e6090962d71e2006e8fd091ec57e2bcb2cca5876ec26cd5ef5ddf6867657&o=&hp=1"]
          },
          { 
            name: "Fashion Boutique Hotel",
            stars: 3,
            address: "Angle Av. Hassan II et Rue Mouritania N° 45 Marrakech, Gueliz, 40000 Marrakech, Morocco",
            amenities: ["24-hour front desk", "Spa and wellness centre", "Family rooms"],
            averagePriceFor2Persn: "1114MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/496976097.jpg?k=46b11de55676b470d156e5b1f464de1077ec2cdd680e39eac2b692ed35340e6a&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495799076.jpg?k=1b6d507d198f38213f598bc4009f218a82d5195e631482336b8180c0b26a1724&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495802361.jpg?k=c2abbfaf1edba350491c68804fec8bc83c138dd9215b2f6bdbd63c0865982480&o=&hp=1"]
          },
          { 
            name: "Riad HAFSSA & Spa",
            stars: 3,
            address: "5 Derb Lamdami Elmoukef, Medina, 40000 Marrakech, Morocco",
            amenities: ["Indoor swimming pool", "Spa and wellness centre", "Private parking"],
            averagePriceFor2Persn: "669MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/496293357.jpg?k=1e43cd0e72d9500502c0c730ae2b9c8e1b9a2aeefd2ec34dc58265eee1f6c2d5&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495309116.jpg?k=9b7f7ffc5003c419c1d732e85d929471fc68123c361f60cf11198aaf99ab68f3&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495309043.jpg?k=d81f13ec1074a006214ae28369abcf3b3d00a3900604b1a5e79217675ef13f56&o=&hp=1"]
          },
          { 
            name: "Hotel Ali",
            stars: 3,
            address: "120 Rue Berrima, Marrakech 40000, Morocco",
            amenities: ["Outdoor Pool", "Entertainment Hall", "Budget-Friendly"],
            averagePriceFor2Persn: "449MAD",
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
            address: "Anfa Boulevard, Boulevard de la Corniche Ain Diab Casablanca 20000, Morocco",
            amenities: ["City View Suites", "Business Center", "Panoramic Lounge"],
            averagePriceFor2Persn: "4853MAD",
            photos: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/08/f5/fd/cblhotelexterior.jpg?w=700&h=-1&s=1",
                     "https://industries.ma/wp-content/uploads/2020/07/d06607ec2765503440f7adb9d06698a5.jpg", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/67590766.jpg?k=e84f9e4d1af13d43c3bd4143db77e06a519d49a8236528f5f840f8ed54405f9d&o=&hp=1"
                    ]
          },
          { 
            name: "Casablanca Marriott Hotel",
            stars: 5,
            address: "100, Avenue des FAR, Sidi Belyout, 20 000 Casablanca, Morocco",
            amenities: ["Facilities for disabled guests", "Airport shuttle", "Fitness centre"],
            averagePriceFor2Persn: "1488MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/477186544.jpg?k=b7320e4be019f4bccaa2d73fb194e5ef19eba9151805c3d36113a939205490c0&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484533094.jpg?k=abca6f84af026548f70a2fc24f58f3402d0eddbc2ca6b8968ffdab7c7b70aa97&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475251924.jpg?k=5cad4376a70abea9999d18555c73a78e09d2a9c10d6260727aa3b44eb37ff3e6&o=&hp=1"]
          },
          { 
            name: "Radisson Blu Hotel Casablanca City Center",
            stars: 5,
            address: "02 Blvd Mohamed Diouri, Sidi Belyout, 20250 Casablanca, Morocco",
            amenities: ["Tea/coffee maker in all rooms", "Indoor swimming pool", "Very good breakfast"],
            averagePriceFor2Persn: "1360MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/345379828.jpg?k=dad42522d0246b1bfaeb7e026897fcc7712f2c900664ac90f79a4bdfb9a91b34&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454555314.jpg?k=e34f0df97da6633e8071d9b79dbe76a9393f6c61568e6e29fced987f35b14b00&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/238435754.jpg?k=04691cf300385b3ae2363bb64fc142111931f4b05a71f9a754b5d1c98087e9c8&o=&hp=1"]
          },
          { 
            name: "Hyatt Regency Casablanca",
            stars: 4,
            address: "Place des Nations Unies, Sidi Belyout, Casablanca 20000, Morocco",
            amenities: ["Coastal Rooms", "Casino", "Nightclub"],
            averagePriceFor2Persn: "2201MAD",
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
            averagePriceFor2Persn: "1316MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/49030157.jpg?k=8ef91a4ea5d6e9e79eef3a7382543f83906b4d68a744ba593cf0fddf64d05ced&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/413768595.jpg?k=1e4393131a0905136721e643e76ac90a3d5074814fb9a8756be2332f2c9c06e1&o=&hp=1", 
                     "https://www.il.kayak.com/rimg/himg/7a/6b/c5/ice-133377-68038432_3XL-097170.jpg?width=1366&height=768&xhint=1440&yhint=1123&crop=true"
                    ]
          },
          { 
            name: "Suite Loc Luxury Aparthotel",
            stars: 4,
            address: "5 Rue clos de provence, Sidi Belyout, 20000 Casablanca, Morocco",
            amenities: ["Airport shuttle", "24-hour front desk", "Spa and wellness centre"],
            averagePriceFor2Persn: "1022MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/197239441.jpg?k=19d33f64f605d8d5371495e8b906c82a1f018c16f154cb206c2036faae1fd9d6&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/370243663.jpg?k=2cbc24311e8513b4a0679497e290dfda49ec383790d0f2f81ea68c93a4229483&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/197230245.jpg?k=60f81e7dbde64c769b5d29a965ded4a5a2c466a134dd755b3a4678d468b8efc7&o=&hp=1"]
          },
          { 
            name: "Ibis Abdelmoumen Casa Centre",
            stars: 3,
            address: "Boulevard Abdelmoumen, Maarif, 20042 Casablanca, Morocco",
            amenities: ["24-hour front desk", "Good breakfast", "Facilities for disabled guests"],
            averagePriceFor2Persn: "504MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/501774336.jpg?k=061006dfcf988aac9a44993f5008fd7df38fb1c6e446fe993e6a7e1ee60dc4b2&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501774345.jpg?k=bcdfab74adab01e1d070c84f3bd43cd019a13808f27fdd5ed4bc38b1ea90737d&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501774365.jpg?k=524948f2372a4ee53ef04caa4b5c984da54da911f256a556828aacea5e34920e&o=&hp=1"]
          },
          { 
            name: "Campanile Casablanca Centre Ville",
            stars: 3,
            address: "Angle Boulevard Mohammed V et rue Laon , Roches Noires, 20250 Casablanca, Morocco",
            amenities: ["Free parking", "Fitness centre", "Airport shuttle"],
            averagePriceFor2Persn: "416MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/472670587.jpg?k=c396c600635a35f9697921aea7dd9f06444bac8646740788bbae972a017f6399&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472669988.jpg?k=655337e8616dddd3044703d1ccd3402cb73dabb4c441380a749cd0d973119b28&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/472670790.jpg?k=1893a7b9ac2c216c0c2df0f55853b0187b12b2c11c4454971385dd50172877fd&o=&hp=1"]
          },
          { 
            name: "Maarif Home Casablanca",
            stars: 3,
            address: "Rue Abou Moussa El Jazouli 10, Maarif, 20250 Casablanca, Morocco",
            amenities: ["Free WiFi", "Family rooms", "Terrace"],
            averagePriceFor2Persn: "725MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/436820775.jpg?k=e43c896ed4d4aea7fc2a38ffe860159384d3309a03ebd2047ce4b53e57a2dcfe&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/436821171.jpg?k=45b31f9ad1d952d223aab31c2c949c1f1d101a2fb66ddcbe4e5f9bd0857a54d3&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/310384294.jpg?k=86d73e1aecf90f79e654e77bf2e6ad645dbb4befd709cf3cb5f1919821e53683&o=&hp=1"]
          },
        ],
      },
      {
        cityId: 6,
        cityName: "Fes",
        hotels: [
          { 
            name: "Riad Fès",
            stars: 5,
            address: "5 Derb Ben Slimane, Fes 30000, Morocco",
            amenities: ["Moroccan Decor", "Rooftop Terrace", "Cultural Experiences"],
            averagePriceFor2Persn: "2000MAD",
            photos: ["https://www.hotel.de/de/media/image/9d/c7/bf/Riad_Fes-Fes-Aussenansicht-8-378736.jpg",
                     "https://media-cdn.tripadvisor.com/media/photo-s/14/9e/49/48/riad-dar-fes.jpg", 
                     "https://www.lopinion.ma/photo/art/grande/71050737-49510563.jpg?v=1677408237"
                    ]
          },
          { 
            name: "Palais Faraj Suites & Spa",
            stars: 5,
            address: "16-18 derb bensouda, Bab Ziat, Fes, Fes El Bali, 30000 Fès, Morocco",
            amenities: ["Spa and wellness centre", "Outdoor swimming pool", "Non-smoking rooms"],
            averagePriceFor2Persn: "2481MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/78922697.jpg?k=91eb7fba61850526b0cb497f23fa3441e88d5f5fcd8498a25ce2843845b3322f&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500636927.jpg?k=61ca501ac08a9395e0c0d89f68f93e350015900e15dee983f2218facc28a986d&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/500634488.jpg?k=50ac375439bf2047ea85b5786a5bdcb53d03585c011df970eaa46d866930734e&o=&hp=1"]
          },
          { 
            name: "Palais Medina & Spa",
            stars: 5,
            address: "Avenue Allal El Fassi, 30000 Fès, Morocco",
            amenities: ["Spa and wellness centre", "2 swimming pools", "Airport shuttle"],
            averagePriceFor2Persn: "1197MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/17074562.jpg?k=53ced692220e997ecbbde82beaff45a6779bb2c2b4aef2b1020a9900cf3bf635&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402092243.jpg?k=7cbe7c17c52ab1e59f38dd019c6389f71b852632f27b98f7bf9e32de6263a8f5&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/408019552.jpg?k=c27a903575f422ff19e9ed483c504558b01ef37df2d0fe411b9e49252879aa64&o=&hp=1"]
          },
          { 
            name: "Palais Amani",
            stars: 4,
            address: "12 Derb El Miter, Fes 30000, Morocco",
            amenities: ["Traditional Architecture", "Inner Courtyard", "Authentic Cuisine"],
            averagePriceFor2Persn: "2137MAD",
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
            averagePriceFor2Persn: "716MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/501772250.jpg?k=66930ab007267c376f2eba1dde700a768c95ec40c171d8754b55af4346e5d9ed&o=&hp=1",
                     "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/48/25/55/pool--v10278011.jpg?w=700&h=-1&s=1", 
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/501772167.jpg?k=461b7cc5ebb95aacf7d1e57e8366468bbcd715cb60b039c9608d10e72a102782&o=&hp=1"
                    ]
          },
          { 
            name: "Fes Hostel Zaouia",
            stars: 4,
            address: "DERB ZAOUIA FANDK LIHOUDI FES MEDINA, Fes El Bali, 30000 Fès, Morocco",
            amenities: ["Family rooms", "Airport shuttle", "Tea/coffee maker in all rooms"],
            averagePriceFor2Persn: "260MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/505465408.jpg?k=f235340e3dfb007a1735bf34e5cdd517b9b815bd2089d5a2cf8aa152007e6e79&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505465784.jpg?k=1edb48d419b75959e78efd27dcdd6de62c510bbf3b82f0d400ffa2558181fc83&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/505547541.jpg?k=6ea7b4f9f47b9373914e05adcbb6ff21776c0869a9ba2bb896379f4a4475aa06&o=&hp=1"]
          },
          { 
            name: "Résidence Hôtelière Le Diamant Vert",
            stars: 3,
            address: "5 Route Ain Shkef, 30000 Fès, Morocco",
            amenities: ["Free WiFi", "24-hour front desk", "Restaurant"],
            averagePriceFor2Persn: "630MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/402864058.jpg?k=65b26a6f07e301d63308b4525e1b927c5f5bc42f77c3439f0d566d4f89f3f447&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402866881.jpg?k=7c643fa610b23890251ff8fdb181443b93e7b2865834767934a10bc520d8c027&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/402865743.jpg?k=b7196ccdd1411f73366b40c260fbfb41d3d9968d1e733629e02335a783e9a8aa&o=&hp=1"]
          },
          { 
            name: "New Fez Apartments",
            stars: 3,
            address: "817 Lot Karaouyen, Route Ain Chkef, 30050 Fès, Morocco",
            amenities: ["Heating", "Terrace", "Free WiFi"],
            averagePriceFor2Persn: "680MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/237340846.jpg?k=9406c5b67847080d0658283ffef356c276a926b387eef3467d990c1bc9529f2f&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/236299291.jpg?k=46ba2031caa0f58c0c66cce0528baf444ec924f9821b4eb2db2de2203147fe5e&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/236307090.jpg?k=e1afacee4c0c3e979f4e509ff6ed28e53e55c261f98bf5995606af6c78458711&o=&hp=1"]
          },
          { 
            name: "Hotel De brazza",
            stars: 3,
            address: "Route de Sefrou, 30000 Fès, Morocco ",
            amenities: ["Indoor swimming pool", "Tea/coffee maker in all rooms", "Airport shuttle"],
            averagePriceFor2Persn: "742MAD",
            photos: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/493796035.jpg?k=e3b91c21a3d5d3baef3ff38a243874d11310981046998e9769f8c9073fbffe6a&o=&hp=1",
                     "https://cf.bstatic.com/xdata/images/hotel/max1024x768/493795972.jpg?k=f7153acacde7bad476a5e016cb452b56b2e70f484a39b48424c8794a214ee66a&o=&hp=1",
                     "https://cf.bstatic.com/images/hotel/max1024x768/480/480345464.jpg"]
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


