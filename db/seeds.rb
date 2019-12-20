# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all
Genre.destroy_all

demoUser = User.create!(email: "peter@parker.com", password: "uncleben")

# ---------------- GENRES ----------------

action = Genre.create!(name: "Action")
adventure = Genre.create!(name: "Adventure")
comedy = Genre.create!(name: "Comedy")
scifi = Genre.create!(name: "Sci-Fi")
animated = Genre.create!(name: "Animated")
marvel = Genre.create!(name: "Marvel")
dc = Genre.create!(name: "DC")

# ---------------- MOVIES ----------------

# Movie descriptions are from synopsises released online for each movie/show.

avengersEndgame = Video.create!(
   title: "Avengers: Endgame",
   description: "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, Avengers: Endgame.",
   video_type: "MOVIE",
   duration: 182,
   maturity_rating: "PG-13",
   year: 2019
)
avengersEndgame.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_endgame.mp4"), filename: "avengers_endgame.mp4")
avengersEndgame.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_endgame.jpg"), filename: "avengers_endgame.jpg")
avengersEndgame.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/endgame_logo.png"), filename: "endgame_logo.png")
avengersEndgame.genres += [marvel, action, adventure, scifi]


avengersInfinityWar = Video.create!(
  title: "Avengers: Infinity War",
  description: "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios' Avengers: Infinity War brings to the screen the ultimate, deadliest showdown of all time: Thanos vs. the Avengers.",
  year: 2018,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 156
)
avengersInfinityWar.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/iw_trailer.mp4"), filename: "iw_trailer.mp4")
avengersInfinityWar.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/iw_thumb.jpg"), filename: "iw_thumb.jpg")
avengersInfinityWar.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/InfWar_logo.png"), filename: "InfWar_logo.png")
avengersInfinityWar.genres += [marvel, action, adventure, scifi]

spidermanFarFromHome = Video.create!(
  title: "Spider-Man: Far From Home",
  description: "Peter Parker returns in Spider-Man: Far From Home, the next chapter of the Spider-Man: Homecoming series! Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent!",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 129
)
spidermanFarFromHome.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spidey_ffh_logo.png"), filename: "spidey_ffh_logo.png")
spidermanFarFromHome.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spidey_ffh_thumb.jpg"), filename: "spidey_ffh_thumb.jpg")
spidermanFarFromHome.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spidey_ffh_trailer.mp4"), filename: "spidey_ffh_trailer.mp4")
spidermanFarFromHome.genres += [marvel, action, adventure, comedy]

spidermanHomecoming = Video.create!(
  title: "Spider-Man: Homecoming",
  description: "After the events of Captain America: Civil War, Peter Parker balances life as a normal teen with normal friends and being the newest and youngest vigilante, Spider-Man. But against the commands of his mentor, Tony Stark, Peter must go under the radar and investigate the mysterious new supervillain, The Vulture.",
  year: 2016,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 133
)
spidermanHomecoming.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spidey_hc_trailer.mp4"), filename: "spidey_hc_trailer.mp4")
spidermanHomecoming.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spidey_hc_thumb.jpg"), filename: "spidey_hc_thumb.jpg")
spidermanHomecoming.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/smH_logo.png"), filename: "smH_logo.png")
spidermanHomecoming.genres += [marvel, action, comedy]

logan = Video.create!(
  title: "Logan",
  description: "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan’s attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
  year: 2017,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 137
)
logan.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/logan_trailer.mp4"), filename: "logan_trailer.mp4")
logan.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/logan_thumb.jpg"), filename: "logan_thumb.jpg")
logan.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/logan_logo.png"), filename: "logan_logo.png")
logan.genres += [marvel, action, adventure]

deadpool = Video.create!(
  title: "Deadpool",
  description: "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
  year: 2016,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 108
)
deadpool.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/deadpool_trailer.mp4"), filename: "deadpool_trailer.mp4")
deadpool.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/deadpool_thumb.jfif"), filename: "deadpool_thumb.jfif")
deadpool.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/deadpool_logo.png"), filename: "deadpool_logo.png")
deadpool.genres += [marvel, action, comedy]

