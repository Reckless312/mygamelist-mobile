const games: Game[] = [
    {
        id: 1,
        name: "Persona 3",
        description: "Dive into the Dark Hour and awaken the depths of your heart. Persona 3 Reload is a captivating reimagining of the genre-defining RPG, reborn for the modern era with cutting-edge graphics and gameplay.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg?t=1741697885",
        release_date: "2024-02-02",
        price: 70
    },
    {
        id: 2,
        name: "Persona 4",
        description: "A coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1113000/header.jpg?t=1704380046",
        release_date: "2020-06-13",
        price: 20
    },
    {
        id: 3,
        name: "Persona 5",
        description: "Don the mask and join the Phantom Thieves of Hearts as they stage grand heists, infiltrate the minds of the corrupt, and make them change their ways!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg?t=1733297467",
        release_date: "2022-10-21",
        price: 60
    },
    {
        id: 4,
        name: "Metaphor: ReFantazio",
        description: "The throne sits empty after the king's assassination. With no heirs, the will of the late king decrees that the next monarch will be elected by the people, and thus begins your fight for the throne.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2679460/header.jpg?t=1741600226",
        release_date: "2024-10-11",
        price: 70
    },
    {
        id: 5,
        name: "Counter-Strike",
        description: "Play the world's number 1 online action game. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your team's success. Your team's success affects...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/10/header.jpg?t=1729702322",
        release_date: "2020-11-01",
        price: 8
    },
    {
        id: 6,
        name: "Counter-Strike 2",
        description: "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1729703045",
        release_date: "2012-08-21",
        price: 0
    },
    {
        id: 7,
        name: "Dead by Daylight",
        description: "Trapped forever in a realm of eldritch evil where even death is not an escape, four determined Survivors face a bloodthirsty Killer in a vicious game of nerve and wits. Pick a side and step into a world of tension and terror with horror gaming's best asymmetrical multiplayer.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1738165502",
        release_date: "2016-06-14",
        price: 20
    },
    {
        id: 8,
        name: "Red Dead Redemption",
        description: "Experience the story of former outlaw John Marston as he tracks down the last remaining members of the notorious Van der Linde Gang in the PC debut of the critically acclaimed predecessor to Red Dead Redemption 2.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2668510/header.jpg?t=1741118459",
        release_date: "2024-10-29",
        price: 40
    },
    {
        id: 9,
        name: "Red Dead Redemption 2",
        description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg?t=1720558643",
        release_date: "2019-12-05",
        price: 60
    },
    {
        id: 10,
        name: "Dying Light",
        description: "First-person action survival game set in a post-apocalyptic open world overrun by flesh-hungry zombies. Roam a city devastated by a mysterious virus epidemic. Scavenge for supplies, craft weapons, and face hordes of the infected.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/239140/header.jpg?t=1738004178",
        release_date: "2015-01-26",
        price: 20
    },
    {
        id: 11,
        name: "The Elder Scrolls V: Skyrim Special Edition",
        description: "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg?t=1721923149",
        release_date: "2016-10-28",
        price: 40
    },
    {
        id: 12,
        name: "Rocket League®",
        description: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/252950/d56cf9d01073d893677fb9e7e257b79fd7939ee3/header.jpg?t=1741975345",
        release_date: "2015-07-07",
        price: 20
    },
    {
        id: 13,
        name: "Among Us",
        description: "An online and local party game of teamwork and betrayal for 4-15 players...in space!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/945360/header.jpg?t=1731953093",
        release_date: "2018-11-16",
        price: 5
    },
    {
        id: 14,
        name: "Just Cause™ 3",
        description: "With over 1000 km² of complete freedom from sky to seabed, Rico Rodriguez returns to unleash chaos in the most creative and explosive ways imaginable.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/225540/header.jpg?t=1728396027",
        release_date: "2015-12-01",
        price: 3
    },
    {
        id: 15,
        name: "DARK SOULS™: REMASTERED",
        description: "Then, there was fire. Re-experience the critically acclaimed, genre-defining game that started it all. Beautifully remastered, return to Lordran in stunning high-definition detail running at 60fps.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570940/header.jpg?t=1726158603",
        release_date: "2018-05-24",
        price: 40
    },
    {
        id: 16,
        name: "DARK SOULS™ II",
        description: "Developed by FROM SOFTWARE, DARK SOULS™ II is the highly anticipated sequel to the gruelling 2011 breakout hit Dark Souls. The unique old-school action RPG experience captivated imaginations of gamers worldwide with incredible challenge and intense emotional reward.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/236430/header.jpg?t=1726158600",
        release_date: "2014-04-25",
        price: 20
    },
    {
        id: 17,
        name: "DARK SOULS™ III",
        description: "Dark Souls continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. Prepare yourself and Embrace The Darkness!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg?t=1733509027",
        release_date: "2016-04-11",
        price: 60
    },
    {
        id: 18,
        name: "Sekiro™: Shadows Die Twice - GOTY Edition",
        description: "Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg?t=1726158438",
        release_date: "2019-03-21",
        price: 60
    },
    {
        id: 19,
        name: "ELDEN RING",
        description: "THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1739922037",
        release_date: "2022-02-25",
        price: 60
    },
    {
        id: 20,
        name: "ELDEN RING NIGHTREIGN",
        description: "ELDEN RING NIGHTREIGN is a standalone adventure within the ELDEN RING universe, crafted to offer players a new gaming experience by reimagining the game's core design.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2622380/header.jpg?t=1742521322",
        release_date: "2025-05-30",
        price: 40
    },
    {
        id: 21,
        name: "God of War",
        description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1729030762",
        release_date: "2022-01-14",
        price: 50
    },
    {
        id: 22,
        name: "God of War Ragnarök",
        description: "Kratos and Atreus embark on a mythic journey for answers before Ragnarök arrives – now on PC.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1738256985",
        release_date: "2024-09-19",
        price: 60
    },
    {
        id: 23,
        name: "Fallout 3: Game of the Year Edition",
        description: "Prepare for the Future With Fallout 3: Game of the Year Edition, experience the most acclaimed game of 2008 like never before. Create a character of your choosing and descend into an awe-inspiring, post-apocalyptic world where every minute is a fight for survival.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/22370/header.jpg?t=1732208097",
        release_date: "2009-10-13",
        price: 20
    },
    {
        id: 24,
        name: "Fallout 4",
        description: "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg?t=1726758475",
        release_date: "2015-11-10",
        price: 20
    },
    {
        id: 25,
        name: "Marvel's Spider-Man Remastered",
        description: "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel's New York.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg?t=1725652915",
        release_date: "2022-08-12",
        price: 60
    },
    {
        id: 26,
        name: "Marvel's Spider-Man: Miles Morales",
        description: "After the events of Marvel's Spider-Man Remastered, teenage Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. When a fierce power struggle threatens to destroy his home, Miles must take up the mantle of Spider-Man and own it.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1817190/header.jpg?t=1737599097",
        release_date: "2022-11-18",
        price: 50
    },
    {
        id: 27,
        name: "Marvel's Spider-Man 2",
        description: "Be Greater. Together. The incredible power of the symbiote forces Peter Parker and Miles Morales into a desperate fight as they balance their lives, friendships, and their duty to protect in an exciting chapter of the critically acclaimed Spider-Man franchise on PC.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2651280/header.jpg?t=1738343995",
        release_date: "2025-01-30",
        price: 60
    },
    {
        id: 28,
        name: "Stardew Valley",
        description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1711128146",
        release_date: "2016-02-26",
        price: 14
    },
    {
        id: 29,
        name: "The Witcher: Enhanced Edition Director's Cut",
        description: "Become The Witcher, Geralt of Rivia, a legendary monster slayer caught in a web of intrigue woven by forces vying for control of the world. Make difficult decisions and live with the consequences in a game that will immerse you in an extraordinary tale like no other.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/20900/header.jpg?t=1729242001",
        release_date: "2008-09-16",
        price: 2
    },
    {
        id: 30,
        name: "The Witcher 2: Assassins of Kings Enhanced Edition",
        description: "A time of untold chaos has come. Mighty forces clash behind the scenes in a struggle for power and influence. The Northern Kingdoms mobilize for war. But armies on the march are not enough to stop a bloody conspiracy...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/20920/header.jpg?t=1729586898",
        release_date: "2011-05-17",
        price: 3
    },
    {
        id: 31,
        name: "The Witcher 3: Wild Hunt",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1736424367",
        release_date: "2015-05-18",
        price: 6
    },
    {
        id: 32,
        name: "Portal",
        description: "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/400/header.jpg?t=1738796058",
        release_date: "2007-10-10",
        price: 7
    },
    {
        id: 33,
        name: "Portal 2",
        description: "The \"Perpetual Testing Initiative\" has been expanded to allow you to design co-op puzzles for you and your friends!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/header.jpg?t=1725487730",
        release_date: "2011-04-19",
        price: 10
    },
    {
        id: 34,
        name: "Left 4 Dead",
        description: "From Valve (the creators of Counter-Strike, Half-Life and more) comes Left 4 Dead, a co-op action horror game for the PC and Xbox 360 that casts up to four players in an epic struggle for survival against swarming zombie hordes and terrifying mutant monsters.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/500/header.jpg?t=1738796049",
        release_date: "2008-11-17",
        price: 10
    },
    {
        id: 35,
        name: "Left 4 Dead 2",
        description: "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/550/header.jpg?t=1731457037",
        release_date: "2009-11-17",
        price: 10
    },
    {
        id: 36,
        name: "Five Nights at Freddy's",
        description: "Welcome to your new summer job at Freddy Fazbear's Pizza, where kids and parents alike come for entertainment and food! The main attraction is Freddy Fazbear, of course; and his two friends. They are animatronic robots, programmed to please the crowds!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/319510/header.jpg?t=1666889251",
        release_date: "2014-08-18",
        price: 4
    },
    {
        id: 37,
        name: "Five Nights at Freddy's 2",
        description: "Welcome back to the new and improved Freddy Fazbear's Pizza! As always, Fazbear Entertainment is not responsible for death or dismemberment.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/332800/header.jpg?t=1579635993",
        release_date: "2014-11-11",
        price: 8
    },
    {
        id: 38,
        name: "Five Nights at Freddy's 3",
        description: "Thirty years after Freddy Fazbear's Pizza closed it's doors, the events that took place there have become nothing more than a rumor and a childhood memory, but the owners of \"Fazbear's Fright: The Horror Attraction\" are determined to revive the legend and make the experience as authentic as possible.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/354140/header.jpg?t=1579635991",
        release_date: "2015-03-03",
        price: 8
    },
    {
        id: 39,
        name: "Five Nights at Freddy's 4",
        description: "In this last chapter of the Five Nights at Freddy's original story, you must once again defend yourself against Freddy Fazbear, Chica, Bonnie, Foxy, and even worse things that lurk in the shadows.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/388090/header.jpg?t=1579635988",
        release_date: "2015-07-24",
        price: 8
    },
    {
        id: 40,
        name: "Five Nights at Freddy's: Sister Location",
        description: "Welcome to Circus Baby's Pizza World, where family fun and interactivity go beyond anything you've seen at those *other* pizza places! Now hiring: Late night technician. Must enjoy cramped spaces and be comfortable around active machinery. Not responsible for death or dismemberment.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/506610/header.jpg?t=1579635985",
        release_date: "2016-10-07",
        price: 8
    },
    {
        id: 41,
        name: "METAL GEAR RISING: REVENGEANCE",
        description: "Developed by Kojima Productions and PlatinumGames, METAL GEAR RISING: REVENGEANCE takes the renowned METAL GEAR franchise into exciting new territory with an all-new action experience. The game seamlessly melds pure action and epic story-telling that surrounds Raiden...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/235460/header.jpg?t=1740076034",
        release_date: "2014-01-09",
        price: 20
    },
    {
        id: 42,
        name: "Bully: Scholarship Edition",
        description: "Bully tells the story of mischievous 15-year-old Jimmy Hopkins as he goes through the hilarity and awkwardness of adolescence. Beat the jocks at dodge ball, play pranks on the preppies, save the nerds, kiss the girl and navigate the social hierarchy in the worst school around.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/12200/header.jpg?t=1741118085",
        release_date: "2008-10-21",
        price: 4
    },
    {
        id: 43,
        name: "Outlast",
        description: "Hell is an experiment you can't survive in Outlast, a first-person survival horror game developed by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you ...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/238320/header.jpg?t=1666817106",
        release_date: "2013-09-04",
        price: 20
    },
    {
        id: 44,
        name: "Outlast 2",
        description: "Outlast 2 introduces you to Sullivan Knoth and his followers, who left our wicked world behind to give birth to Temple Gate, a town, deep in the wilderness and hidden from civilization. Knoth and his flock are preparing for the tribulations of the end of times and you're right in the thick of it.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/414700/header.jpg?t=1618944453",
        release_date: "2017-04-25",
        price: 23
    },
    {
        id: 45,
        name: "The Forest",
        description: "As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/242760/header.jpg?t=1699381053",
        release_date: "2018-04-30",
        price: 17
    },
    {
        id: 46,
        name: "Sons Of The Forest",
        description: "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1326470/header.jpg?t=1708624856",
        release_date: "2024-02-22",
        price: 29
    },
    {
        id: 47,
        name: "Half-Life",
        description: "Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies ...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/70/header.jpg?t=1738795025",
        release_date: "1998-11-19",
        price: 8
    },
    {
        id: 48,
        name: "Half-Life 2",
        description: "Reawakened from stasis in the occupied metropolis of City 17, Gordon Freeman is joined by Alyx Vance as he leads a desperate human resistance. Experience the landmark first-person shooter packed with immersive world-building, boundary-pushing physics, and exhilarating combat.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/header.jpg?t=1737139959",
        release_date: "2004-11-16",
        price: 10
    },
    {
        id: 49,
        name: "Dishonored",
        description: "Dishonored is an immersive first-person action game that casts you as a supernatural assassin driven by revenge. With Dishonored's flexible combat system, creatively eliminate your targets as you combine the supernatural abilities, weapons and unusual gadgets at your disposal.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/205100/header.jpg?t=1726757539",
        release_date: "2012-10-12",
        price: 10
    },
    {
        id: 50,
        name: "Dishonored 2",
        description: "Reprise your role as a supernatural assassin in Dishonored 2. Declared a \"masterpiece\" by Eurogamer and hailed \"a must-play revenge tale\" by Game Informer, Dishonored 2 is the follow up to Arkane's 1st-person action blockbuster and winner of 100+ 'Game of the Year' awards, Dishonored.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/403640/header.jpg?t=1726161101",
        release_date: "2016-11-11",
        price: 30
    },
    {
        id: 51,
        name: "Papers, Please",
        description: "Congratulations. The October labor lottery is complete. Your name was pulled. For immediate placement, report to the Ministry of Admission at Grestin Border Checkpoint. An apartment will be provided for you and your family in East Grestin. Expect a Class-8 dwelling.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/239030/header.jpg?t=1678266428",
        release_date: "2013-08-08",
        price: 10
    },
    {
        id: 52,
        name: "Okami HD",
        description: "Experience the critically acclaimed masterpiece with its renowned Sumi-e ink art style in breathtaking high resolution.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/587620/header.jpg?t=1733787035",
        release_date: "2017-12-12",
        price: 10
    },
    {
        id: 53,
        name: "Hollow Knight",
        description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428",
        release_date: "2017-02-24",
        price: 15
    },
    {
        id: 54,
        name: "Subnautica",
        description: "Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/264710/header.jpg?t=1729208919",
        release_date: "2018-01-23",
        price: 30
    },
    {
        id: 55,
        name: "Cyberpunk 2077",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg?t=1734434803",
        release_date: "2020-12-10",
        price: 24
    },
    {
        id: 56,
        name: "FINAL FANTASY VII REMAKE INTERGRADE",
        description: "Cloud Strife, an ex-SOLDIER operative, descends on the mako-powered city of Midgar. The world of the timeless classic FINAL FANTASY VII is reborn, using cutting-edge graphics technology, a new battle system and an additional adventure featuring Yuffie Kisaragi.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg?t=1737643021",
        release_date: "2022-06-17",
        price: 40
    },
    {
        id: 57,
        name: "FINAL FANTASY VII REBIRTH",
        description: "The Unknown Journey Continues... After escaping from the dystopian city of Midgar, Cloud and his friends set out on a journey across the planet. New adventures await in a vibrant and vast world in this standalone entry to the FFVII remake trilogy!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2909400/header.jpg?t=1740049902",
        release_date: "2025-01-23",
        price: 48
    },
    {
        id: 58,
        name: "Resident Evil 2",
        description: "A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you. Witness the return of Resident Evil 2.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg?t=1728438541",
        release_date: "2019-01-25",
        price: 10
    },
    {
        id: 59,
        name: "Resident Evil 3",
        description: "Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis! Also includes Resident Evil Resistance, a new 1 vs 4 online multiplayer game set in the Resident Evil universe.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/952060/header.jpg?t=1728438347",
        release_date: "2020-04-03",
        price: 10
    },
    {
        id: 60,
        name: "Resident Evil 4",
        description: "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1736385712",
        release_date: "2023-03-24",
        price: 20
    },
    {
        id: 61,
        name: "Resident Evil 7 Biohazard",
        description: "Fear and isolation seep through the walls of an abandoned southern farmhouse. \"7\" marks a new beginning for survival horror with the \"Isolated View\" of the visceral new first-person perspective.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/418370/header.jpg?t=1728436752",
        release_date: "2017-01-24",
        price: 8
    },
    {
        id: 62,
        name: "Resident Evil Village",
        description: "Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg?t=1741142800",
        release_date: "2021-05-07",
        price: 16
    },
    {
        id: 63,
        name: "Phasmophobia",
        description: "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it's up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/739630/header.jpg?t=1740090955",
        release_date: "2020-09-18",
        price: 20
    },
    {
        id: 64,
        name: "Black Myth: Wukong",
        description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology. You shall set out as the Destined One to venture into the challenges and marvels ahead, to uncover the obscured truth beneath the veil of a glorious legend from the past.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1742561528",
        release_date: "2024-08-20",
        price: 60
    },
    {
        id: 65,
        name: "Grand Theft Auto: San Andreas – The Definitive Edition",
        description: "Grand Theft Auto: San Andreas: It's the early '90s. After a couple of cops frame him for homicide, Carl 'CJ' Johnson is forced on a journey that takes him across the entire state of San Andreas, to save his family and to take control of the streets.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1547000/header.jpg?t=1741117455",
        release_date: "2023-01-19",
        price: 24
    },
    {
        id: 66,
        name: "Grand Theft Auto III – The Definitive Edition",
        description: "It all starts in Liberty City. With revolutionary freedom to go anywhere and jack anyone, Grand Theft Auto III puts the center of the criminal underworld at your fingertips, if you have enough guts to take it.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1546970/header.jpg?t=1741117830",
        release_date: "2023-01-19",
        price: 24
    },
    {
        id: 67,
        name: "Grand Theft Auto: Vice City – The Definitive Edition",
        description: "Welcome to the 1980s. From the decade of big hair and pastel suits comes the story of one man's rise to the top of the criminal pile. Grand Theft Auto returns with Tommy Vercetti's tale of betrayal and revenge in a neon-soaked tropical town full of excess and brimming with possibilities.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1546990/header.jpg?t=1741117543",
        release_date: "2023-01-19",
        price: 24
    },
    {
        id: 68,
        name: "Grand Theft Auto IV: The Complete Edition",
        description: "Niko Bellic, Johnny Klebitz and Luis Lopez all have one thing in common - they live in the worst city in America. Liberty City worships money and status, and is heaven for those who have them and a living nightmare for those who don't.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/12210/header.jpg?t=1721061564",
        release_date: "2020-03-24",
        price: 7
    },
    {
        id: 69,
        name: "Grand Theft Auto V Enhanced",
        description: "Experience entertainment blockbusters Grand Theft Auto V and Grand Theft Auto Online — now upgraded for a new generation with stunning visuals, faster loading, 3D audio, and more, plus exclusive content for GTA Online players.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1741381848",
        release_date: "2025-03-04",
        price: 30
    },
    {
        id: 70,
        name: "DEATH STRANDING DIRECTOR'S CUT",
        description: "From legendary game creator Hideo Kojima comes a genre-defying experience, now expanded in this definitive DIRECTOR'S CUT. As Sam Bridges, your mission is to deliver hope to humanity by connecting the last survivors of a decimated America. Can you reunite the shattered world, one step at a time?",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1850570/header.jpg?t=1728989088",
        release_date: "2022-03-30",
        price: 20
    },
    {
        id: 71,
        name: "A Way Out",
        description: "A Way Out is an exclusively co-op adventure where you play the role of one of two prisoners making their daring escape from prison.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222700/header.jpg?t=1730912036",
        release_date: "2018-03-23",
        price: 5
    },
    {
        id: 72,
        name: "It Takes Two",
        description: "Embark on the craziest journey of your life in It Takes Two. Invite a friend to join for free with Friend's Pass and work together across a huge variety of gleefully disruptive gameplay challenges. Winner of GAME OF THE YEAR at the Game Awards 2021.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1730911936",
        release_date: "2021-03-26",
        price: 12
    },
    {
        id: 73,
        name: "Split Fiction",
        description: "Embrace mind-blowing moments as you're pulled deep into the many worlds of Split Fiction, a boundary-pushing co-op adventure.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2001120/header.jpg?t=1742494049",
        release_date: "2025-03-06",
        price: 40
    },
    {
        id: 74,
        name: "Lethal Company",
        description: "A co-op horror about scavenging at abandoned moons to sell scrap to the Company.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1966720/header.jpg?t=1723894859",
        release_date: "2023-10-24",
        price: 10
    },
    {
        id: 75,
        name: "Ghost of Tsushima DIRECTOR'S CUT",
        description: "A storm is coming. Venture into the complete Ghost of Tsushima DIRECTOR'S CUT on PC; forge your own path through this open-world action adventure and uncover its hidden wonders. Brought to you by Sucker Punch Productions, Nixxes Software and PlayStation Studios.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1737495883",
        release_date: "2024-05-16",
        price: 60
    },
    {
        id: 76,
        name: "The Binding of Isaac: Rebirth",
        description: "The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. Following Isaac on his journey players will find bizarre treasures that change Isaac's form giving him super human abilities and enabling him to fight off droves of mysterious creatures, discover secrets ...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/250900/header.jpg?t=1731977365",
        release_date: "2014-11-04",
        price: 15
    },
    {
        id: 77,
        name: "MiSide",
        description: "Let's imagine that you have a game in which you care for a character. But could you imagine one day getting into that game yourself?",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2527500/header.jpg?t=1740650632",
        release_date: "2024-12-11",
        price: 13
    },
    {
        id: 78,
        name: "STAR WARS Jedi: Fallen Order™",
        description: "A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172380/header.jpg?t=1725901454",
        release_date: "2019-11-15",
        price: 4
    },
    {
        id: 79,
        name: "The Last of Us™ Part I",
        description: "Discover the award-winning game that inspired the critically acclaimed television show. Guide Joel and Ellie through a post-apocalyptic America, and encounter unforgettable allies and enemies in The Last of Us™.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1741209545",
        release_date: "2023-03-28",
        price: 60
    },
    {
        id: 80,
        name: "The Last of Us™ Part II Remastered",
        description: "Experience the winner of over 300 Game of the Year awards, now on PC. Discover Ellie and Abby's story with graphical enhancements, gameplay modes like the roguelike survival experience No Return, and more.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1742580411",
        release_date: "2025-04-03",
        price: 50
    },
    {
        id: 81,
        name: "DOOM",
        description: "Now includes all three premium DLC packs (Unto the Evil, Hell Followed, and Bloodfall), maps, modes, and weapons, as well as all feature updates including Arcade Mode, Photo Mode, and the latest Update 6.66, which brings further multiplayer improvements as well as revamps multiplayer progression.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg?t=1692892793",
        release_date: "2016-05-13",
        price: 20
    },
    {
        id: 82,
        name: "DOOM Eternal",
        description: "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg?t=1702308063",
        release_date: "2020-03-20",
        price: 40
    },
    {
        id: 83,
        name: "DOOM: The Dark Ages",
        description: "DOOM: The Dark Ages is the prequel to the critically acclaimed DOOM (2016) and DOOM Eternal that tells an epic cinematic story of the DOOM Slayer's rage. Players will step into the blood-stained boots of the DOOM Slayer, in this never-before-seen dark and sinister medieval war against Hell.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/3017860/header.jpg?t=1740674745",
        release_date: "2025-05-15",
        price: 80
    },
    {
        id: 84,
        name: "Cuphead",
        description: "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/268910/header.jpg?t=1709068852",
        release_date: "2017-09-29",
        price: 20
    },
    {
        id: 85,
        name: "Undertale",
        description: "UNDERTALE! The RPG game where you don't have to destroy anyone.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/391540/header.jpg?t=1579096091",
        release_date: "2015-09-15",
        price: 10
    },
    {
        id: 86,
        name: "SILENT HILL 2",
        description: "Investigating a letter from his late wife, James returns to where they made so many memories - Silent Hill. What he finds is a ghost town, prowled by disturbing monsters and cloaked in deep fog. Confront the monsters, solve puzzles, and search for traces of your wife in this remake of SILENT HILL 2.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg?t=1737565204",
        release_date: "2024-10-08",
        price: 70
    },
    {
        id: 87,
        name: "Until Dawn™",
        description: "Rebuilt and enhanced for PC – Until Dawn invites you to relive the nightmare, and immerse yourself in a gripping slasher horror where every decision can make the difference between life and death.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2172010/header.jpg?t=1737496446",
        release_date: "2024-10-04",
        price: 70
    },
    {
        id: 88,
        name: "Ghostrunner",
        description: "Ghostrunner offers a unique single-player experience: fast-paced, violent combat, and an original setting that blends science fiction with post-apocalyptic themes. It tells the story of a world that has already ended and its inhabitants who fight to survive.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1139900/header.jpg?t=1727712844",
        release_date: "2020-10-27",
        price: 8
    },
    {
        id: 89,
        name: "60 Seconds! Reatomized",
        description: "The post-apocalyptic dark comedy is back - remastered and even more radioactive than before! Scavenge supplies, rescue your family, and stay alive in your fallout shelter. Make difficult decisions, hunt mutant roaches... and maybe survive. Or not.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1012880/header.jpg?t=1737718090",
        release_date: "2019-07-25",
        price: 10
    },
    {
        id: 90,
        name: "Beyond: Two Souls",
        description: "A unique psychological action thriller delivered by A-list Hollywood performances by Elliot Page and Willem Dafoe, Beyond: Two Souls takes you on a thrilling journey across the globe as you play out the remarkable life of Jodie Holmes.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/960990/header.jpg?t=1667468566",
        release_date: "2020-06-18",
        price: 20
    },
    {
        id: 91,
        name: "Heavy Rain",
        description: "Experience a gripping psychological thriller filled with innumerable twists and turns. The hunt is on for a murderer known only as the Origami Killer. Four characters, each following their own leads, must take part in a desperate attempt to prevent the killer from claiming a new victim.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/960910/header.jpg?t=1675271942",
        release_date: "2020-06-18",
        price: 20
    },
    {
        id: 92,
        name: "Detroit: Become Human",
        description: "Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans. Every choice you make affects the outcome of the game, with one of the most intricately branching narratives ever created.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1222140/header.jpg?t=1667468479",
        release_date: "2020-06-18",
        price: 40
    },
    {
        id: 93,
        name: "Murdered: Soul Suspect",
        description: "MURDERED: SOUL SUSPECT™ takes players into a whole new realm of mystery where the case is personal and the clues just out of reach, challenging gamers to solve the hardest case of all… their own murder.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/233290/header.jpg?t=1503075903",
        release_date: "2014-06-06",
        price: 2
    },
    {
        id: 94,
        name: "Horizon Zero Dawn™ Remastered",
        description: "Experience the critically acclaimed Horizon Zero Dawn™ with stunning new visuals and upgraded features. In a far future where colossal machines roam the Earth, pockets of humanity survive in unique tribes among the lush, overgrown ruins of our long-lost civilization.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2561580/header.jpg?t=1738876500",
        release_date: "2024-10-31",
        price: 50
    },
    {
        id: 95,
        name: "UNO",
        description: "UNO makes its return with new exciting features! Match cards by color or value and play action cards to change things up. Race against others to empty your hand before everyone else in Classic play or customize your experience with House Rules.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/470220/header.jpg?t=1728664374",
        release_date: "2016-12-08",
        price: 10
    },
    {
        id: 96,
        name: "Visage",
        description: "Visage is a first-person psychological horror game. Explore a mysterious ever-changing house in a slow-paced, atmospheric world that combines both uncannily comforting and horrifyingly realistic environments, and enjoy a genuinely terrifying experience.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/594330/header.jpg?t=1607559678",
        release_date: "2020-10-30",
        price: 30
    },
    {
        id: 97,
        name: "Devil May Cry 5",
        description: "The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg?t=1701395090",
        release_date: "2019-03-08",
        price: 30
    },
    {
        id: 98,
        name: "Sifu",
        description: "Sifu is a realistic third-person brawler with tight Kung Fu combat mechanics and cinematic martial arts action embarking you on a path for revenge.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg?t=1734256859",
        release_date: "2023-03-28",
        price: 40
    },
    {
        id: 99,
        name: "South Park™: The Stick of Truth™",
        description: "From the perilous battlefields of the fourth-grade playground, a young hero will rise, destined to be South Park's savior. From the creators of South Park, Trey Parker and Matt Stone, comes an epic quest to become cool.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/213670/header.jpg?t=1680013652",
        release_date: "2014-03-06",
        price: 30
    },
    {
        id: 100,
        name: "South Park™: The Fractured But Whole™",
        description: "From the creators of South Park, Trey Parker and Matt Stone, comes South Park: The Fractured But Whole, a sequel to 2014's award-winning South Park: The Stick of Truth.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/488790/header.jpg?t=1680013571",
        release_date: "2017-10-16",
        price: 30
    },
    {
        id: 101,
        name: "Call of Duty® 4: Modern Warfare® (2007)",
        description: "The new action-thriller from the award-winning team at Infinity Ward, the creators of the Call of Duty® series, delivers the most intense and cinematic action experience ever. Call of Duty 4: Modern Warfare arms gamers with an arsenal of advanced and powerful modern day firepower and transports them...",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/7940/header.jpg?t=1731698665",
        release_date: "2007-11-12",
        price: 20
    },
    {
        id: 102,
        name: "Call of Duty®: Modern Warfare® 2 (2009)",
        description: "The most-anticipated game of the year and the sequel to the best-selling first-person action game of all time, Modern Warfare 2 continues the gripping and heart-racing action as players face off against a new threat dedicated to bring the world to the brink of collapse.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/10180/header.jpg?t=1654809646",
        release_date: "2009-11-12",
        price: 20
    },
    {
        id: 103,
        name: "Call of Duty®: Modern Warfare® 3 (2011)",
        description: "The best-selling first-person action series of all-time returns with an epic sequel to the multiple GOTY award winner Call of Duty®: Modern Warfare® 2.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/115300/header.jpg?t=1692032509",
        release_date: "2011-11-08",
        price: 40
    },
    {
        id: 104,
        name: "Mafia: Definitive Edition",
        description: "An inadvertent brush with the mob thrusts cabdriver Tommy Angelo into the world of organized crime. Initially uneasy about falling in with the Salieri family, the rewards become too big to ignore.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030840/header.jpg?t=1738968937",
        release_date: "2020-09-25",
        price: 40
    },
    {
        id: 105,
        name: "Mafia II: Definitive Edition",
        description: "War hero Vito Scaletta becomes entangled with the mob in hopes of paying his father's debts. Vito works to prove himself, climbing the family ladder with crimes of larger reward and consequence.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1030830/header.jpg?t=1738969036",
        release_date: "2020-05-19",
        price: 30
    },
    {
        id: 106,
        name: "Mafia III: Definitive Edition",
        description: "After Lincoln Clay's surrogate family, the black mob, is betrayed and killed by the Italian Mafia, Lincoln builds a new family and blazes a path of revenge through the Mafioso responsible.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/360430/header.jpg?t=1738969130",
        release_date: "2020-05-19",
        price: 30
    },
    {
        id: 107,
        name: "Doki Doki Literature Club Plus!",
        description: "Welcome to the club! Write poems for your crush and experience the terror of school romance in this critically-acclaimed psychological horror story.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1388880/header.jpg?t=1727387604",
        release_date: "2021-06-30",
        price: 15
    },
    {
        id: 108,
        name: "Slay the Princess — The Pristine Cut",
        description: "You're here to slay the princess. Don't believe her lies.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1989270/header.jpg?t=1741956081",
        release_date: "2023-10-23",
        price: 18
    },
    {
        id: 109,
        name: "Mirror's Edge™",
        description: "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, and you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/17410/header.jpg?t=1738878228",
        release_date: "2009-01-13",
        price: 3
    },
    {
        id: 110,
        name: "Mirror's Edge™ Catalyst",
        description: "Mirror's Edge™ Catalyst raises the action-adventure bar through fluid, first person action and immerses players in Faith's story as she fights for freedom.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1233570/header.jpg?t=1725569207",
        release_date: "2016-06-07",
        price: 3
    },
    {
        id: 111,
        name: "Mini Ninjas",
        description: "Mini Ninjas is a game that combines furious action with stealth and exploration for an experience that appeals to a wide audience across age groups and preferences. It's an action-adventure with a strong focus on allowing the player freedom to explore the world and has the depth to allow for very varied gameplay.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/35000/header.jpg?t=1592492627",
        release_date: "2009-09-14",
        price: 2
    },
    {
        id: 112,
        name: "Far Cry® 2",
        description: "You are a gun for hire, trapped in a war-torn African state, stricken with malaria and forced to make deals with corrupt warlords on both sides of the conflict in order to make this country your home. You must identify and exploit your enemies' weaknesses, neutralizing their superior numbers and firepower.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/19900/header.jpg?t=1709317476",
        release_date: "2008-10-22",
        price: 10
    },
    {
        id: 113,
        name: "Far Cry 3",
        description: "Discover the dark secrets of a lawless island ruled by violence and take the fight to the enemy as you try to escape. You'll need more than luck to escape alive!",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220240/header.jpg?t=1738250672",
        release_date: "2012-11-29",
        price: 20
    },
    {
        id: 114,
        name: "Far Cry® 4",
        description: "Hidden in the towering Himalayas lies Kyrat, a country steeped in tradition and violence. You are Ajay Ghale. Traveling to Kyrat to fulfill your mother's dying wish, you find yourself caught up in a civil war to overthrow the oppressive regime of dictator Pagan Min.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/298110/header.jpg?t=1739176495",
        release_date: "2014-11-18",
        price: 30
    },
    {
        id: 115,
        name: "Far Cry® 5",
        description: "Discover the open world of Hope County, Montana, besieged by a fanatical doomsday cult. Dive into the action solo or two-player co-op in the story campaign, use a vast arsenal of weapons and allies, and free Hope County from Joseph Seed and his cult.",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/552520/header.jpg?t=1738249745",
        release_date: "2018-03-27",
        price: 60
    },
    {
        id: 116,
        name: "Red Dead Online",
        description: "Step into the vibrant, ever-evolving world of Red Dead Online and experience life in frontier America. Chase down bounties, battle outlaw gangs and other players, hunt, fish and trade, search for exotic treasures, run Moonshine, and much more to discover in a world of astounding depth and detail.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1404210/header.jpg?t=1720558633",
        release_date: "2020-12-01",
        price: 20
    },
    {
        id: 117,
        name: "Dying Light 2 Stay Human",
        description: "Humanity is fighting a losing battle against the virus. Experience a post-apocalyptic open world overrun by hordes of zombies, where your parkour and combat skills are key to survival. Traverse the City freely during the day, but watch the monsters take over during the night.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/534380/header.jpg?t=1755623287",
        release_date: "2012-02-04",
        price: 60
    },
    {
        id: 118,
        name: "Dying Light: The Beast",
        description: "You are Kyle Crane, and after years of brutal experiments, you want revenge. Experience a unique blend of open world and survival horror as you hunt down the man who transformed you into half man, half beast.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3008130/cc54d8961d51eab78fd3fb8507a866a621c2a025/header.jpg?t=1758469753",
        release_date: "2025-09-18",
        price: 50
    },
    {
        id: 119,
        name: "The Elder Scrolls IV: Oblivion Remastered",
        description: "Explore Cyrodiil like never before with stunning new visuals and refined gameplay in The Elder Scrolls IV: Oblivion™ Remastered.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2623190/a7cee9165bb1bfc092c390c5cff215ce0e381dfc/header.jpg?t=1753715775",
        release_date: "2025-04-22",
        price: 60
    },
    {
        id: 120,
        name: "Fallout 76",
        description: "Bethesda Game Studios welcome you to Fallout 76. Twenty-five years after the bombs fall, you and your fellow Vault Dwellers emerge into post-nuclear America. Explore a vast wasteland in this open-world multiplayer addition to the Fallout story.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1151340/a85a6d8e2f6444297f829f22fe6b6bbc2fb8e590/header.jpg?t=1756832490",
        release_date: "2020-04-14",
        price: 30
    },
    {
        id: 121,
        name: "Five Nights at Freddy's: Security Breach",
        description: "In Five Nights at Freddy's: Security Breach, play as Gregory, a young boy who's been trapped overnight inside of Freddy Fazbear's Mega Pizzaplex. With the help of Freddy himself, Gregory must uncover the secrets of the Pizzaplex, learn the truth, and survive until dawn.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/747660/header.jpg?t=1686587905",
        release_date: "2021-12-17",
        price: 40
    },
    {
        id: 122,
        name: "METAL GEAR SOLID Δ: SNAKE EATER",
        description: "A remake of the 2004 game METAL GEAR SOLID 3: SNAKE EATER, with the same gripping story and engrossing world, now with all new graphics and 3D audio that enhance the jungle atmosphere. Get ready for the ultimate survival stealth action experience.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2417610/05c97cbcd0cfc27c8ed6c7fc6d81e0995aa2a7d4/header.jpg?t=1756386016",
        release_date: "2025-08-28",
        price: 70
    },
    {
        id: 123,
        name: "The Outlast Trials",
        description: "Red Barrels invites you to experience mind-numbing terror, this time with friends. Whether you go through the trials alone or in teams, if you survive long enough and complete the therapy, Murkoff will happily let you leave… but will you be the same?",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1304930/c6fc392c72e64a9c93fb651350a89a935df64fa5/header.jpg?t=1752587987",
        release_date: "2024-03-05",
        price: 34
    },
    {
        id: 124,
        name: "Half-Life: Alyx",
        description: "Half-Life: Alyx is Valve's VR return to the Half-Life series. It's the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity's only chance for survival.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/546560/header.jpg?t=1673391297",
        release_date: "2020-03-23",
        price: 60
    },
    {
        id: 125,
        name: "Hollow Knight: Silksong",
        description: "Discover a vast, haunted kingdom in Hollow Knight: Silksong! Explore, fight and survive as you ascend to the peak of a land ruled by silk and song.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1030300/7983574d464e6559ac7e24275727f73a8bcca1f3/header.jpg?t=1756994410",
        release_date: "2025-09-04",
        price: 30
    },
    {
        id: 126,
        name: "Subnautica: Below Zero",
        description: "Dive into a freezing underwater adventure on an alien planet. Below Zero is set two years after the original Subnautica. Return to Planet 4546B to uncover the truth behind a deadly cover-up. Survive by building habitats, crafting tools, and diving deeper into the world of Subnautica.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/848450/header.jpg?t=1751944927",
        release_date: "2021-05-14",
        price: 30
    },
    {
        id: 127,
        name: "Subnautica 2",
        description: "Immerse yourself in a new adventure with Subnautica 2, an open-water survival game from the creators of the Subnautica series. Play alone or with friends as you explore alluring biomes and discover fascinating creatures. Craft vehicles, tools, and bases to survive this mysterious alien world.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1962700/header.jpg?t=1756333300",
        release_date: "2026-01-01",
        price: 60
    },
    {
        id: 128,
        name: "FINAL FANTASY XVI",
        description: "An epic dark fantasy where fates are decided by mighty Eikons and the Dominants who wield them. This is the tale of Clive Rosfield, a tragic warrior who swears revenge on the Dark Eikon Ifrit, a mysterious entity that leaves naught but calamity in its wake.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2515020/header.jpg?t=1741059170",
        release_date: "2024-09-17",
        price: 70
    },
    {
        id: 129,
        name: "STAR WARS Jedi: Survivor™",
        description: "The story of Cal Kestis continues in STAR WARS Jedi: Survivor™, a galaxy-spanning, third-person, action-adventure game.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1774580/header.jpg?t=1748945254",
        release_date: "2023-04-28",
        price: 70
    },
    {
        id: 130,
        name: "DELTARUNE",
        description: "Dive into the parallel story to UNDERTALE! Fight or spare your way through action-packed battles as you explore a mysterious world alongside an endearing cast of new and familiar characters. Chapters 1-4 will be available on launch, with more planned as free updates!",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1671210/7ccda5b1631d2e60cc756a3271e845dbb9168821/header.jpg?t=1749252480",
        release_date: "2025-06-04",
        price: 24
    },
    {
        id: 131,
        name: "SILENT HILL f",
        description: "Hinako's hometown is engulfed in fog, driving her to fight grotesque monsters and solve eerie puzzles. Uncover the disturbing beauty hidden in terror.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2947440/7e5d923ac622bd1775ebc9b5d4b5b0a24bf5ed40/header.jpg?t=1758558348",
        release_date: "2025-09-25",
        price: 80
    },
    {
        id: 132,
        name: "Horizon Forbidden West™ Complete Edition",
        description: "Experience the epic Horizon Forbidden West™ in its entirety with bonus content and the Burning Shores expansion included. The Burning Shores add-on contains additional content for Aloy's adventure, including new storylines, characters, and experiences in a stunning yet hazardous new area.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg?t=1750953213",
        release_date: "2024-03-21",
        price: 60
    },
    {
        id: 133,
        name: "Call of Duty®: Black Ops",
        description: "The biggest first-person action series of all time and the follow-up to critically acclaimed Call of Duty®: Modern Warfare 2 returns with Call of Duty®: Black Ops.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/42700/header.jpg?t=1748040520",
        release_date: "2010-11-09",
        price: 40
    },
    {
        id: 134,
        name: "Call of Duty: World at War",
        description: "Call of Duty is back, redefining war like you've never experienced before. Building on the Call of Duty 4®: Modern Warfare engine, Call of Duty: World at War immerses players into the most gritty and chaotic WWII combat ever experienced.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/10090/header.jpg?t=1654830025",
        release_date: "2008-11-18",
        price: 20
    },
    {
        id: 135,
        name: "Call of Duty®: WWII",
        description: "Call of Duty®: WWII - a breathtaking experience that redefines World War II.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/476600/header.jpg?t=1751302904",
        release_date: "2017-11-03",
        price: 60
    },
    {
        id: 136,
        name: "Mafia: The Old Country",
        description: "Uncover the origins of organized crime in Mafia: The Old Country, a gritty mob story set in the brutal underworld of 1900s Sicily. Fight to survive as Enzo Favara and prove your worth to the Family in this immersive third-person action-adventure.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1941540/d06980bb8f41737ca68da8eed40079347db09c84/header.jpg?t=1756416460",
        release_date: "2025-08-07",
        price: 60
    },
    {
        id: 137,
        name: "Baldur's Gate 3",
        description: "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons and Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/48a2fcbda8565bb45025e98fd8ebde8a7203f6a0/header.jpg?t=1748346026",
        release_date: "2023-08-03",
        price: 60
    },
    {
        id: 138,
        name: "Danganronpa: Trigger Happy Havoc",
        description: "Investigate murders, search for clues and talk to your classmates to prepare for trial. There, you'll engage in deadly wordplay, going back and forth with suspects. Dissect their statements and fire their words back at them to expose their lies! There's only one way to survive—pull the trigger.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413410/header.jpg?t=1750134092",
        release_date: "2016-02-18",
        price: 20
    },
    {
        id: 139,
        name: "Danganronpa 2: Goodbye Despair",
        description: "Jabberwock Island—You and your classmates were ready for fun in the sun until Monokuma returned to restart his murderous game! Trapped in a kill-or-be-killed situation, your only hope rests in solving the island's mysteries.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413420/header.jpg?t=1750134103",
        release_date: "2016-04-19",
        price: 20
    },
    {
        id: 140,
        name: "Danganronpa V3: Killing Harmony",
        description: "A new cast of 16 characters find themselves kidnapped and imprisoned in a school. Inside, some will kill, some will die, and some will be punished. Reimagine what you thought high-stakes, fast-paced investigation was as you investigate twisted murder cases and condemn your new friends to death.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/567640/header.jpg?t=1750134757",
        release_date: "2017-09-26",
        price: 40
    },
    {
        id: 141,
        name: "This War of Mine",
        description: "In This War Of Mine you do not play as an elite soldier, rather a group of civilians trying to survive in a besieged city; struggling with lack of food, medicine and constant danger from snipers and hostile scavengers. The game provides an experience of war seen from an entirely new angle.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/282070/header.jpg?t=1749488980",
        release_date: "2014-11-14",
        price: 20
    },
    {
        id: 142,
        name: "Little Inferno",
        description: "Throw your toys into your fire, and play with them as they burn. An adventure that takes place almost entirely in front of a fireplace - about looking up up up out of the chimney, and the cold world just on the other side of the wall. From the creators of World of Goo and Human Resource Machine.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/221260/header.jpg?t=1668741117",
        release_date: "2012-11-19",
        price: 15
    },
    {
        id: 143,
        name: "Hearts of Iron IV",
        description: "Victory is at your fingertips! Your ability to lead your nation is your supreme weapon, the strategy game Hearts of Iron IV lets you take command of any nation in World War II; the most engaging conflict in world history.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/394360/67bbd0057627fc2244793bcdd09260c2539499cf/header.jpg?t=1747327288",
        release_date: "2016-06-06",
        price: 40
    },
    {
        id: 144,
        name: "The Escapists",
        description: "The Escapists provides players the opportunity of experiencing a light-hearted insight into everyday prison life with the main objective being that of escaping!",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/298630/header.jpg?t=1733480165",
        release_date: "2015-02-13",
        price: 20
    },
    {
        id: 145,
        name: "The Escapists 2",
        description: "Craft, Steal, Brawl and Escape! It's time to bust out of the toughest prisons in the world as you return to the life of an inmate in The Escapists 2, now with multiplayer! Have you got what it takes to escape?",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/641990/header.jpg?t=1726561627",
        release_date: "2017-08-22",
        price: 20
    },
    {
        id: 146,
        name: "Clair Obscur: Expedition 33",
        description: "Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1903340/be3305b02d4db0dffa3458537118423bf2792d7e/header.jpg?t=1753344076",
        release_date: "2025-04-24",
        price: 50
    },
    {
        id: 147,
        name: "Kingdom Come: Deliverance",
        description: "Story-driven open-world RPG that immerses you in an epic adventure in the Holy Roman Empire. Avenge your parents' death as you battle invading forces, go on game-changing quests, and make influential choices. Explore castles, forests, villages and other realistic settings in medieval Bohemia!",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/379430/header.jpg?t=1741619061",
        release_date: "2018-02-13",
        price: 30
    },
    {
        id: 148,
        name: "Kingdom Come: Deliverance II",
        description: "A thrilling story-driven action RPG, with a rich open world, set in 15th century Medieval Europe. Experience the ultimate medieval adventure - through the eyes of young Henry - as you embark on a journey of epic proportions.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1771300/header.jpg?t=1757432105",
        release_date: "2025-02-04",
        price: 60
    },
    {
        id: 149,
        name: "Phoenix Wright: Ace Attorney Trilogy",
        description: "Become Phoenix Wright and experience the thrill of battle as you fight to save your innocent clients in a court of law. Play all 14 episodes, spanning the first three games, in one gorgeous collection.",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/787480/header.jpg?t=1758502907",
        release_date: "2019-04-09",
        price: 30
    }
];

export default games;