# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

demoUser = User.create!(email: "peter@parker.com", password: "uncleben")

# ---------------- GENRES ----------------

action = Genre.create!(name: "Action")
adventure = Genre.create!(name: "Adventure")
comedy = Genre.create!(name: "Comedy")
scifi = Genre.create!(name: "Sci-Fi")
animated = Genre.create!(name: "Animated")

# ---------------- MOVIES ----------------

# Movie descriptions are from synopsises released online for each movie/show.

avengersEndgame = Video.create!(
   title: "Avengers: Endgame",
   description: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, Avengers: Endgame.",
   video_type: "Movie",
   duration: 182,
   maturity_rating: "PG-13",
   year: 2019
)
# avengersEndgame.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_endgame.mp4"), filename: "avengers_endgame.mp4")
avengersEndgame.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_endgame.jpg"), filename: "avengers_endgame.jpg")
# avengersEndgame.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
avengersEndgame.genres += [action, adventure, scifi]


avengersInfinityWar = Video.create!(
  title: "Avengers: Infinity War",
  description: "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' Avengers: Infinity War brings to the screen the ultimate, deadliest showdown of all time: Thanos vs. the Avengers.",
  year: 2018,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
avengersInfinityWar.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
avengersInfinityWar.genres += [action, adventure, scifi]

spidermanFarFromHome = Video.create!(
  title: "Spider-Man: Far From Home",
  description: "Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
spidermanFarFromHome.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
spidermanFarFromHome.genres += [action, adventure, comedy]

spidermanHomecoming = Video.create!(
  title: "Spider-Man: Homecoming",
  description: "After the events of Captain America: Civil War, Peter Parker balances life as a normal teen with normal friends and being the newest and youngest vigilante, Spider-Man. But against the commands of his mentor, Tony Stark, Peter must go under the radar and investigate the mysterious new supervillain, The Vulture.",
  year: 2016,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
spidermanHomecoming.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
spidermanHomecoming.genres += [action, comedy]

logan = Video.create!(
  title: "Logan",
  description: "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan’s attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
  year: 2017,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 12
)
logan.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
logan.genres += [action, adventure]

deadpool = Video.create!(
  title: "Deadpool",
  description: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
  year: 2016,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 12
)
deadpool.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
deadpool.genres += [action, comedy, scifi]

deadpool2 = Video.create!(
  title: "Deadpool 2",
  description: "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry’s hottest bartender while also learning to cope with his lost sense of taste.",
  year: 2017,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
deadpool2.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
deadpool2.genres += [action, comedy, scifi]

theDarkKnight = Video.create!(
  title: "The Dark Knight,",
  description: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
theDarkKnight.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
theDarkKnight.genres += [action, adventure]

theDarkKnightRises = Video.create!(
  title: "The Dark Knight Rises",
  description: "It has been eight years since Batman, in collusion with Commissioner Gordon, vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar and a merciless terrorist named Bane force Batman out of exile and into a battle he may not be able to win.",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
theDarkKnightRises.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
theDarkKnightRises.genres += [action, adventure]

thorRagnarok = Video.create!(
  title: "Thor: Ragnarok",
  description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
  year: 2017,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
thorRagnarok.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
thorRagnarok.genres += [action, adventure, scifi, comedy]

joker = Video.create!(
  title: "Joker",
  description: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
  year: 2019,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 12
)
joker.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
joker.genres += [action]

captainAmericaCivilWar = Video.create!(
  title: "Captain America: Civil War",
  description: "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America believes superheroes should remain free to defend humanity without government interference. Iron Man sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow and Hawkeye must pick a side.",
  year: 2017,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
captainAmericaCivilWar.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
captainAmericaCivilWar.genres += [action, adventure, scifi]

captainAmericaWinterSoldier = Video.create!(
  title: "Captain America: The Winter Soldier",
  description: "After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America, lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.",
  year: 2015,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
captainAmericaWinterSoldier.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
captainAmericaWinterSoldier.genres += [action, adventure]

marvelsDaredevil = Video.create!(
  title: "Marvel's Daredevil",
  description: "The first season of Daredevil follows the early days of Matt Murdock / Daredevil, a lawyer-by-day who fights crime at night, juxtaposed with the rise of crime lord Wilson Fisk.",
  year: 2016,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 12
)
marvelsDaredevil.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
marvelsDaredevil.genres += [action]

marvelsPunisher = Video.create!(
  title: "Marvel's Punisher",
  description: "The first season of the American web television series The Punisher, which is based on the Marvel Comics character of the same name, sees Frank Castle uncover a conspiracy while seeking revenge for the death of his family.",
  year: 2017,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 12
)
marvelsPunisher.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
marvelsPunisher.genres += [action]

watchmenMovie = Video.create!(
  title: "Watchmen",
  description: "In an alternate 1985 America, costumed superheroes are part of everyday life. When one of his former comrades is murdered, masked vigilante Rorschach uncovers a plot to kill and discredit all past and present superheroes. As he reconnects with his retired associates, only one of which has true powers, Rorschach glimpses a far-reaching conspiracy involving their shared past and catastrophic consequences for the world's future.",
  year: 2019,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 12
)
watchmenMovie.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
watchmenMovie.genres += [action, adventure, scifi]

watchmenShow = Video.create!(
  title: "Watchmen",
  description: "A ‘remix’ of the original source material that offers a fresh story and new characters, Watchmen, from executive producer Damon Lindelof, embraces the nostalgia of the groundbreaking graphic novel of the same name, while breaking new ground of its own.",
  year: 2019,
  maturity_rating: "TV-17",
  video_type: "SHOW",
  duration: 12
)
watchmenShow.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
watchmenShow.genres += [action, scifi]

theBoys = Video.create!(
  title: "The Boys",
  description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers. The Boys is set in a universe where superpowered people are recognized as heroes by the general public and owned by powerful corporation Vought International, which ensures that they are aggressively marketed and monetized.",
  year: 2019,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 12
)
theBoys.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
theBoys.genres += [action]

guardiansOfTheGalaxy = Video.create!(
  title: "Guardians of the Galaxy",
  description: "Brash space adventurer Peter Quill finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
  year: 2016,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
guardiansOfTheGalaxy.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
guardiansOfTheGalaxy.genres += [action, adventure, scifi]

blackWidow = Video.create!(
  title: "Black Widow",
  description: "Set before the unfortunate events of Avengers: Endgame, international spy and assassin Natasha Romanoff becomes the superhero Black Widow.",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
blackWidow.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
blackWidow.genres += [action]

wonderWoman1984 = Video.create!(
  title: "Wonder Woman: 1984",
  description: "Wonder Woman squares off against the Cheetah, a villainess who possesses superhuman strength and agility.",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
wonderWoman1984.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
wonderWoman1984.genres += [action, adventure, scifi]

flashpointParadox = Video.create!(
  title: "Justice League: The Flashpoint Paradox",
  description: "The Flash causes a temporal ripple that creates a fractured reality where the Justice league has never formed, Superman does not exist and a war rages between Wonder Woman and Aquaman. Flash teams with Batman and Cyborg to restore the timeline.",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
flashpointParadox.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
flashpointParadox.genres += [action, adventure, animated]

intoTheSpiderverse = Video.create!(
  title: "Spider-Man: Into the Spiderverse",
  description: "Follow Peter Parker in another universe as he trains Miles Morales as the new Spider-Man and teams up with other Spider-Men from other universes to save theirs from The Kingpin.",
  year: 2018,
  maturity_rating: "PG",
  video_type: "MOVIE",
  duration: 12
)
intoTheSpiderverse.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
intoTheSpiderverse.genres += [action, adventure, animated]

marvelsAvengers = Video.create!(
  title: "Marvel's Avengers",
  description: "When Thor's evil brother, Loki, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's 'dream team' are Iron Man, Captain America, the Hulk, Thor, the Black Widow and Hawkeye.",
  year: 2012,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
marvelsAvengers.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
marvelsAvengers.genres += [action, adventure, scifi]

manOfSteel = Video.create!(
  title: "Man of Steel",
  description: "With the imminent destruction of Krypton, their home planet, Jor-El and his wife seek to preserve their race by sending their infant son to Earth. The child's spacecraft lands at the farm of Jonathan and Martha Kent, who name him Clark and raise him as their own son. Though his extraordinary abilities have led to the adult Clark living on the fringe of society, he finds he must become a hero to save those he loves from a dire threat.",
  year: 2015,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 12
)
manOfSteel.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
manOfSteel.genres += [action, adventure, scifi]

marvelsJessicaJones = Video.create!(
  title: "Marvel's Jessica Jones",
  description: "In Season 1, former superhero Jessica Jones opens her own detective agency after her superhero career comes to an end. Initially hired to investigate the disappearance of an NYU student, Jones' investigation takes a dramatic turn when a mysterious figure named Kilgrave resurfaces, bringing Jones' past into light and putting her directly in harm's way.",
  year: 2017,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 12
)
marvelsJessicaJones.thumbnail.attach(io: File.open('app/assets/images/demo_thumbnail.jpg'), filename: "demo_thumbnail.jpg")
marvelsJessicaJones.genres += [action]