deadpool2 = Video.create!(
  title: "Deadpool 2",
  description: "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming Mayberry’s hottest bartender while also learning to cope with his lost sense of taste.",
  year: 2017,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 121
)
deadpool2.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/dp2_trailer.mp4"), filename: "dp2_trailer.mp4")
deadpool2.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/dp2_thumb.jpg"), filename: "dp2_thumb.jpg")
deadpool2.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/dp2_logo.png"), filename: "dp2_logo.png")
deadpool2.genres += [marvel, action, comedy]

theDarkKnight = Video.create!(
  title: "The Dark Knight",
  description: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
  year: 2008,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 152
)
theDarkKnight.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tdk_trailer.mp4"), filename: "tdk_trailer.mp4")
theDarkKnight.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tdk_ws.jfif"), filename: "tdk_ws.jfif")
theDarkKnight.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tdk_logo.png"), filename: "tdk_logo.png")
theDarkKnight.genres += [dc, action, adventure]

theDarkKnightRises = Video.create!(
  title: "The Dark Knight Rises",
  description: "It has been eight years since Batman, in collusion with Commissioner Gordon, vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar and a merciless terrorist named Bane force Batman out of exile and into a battle he may not be able to win.",
  year: 2012,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 165
)
theDarkKnightRises.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tdkr_trailer.mp4"), filename: "tdkr_trailer.mp4")
theDarkKnightRises.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tdkr_ws.jfif"), filename: "tdkr_ws.jfif")
theDarkKnightRises.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tdkr_logo.png"), filename: "tdkr_logo.png")
theDarkKnightRises.genres += [dc, action, adventure]

thorRagnarok = Video.create!(
  title: "Thor: Ragnarok",
  description: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization.",
  year: 2017,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 130
)
thorRagnarok.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/ragnarok.mp4"), filename: "ragnarok.mp4")
thorRagnarok.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/thorRag_ws.jfif"), filename: "thorRag_ws.jfif")
thorRagnarok.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/thorRag_logo.png"), filename: "thorRag_logo.png")
thorRagnarok.genres += [marvel, adventure, scifi, comedy]

joker = Video.create!(
  title: "Joker",
  description: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
  year: 2019,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 122
)
joker.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/joker_ws.jfif"), filename: "joker_ws.jfif")
joker.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/JOKER+-+Final+Trailer+-+Now+Playing+In+Theaters.mp4"), filename: "JOKER - Final Trailer - Now Playing In Theaters.mp4")
joker.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/joker_logo.png"), filename: "joker_logo.png")
joker.genres += [dc, adventure]

captainAmericaCivilWar = Video.create!(
  title: "Captain America: Civil War",
  description: "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America believes superheroes should remain free to defend humanity without government interference. Iron Man sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow and Hawkeye must pick a side.",
  year: 2017,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 147
)
captainAmericaCivilWar.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/cw_trailer.mp4"), filename: "cw_trailer.mp4")
captainAmericaCivilWar.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/capCW_ws.jfif"), filename: "capCW_ws.jfif")
captainAmericaCivilWar.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/capCW_logo.png"), filename: "capCW_logo.png")
captainAmericaCivilWar.genres += [marvel, action, adventure]

captainAmericaWinterSoldier = Video.create!(
  title: "Captain America: The Winter Soldier",
  description: "After the cataclysmic events in New York with his fellow Avengers, Steve Rogers, aka Captain America, lives in the nation's capital as he tries to adjust to modern times. An attack on a S.H.I.E.L.D. colleague throws Rogers into a web of intrigue that places the whole world at risk. Joining forces with the Black Widow and a new ally, the Falcon, Rogers struggles to expose an ever-widening conspiracy, but he and his team soon come up against an unexpected enemy.",
  year: 2015,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 136
)
captainAmericaWinterSoldier.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/tws_trailer.mp4"), filename: "tws_trailer.mp4")
captainAmericaWinterSoldier.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/capTWS_ws.jfif"), filename: "capTWS_ws.jfif")
captainAmericaWinterSoldier.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/capTWS_logo.png"), filename: "capTWS_logo.png")
captainAmericaWinterSoldier.genres += [marvel, action]

marvelsDaredevil = Video.create!(
  title: "Marvel's Daredevil",
  description: "The first season of Daredevil follows the early days of Matt Murdock / Daredevil, a lawyer-by-day who fights crime at night, juxtaposed with the rise of crime lord Wilson Fisk.",
  year: 2015,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 50
)
marvelsDaredevil.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/dd_trailer.mp4"), filename: "dd_trailer.mp4")
marvelsDaredevil.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/dd_thumb.jpg"), filename: "dd_thumb.jpg")
marvelsDaredevil.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/dd_logo.png"), filename: "dd_logo.png")
marvelsDaredevil.genres += [marvel, action]

