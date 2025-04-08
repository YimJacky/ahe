const CITIES_DATA = {
    hongKong: {
        name: "Hong Kong",
        history: "Hong Kong, a former British colony, returned to Chinese sovereignty in 1997. Its unique history blends Eastern and Western influences, creating a dynamic metropolis.",
        culture: "Known for its vibrant food scene, traditional festivals, and bustling street markets, Hong Kong perfectly balances tradition with modernity.",
        attractions: [
            {
                name: "Ocean Park",
                description: "World-class marine theme park combining entertainment with education",
                location: "https://maps.google.com/?q=Ocean+Park+Hong+Kong",
                videoUrl: "https://www.youtube.com/embed/-zni_Xz2TfY"
            },
            {
                name: "Wong Tai Sin Temple",
                description: "Famous temple known for making every wish come true upon request",
                location: "https://maps.google.com/?q=Wong+Tai+Sin+Temple",
                videoUrl: "https://www.youtube.com/embed/LD1U3_CwJ4s"
            },
            {
                name: "Tian Tan Buddha",
                description: "Giant Buddha statue and Po Lin Monastery on Lantau Island",
                location: "https://maps.google.com/?q=Tian+Tan+Buddha",
                videoUrl: "https://www.youtube.com/embed/8bLmNtEjPYg"
            },
            {
                name: "Victoria Peak",
                description: "Highest point on Hong Kong Island offering spectacular city views",
                location: "https://maps.google.com/?q=Victoria+Peak+Hong+Kong",
                videoUrl: "https://www.youtube.com/embed/Z6L9P208Zok"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1576788369575-4ab045b9287e",
            "./styles/HongKong.jpg",
            "./styles/HongKong2.jpg",
            "https://images.unsplash.com/photo-1513326738677-b964603b136d",
        ]
    },
    paris: {
        name: "Paris",
        history: "Paris, the City of Light, has been a global center of art, fashion, gastronomy, and culture for centuries. Its architectural beauty and historical significance are unmatched.",
        culture: "Famous for its café culture, fashion houses, art museums, and culinary excellence, Paris embodies sophisticated European lifestyle.",
        attractions: [
            {
                name: "Eiffel Tower",
                description: "Iconic iron lattice tower and symbol of Paris",
                location: "https://maps.google.com/?q=Eiffel+Tower",
                videoUrl: "https://www.youtube.com/embed/5hqYrecv7Dc" 
            },
            {
                name: "Notre-Dame Cathedral",
                description: "Medieval Catholic cathedral known for its French Gothic architecture",
                location: "https://maps.google.com/?q=Notre+Dame+Cathedral+Paris",
                videoUrl: "https://www.youtube.com/embed/9N-e7PUIrxE"
            },
            {
                name: "The Louvre",
                description: "World's largest art museum and home to the Mona Lisa",
                location: "https://maps.google.com/?q=The+Louvre",
                videoUrl: "https://www.youtube.com/embed/bbn0JzthJDk"
            },
            {
                name: "Montmartre",
                description: "Historic art district with stunning Sacré-Cœur Basilica",
                location: "https://maps.google.com/?q=Montmartre+Paris",
                videoUrl: "https://www.youtube.com/embed/Q7NDWxaCrgA"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            "./styles/Paris-Image 4.webp",
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
            "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b",
        ]
    },
    tokyo: {
        name: "Tokyo",
        history: "Tokyo, Japan's bustling capital, combines ultramodern technology with traditional culture. From ancient temples to neon-lit districts, it showcases Japan's evolution.",
        culture: "A unique blend of cutting-edge technology and ancient traditions, Tokyo offers everything from peaceful gardens to bustling electronic districts.",
        attractions: [
            {
                name: "Ueno",
                description: "Cultural district famous for its parks and museums",
                location: "https://maps.google.com/?q=Ueno+Tokyo",
                videoUrl: "https://www.youtube.com/embed/9rQhWwiQ_no"
            },
            {
                name: "Shibuya",
                description: "Major commercial and business center known for its crossing",
                location: "https://maps.google.com/?q=Shibuya+Crossing",
                videoUrl: "https://www.youtube.com/embed/zzTupsvHxUU"
            },
            {
                name: "Lake Kawaguchi",
                description: "One of the Fuji Five Lakes with stunning Mt. Fuji views",
                location: "https://maps.google.com/?q=Lake+Kawaguchi",
                videoUrl: "https://www.youtube.com/embed/YApHaK7WjXs"
            },
            {
                name: "Sensō-ji Temple",
                description: "Ancient Buddhist temple in Asakusa",
                location: "https://maps.google.com/?q=Sensoji+Temple",
                videoUrl: "https://www.youtube.com/embed/XXBdPT91F5U"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
            "https://media.gettyimages.com/id/1198568167/zh/%E7%85%A7%E7%89%87/fuji-mountain-reflection-and-fireworks-in-winter-kawaguchiko-lake-japan.jpg?s=612x612&w=0&k=20&c=dGF3Vypx83yTKp3uFN0-fmYn_Ifxi6CqxVWSmPUVDSE=",
            "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3",
            "https://media.gettyimages.com/id/2149987663/zh/%E7%85%A7%E7%89%87/topshot-sumo-wrestlers-hold-children-during-their-crying-baby-sumo-match-at-sensoji-temple-in.jpg?s=612x612&w=0&k=20&c=3FKYCymm3yvQaIeirVCX4nLQT9NFn7U3qTtUj7trMmQ="
        ]
    },
    Rome: {
        name: "Rome",
        history: "Italy, particularly focusing on Rome, has been at the heart of history and culture for over two millennia. The country's rich heritage spans from ancient Roman times through the Renaissance.",
        culture: "Famous for its art, architecture, fashion, design, and culinary traditions, Italy represents the epitome of Mediterranean culture.",
        attractions: [
            {
                name: "Juliet's House",
                description: "Medieval house in Verona associated with Shakespeare's Romeo and Juliet",
                location: "https://maps.google.com/?q=Casa+di+Giulietta",
                videoUrl: "https://www.youtube.com/embed/QG1ETizQhYc"
            },
            {
                name: "Milan Cathedral",
                description: "Iconic Gothic cathedral in Milan's main square",
                location: "https://maps.google.com/?q=Milan+Cathedral",
                videoUrl: "https://www.youtube.com/embed/6QKDDNiQY8U"
            },
            {
                name: "Colosseum",
                description: "Ancient amphitheater in Rome, symbol of the Roman Empire",
                location: "https://maps.google.com/?q=Colosseum+Rome",
                videoUrl: "https://www.youtube.com/embed/8xLwjJGi28c"
            },
            {
                name: "Venice Canals",
                description: "Famous waterways of Venice with gondola rides",
                location: "https://maps.google.com/?q=Venice+Canals",
                videoUrl: "https://www.youtube.com/embed/kS20C5i5uKw"
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
            "https://media.gettyimages.com/id/1247356294/zh/%E7%85%A7%E7%89%87/italian-police-officers-riding-horses-patrol-in-front-of-the-duomo-di-milano-on-duomo-square-in.jpg?s=612x612&w=0&k=20&c=r1wBcc6-ycdwz-2Jczzu64Tf4js9ZEWXDskEzCSwCB4=",
            "https://media.gettyimages.com/id/541314696/zh/%E7%85%A7%E7%89%87/casa-di-giulietta-the-statue-of-juliet-and-the-famous-balcony-in-the-courtyard.jpg?s=612x612&w=0&k=20&c=o4eH6um1XVrzP-IU3qq7jF3eM8mICvQfU_m2IFlZxFk=",
            "./styles/Italy-Image4.webp"
            
        ]
    }
};