marvelsPunisher = Video.create!(
  title: "Marvel's Punisher",
  description: "The first season of the American web television series The Punisher, which is based on the Marvel Comics character of the same name, sees Frank Castle uncover a conspiracy while seeking revenge for the death of his family.",
  year: 2017,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 50
)
marvelsPunisher.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/punisher_trailer.mp4"), filename: "punisher_trailer.mp4")
marvelsPunisher.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/punisher_thumb.jpg"), filename: "punisher_thumb.jpg")
marvelsPunisher.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/punisher_logo.png"), filename: "punisher_logo.png")
marvelsPunisher.genres += [marvel, action]

watchmenMovie = Video.create!(
  title: "Watchmen",
  description: "In an alternate 1985 America, costumed superheroes are part of everyday life. When one of his former comrades is murdered, masked vigilante Rorschach uncovers a plot to kill and discredit all past and present superheroes. As he reconnects with his retired associates, only one of which has true powers, Rorschach glimpses a far-reaching conspiracy involving their shared past and catastrophic consequences for the world's future.",
  year: 2009,
  maturity_rating: "R",
  video_type: "MOVIE",
  duration: 163
)
watchmenMovie.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/watchmen_movie_trailer.mp4"), filename: "watchmen_movie_trailer.mp4")
watchmenMovie.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/watchmen_movie_thumb.jpg"), filename: "watchmen_movie_thumb.jpg")
watchmenMovie.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/watchmen_movie_logo.png"), filename: "watchmen_movie_logo.png")
watchmenMovie.genres += [dc, adventure, scifi]

watchmenShow = Video.create!(
  title: "Watchmen",
  description: "A ‘remix’ of the original source material that offers a fresh story and new characters, Watchmen, from executive producer Damon Lindelof, embraces the nostalgia of the groundbreaking graphic novel of the same name, while breaking new ground of its own.",
  year: 2019,
  maturity_rating: "TV-17",
  video_type: "SHOW",
  duration: 60
)
watchmenShow.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/watchmen_show_trailer.mp4"), filename: "watchmen_show_trailer.mp4")
watchmenShow.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/watchmenHBO_ws.jfif"), filename: "watchmenHBO_ws.jfif")
watchmenShow.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/watchmen_ws.png"), filename: "watchmen_ws.png")
watchmenShow.genres += [dc, adventure, scifi]

theBoys = Video.create!(
  title: "The Boys",
  description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers. The Boys is set in a universe where superpowered people are recognized as heroes by the general public and owned by powerful corporation Vought International, which ensures that they are aggressively marketed and monetized.",
  year: 2019,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 60
)
theBoys.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/the_boys_trailer.mp4"), filename: "the_boys_trailer.mp4")
theBoys.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/TheBoys_ws.jfif"), filename: "TheBoys_ws.jfif")
theBoys.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/the_boys_logo.png"), filename: "the_boys_logo.png")
theBoys.genres += [action]

guardiansOfTheGalaxy = Video.create!(
  title: "Guardians of the Galaxy",
  description: "Brash space adventurer Peter Quill finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
  year: 2016,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 121
)
guardiansOfTheGalaxy.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/gotg_trailer.mp4"), filename: "gotg_trailer.mp4")
guardiansOfTheGalaxy.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/gotg_thumb.jpg"), filename: "gotg_thumb.jpg")
guardiansOfTheGalaxy.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/gotg_logo.png"), filename: "gotg_logo.png")
guardiansOfTheGalaxy.genres += [marvel, comedy, adventure, scifi]

blackWidow = Video.create!(
  title: "Black Widow",
  description: "Set before the unfortunate events of Avengers: Endgame, international spy and assassin Natasha Romanoff becomes the superhero Black Widow.",
  year: 2020,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: -1
)
blackWidow.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/bw_trailer.mp4"), filename: "bw_trailer.mp4")
blackWidow.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/bw_thumbnail.jpg"), filename: "bw_thumbnail.jpg")
blackWidow.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/bw_logo.png"), filename: "bw_logo.png")
blackWidow.genres += [marvel, action]

wonderWoman1984 = Video.create!(
  title: "Wonder Woman: 1984",
  description: "Wonder Woman squares off against the Cheetah, a villainess who possesses superhuman strength and agility.",
  year: 2020,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: -1
)
wonderWoman1984.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/ww_trailer.mp4"), filename: "ww_trailer.mp4")
wonderWoman1984.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/ww_thumb.png"), filename: "ww_thumb.png")
wonderWoman1984.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/ww_logo.png"), filename: "ww_logo.png")
wonderWoman1984.genres += [dc, action, adventure, scifi]

flashpointParadox = Video.create!(
  title: "Justice League: The Flashpoint Paradox",
  description: "The Flash causes a temporal ripple that creates a fractured reality where the Justice league has never formed, Superman does not exist and a war rages between Wonder Woman and Aquaman. Flash teams with Batman and Cyborg to restore the timeline.",
  year: 2013,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 81
)
flashpointParadox.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/flashpoint_trailer.mp4"), filename: "flashpoint_trailer.mp4")
flashpointParadox.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/flashpoint_thumb.png"), filename: "flashpoint_thumb.png")
flashpointParadox.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/flashpoint_logo.png"), filename: "flashpoint_logo.png")
flashpointParadox.genres += [dc, adventure, animated]

intoTheSpiderverse = Video.create!(
  title: "Spider-Man: Into the Spiderverse",
  description: "Follow Peter Parker in another universe as he trains Miles Morales as the new Spider-Man and teams up with other Spider-Men from other universes to save theirs from The Kingpin.",
  year: 2018,
  maturity_rating: "PG",
  video_type: "MOVIE",
  duration: 116
)
intoTheSpiderverse.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spiderverse_trailer.mp4"), filename: "spiderverse_trailer.mp4")
intoTheSpiderverse.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spiderverse_thumb.jpg"), filename: "spiderverse_thumb.jpg")
intoTheSpiderverse.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/spiderVerse_logo.png"), filename: "spiderVerse_logo.png")
intoTheSpiderverse.genres += [marvel, adventure, animated]

marvelsAvengers = Video.create!(
  title: "Marvel's Avengers",
  description: "When Thor's evil brother, Loki, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's 'dream team' are Iron Man, Captain America, the Hulk, Thor, the Black Widow and Hawkeye.",
  year: 2012,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 143
)
marvelsAvengers.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_trailer.mp4"), filename: "avengers_trailer.mp4")
marvelsAvengers.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_thumb.jpg"), filename: "avengers_thumb.jpg")
marvelsAvengers.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/avengers_logo.png"), filename: "avengers_logo.png")
marvelsAvengers.genres += [marvel, action, adventure, scifi]

manOfSteel = Video.create!(
  title: "Man of Steel",
  description: "With the imminent destruction of Krypton, their home planet, Jor-El and his wife seek to preserve their race by sending their infant son to Earth. The child's spacecraft lands at the farm of Jonathan and Martha Kent, who name him Clark and raise him as their own son. Though his extraordinary abilities have led to the adult Clark living on the fringe of society, he finds he must become a hero to save those he loves from a dire threat.",
  year: 2013,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 143
)
manOfSteel.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/mos_trailer.mp4"), filename: "mos_trailer.mp4")
manOfSteel.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/mos_thumb.jpg"), filename: "mos_thumb.jpg")
manOfSteel.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/manOfSteel_logo.png"), filename: "manOfSteel_logo.png")
manOfSteel.genres += [dc, action, adventure, scifi]

marvelsJessicaJones = Video.create!(
  title: "Marvel's Jessica Jones",
  description: "In Season 1, former superhero Jessica Jones opens her own detective agency after her superhero career comes to an end. Initially hired to investigate the disappearance of an NYU student, Jones' investigation takes a dramatic turn when a mysterious figure named Kilgrave resurfaces, bringing Jones' past into light and putting her directly in harm's way.",
  year: 2015,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 50
)
marvelsJessicaJones.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/jj_trailer.mp4"), filename: "jj_trailer.mp4")
marvelsJessicaJones.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/jj_thumb.jpg"), filename: "jj_thumb.jpg")
marvelsJessicaJones.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/jj_logo.png"), filename: "jj_logo.png")
marvelsJessicaJones.genres += [marvel, action]

arrow = Video.create!(
  title: "Arrow",
  description: "The series follows billionaire playboy Oliver Queen (Stephen Amell), who claimed to have spent five years shipwrecked on Lian Yu, a mysterious island in the North China Sea, before returning home to Starling City (later renamed 'Star City') to fight crime and corruption as a secret vigilante whose weapon of choice is a bow and arrow.",
  year: 2012,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 45
)
arrow.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/arrow_trailer.mp4"), filename: "arrow_trailer.mp4")
arrow.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/arrow_ws.jfif"), filename: "arrow_ws.jfif")
arrow.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/arrow_logo.png"), filename: "arrow_logo.png")
arrow.genres += [dc, action]

theFlash = Video.create!(
  title: "The Flash",
  description: "With his life changed forever by the tragedy, Barry was taken in and raised by Detective Joe West, the father of Barry's best friend, Iris. When another meta-human attacks the city, it's time to put Barry's new powers, and himself, to the test.",
  year: 2015,
  maturity_rating: "TV-14",
  video_type: "SHOW",
  duration: 45
)
theFlash.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/flash_trailer.mp4"), filename: "flash_trailer.mp4")
theFlash.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/flash_ws.jfif"), filename: "flash_ws.jfif")
theFlash.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/flash_logo.jpg"), filename: "flash_logo.jpg")
theFlash.genres += [dc, action, comedy]

theIncredibles = Video.create!(
  title: "The Incredibles",
  description: "married superheroes Mr. Incredible and Elastigirl are forced to assume mundane lives as Bob and Helen Parr after all super-powered activities have been banned by the government. While Mr. Incredible loves his wife and kids, he longs to return to a life of adventure, and he gets a chance when summoned to an island to battle an out-of-control robot. Soon, Mr. Incredible is in trouble, and it's up to his family to save him.",
  year: 2004,
  maturity_rating: "PG",
  video_type: "MOVIE",
  duration: 115
)
theIncredibles.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/incredibles_1_trailer.mp4"), filename: "incredibles_1_trailer.mp4")
theIncredibles.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/incredibles_thumb.jpg"), filename: "incredibles_thumb.jpg")
theIncredibles.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/incredibles_logo.png"), filename: "incredibles_logo.png")
theIncredibles.genres += [animated, comedy]

theIncredibles2 = Video.create!(
  title: "The Incredibles 2",
  description: "Telecommunications guru Winston Deavor enlists Elastigirl to fight crime and make the public fall in love with superheroes once again. That leaves Mr. Incredible with one of his greatest challenges ever -- staying home and taking care of three rambunctious children. As Violet, Dash and Jack-Jack offer him a new set of headaches, a cybercriminal named Screenslaver launches his dastardly plan -- hypnotizing the world through computer screens.",
  year: 2018,
  maturity_rating: "PG",
  video_type: "MOVIE",
  duration: 118
)
theIncredibles2.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/incredibles_2_trailer.mp4"), filename: "incredibles_2_trailer.mp4")
theIncredibles2.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/incredibles_2_thumb.jpg"), filename: "incredibles_2_thumb.jpg")
theIncredibles2.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/incredibles_2_logo.jpg"), filename: "incredibles_2_logo.jpg")
theIncredibles2.genres += [animated, comedy]

shazam = Video.create!(
  title: "Shazam!",
  description: "We all have a superhero inside of us -- it just takes a bit of magic to bring it out. In 14-year-old Billy Batson's case, all he needs to do is shout out one word to transform into the adult superhero Shazam. Still a kid at heart, Shazam revels in the new version of himself by doing what any other teen would do -- have fun while testing out his newfound powers. But he'll need to master them quickly before the evil Dr. Thaddeus Sivana can get his hands on Shazam's magical abilities.",
  year: 2019,
  maturity_rating: "PG-13",
  video_type: "MOVIE",
  duration: 132
)
shazam.url.attach(io: open("https://superflix-seeds.s3.amazonaws.com/shazam_trailer.mp4"), filename: "shazam_trailer.mp4")
shazam.thumbnail.attach(io: open("https://superflix-seeds.s3.amazonaws.com/shazam_ws.jfif"), filename: "shazam_ws.jfif")
shazam.logo.attach(io: open("https://superflix-seeds.s3.amazonaws.com/shazam_logo.png"), filename: "shazam_logo.png")
shazam.genres += [dc, action, comedy]