// A 50/50 collection: public-domain excerpts and links to authorized reproductions.
const POEMS = [
  {
    "id": "dickinson-not-at-home-to-callers",
    "slot": 0,
    "title": "Not at Home to Callers",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Not%20at%20Home%20to%20Callers",
    "text": "Not at Home to Callers\nSays the Naked Tree --\nBonnet due in April --\nWishing you Good Day --",
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "linked-mary-oliver-the-summer-day",
    "format": "linked",
    "title": "The Summer Day",
    "author": "Mary Oliver",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/summer-day",
    "text": "",
    "slot": 1,
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "rossetti-before-the-paling-of-the-stars",
    "slot": 2,
    "title": "Before The Paling Of The Stars",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Before%20The%20Paling%20Of%20The%20Stars",
    "text": "Before the winter morn,\nBefore the earliest cock crow,\nJesus Christ was born:\nBorn in a stable,\nCradled in a manger,\nIn the world his hands had made\nBorn a stranger.",
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "linked-mary-oliver-beans",
    "format": "linked",
    "title": "Beans",
    "author": "Mary Oliver",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/beans",
    "text": "",
    "slot": 3,
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "wordsworth-i-wandered-lonely-as-a-cloud",
    "slot": 4,
    "title": "I Wandered Lonely As A Cloud",
    "author": "William Wordsworth",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/I%20Wandered%20Lonely%20As%20A%20Cloud",
    "text": "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.",
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "linked-mary-oliver-at-black-river",
    "format": "linked",
    "title": "At Black River",
    "author": "Mary Oliver",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/41916/at-black-river",
    "text": "",
    "slot": 5,
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "burns-292-song-farewell-to-the-highlands",
    "slot": 6,
    "title": "292. Song—Farewell to the Highlands",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/292.%20Song%E2%80%94Farewell%20to%20the%20Highlands",
    "text": "FAREWELL to the Highlands, farewell to the North,\nThe birth-place of Valour, the country of Worth;\nWherever I wander, wherever I rove,\nThe hills of the Highlands for ever I love.",
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "linked-mary-oliver-august",
    "format": "linked",
    "title": "August",
    "author": "Mary Oliver",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/38715/august-56d21c28583f6",
    "text": "",
    "slot": 7,
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "dunbar-my-little-march-girl",
    "slot": 8,
    "title": "My Little March Girl",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/My%20Little%20March%20Girl",
    "text": "Come to the pane, draw the curtain apart,\nThere she is passing, the girl of my heart;\nSee where she walks like a queen in the street,\nWeather-defying, calm, placid and sweet.\nTripping along with impetuous grace,\nJoy of her life beaming out of her face,\nTresses all truant-like, curl upon curl,\nWind-blown and rosy, my little March girl.",
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "linked-mary-oliver-banyan",
    "format": "linked",
    "title": "Banyan",
    "author": "Mary Oliver",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/36111/banyan",
    "text": "",
    "slot": 9,
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "clare-song",
    "slot": 10,
    "title": "Song",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Song",
    "text": "Mary, leave thy lowly cot\nWhen thy thickest jobs are done;\nWhen thy friends will miss thee not,\nMary, to the pastures run.\nWhere we met the other night\nNeath the bush upon the plain,\nBe it dark or be it light,\nYe may guess we'll meet again.",
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "linked-raymond-carver-another-mystery",
    "format": "linked",
    "title": "Another Mystery",
    "author": "Raymond Carver",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/37421/another-mystery",
    "text": "",
    "slot": 11,
    "palette": {
      "paper": "#080817",
      "ink": "#f4f0ff",
      "muted": "#aaa5c7",
      "line": "rgba(244,240,255,.24)",
      "accent": "#b9d7ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(185,215,255,.24)"
    }
  },
  {
    "id": "shakespeare-a-lover-s-complaint",
    "slot": 12,
    "title": "A Lover's Complaint",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Lover%27s%20Complaint",
    "text": "FROM off a hill whose concave womb reworded\nA plaintful story from a sistering vale,\nMy spirits to attend this double voice accorded,\nAnd down I laid to list the sad-tuned tale;\nEre long espied a fickle maid full pale,\nTearing of papers, breaking rings a-twain,\nStorming her world with sorrow's wind and rain.",
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "linked-raymond-carver-balsa-wood",
    "format": "linked",
    "title": "Balsa Wood",
    "author": "Raymond Carver",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/36242/balsa-wood",
    "text": "",
    "slot": 13,
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "levy-sonnet",
    "slot": 14,
    "title": "Sonnet",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Sonnet",
    "text": "Most wonderful and strange it seems, that I\nWho but a little time ago was tost\nHigh on the waves of passion and of pain,\nWith aching heat and wildly throbbing brain,\nWho peered into the darkness, deeming vain\nAll things there found if but One thing were lost,\nThus calm and still and silent here should lie,\nWatching and waiting, --waiting passively.",
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "linked-raymond-carver-for-tess",
    "format": "linked",
    "title": "For Tess",
    "author": "Raymond Carver",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/36050/for-tess",
    "text": "",
    "slot": 15,
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "stevenson-men-are-heaven-s-piers",
    "slot": 16,
    "title": "Men Are Heaven's Piers",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Men%20Are%20Heaven%27s%20Piers",
    "text": "MEN are Heaven's piers; they evermore\nUnwearying bear the skyey floor;\nMan's theatre they bear with ease,\nUnfrowning cariatides!\nI, for my wife, the sun uphold,\nOr, dozing, strike the seasons cold.\nShe, on her side, in fairy-wise\nDeals in diviner mysteries,",
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "linked-leonard-cohen-steer-your-way",
    "format": "linked",
    "title": "Steer Your Way",
    "author": "Leonard Cohen",
    "source": "The New Yorker",
    "sourceUrl": "https://www.newyorker.com/magazine/2016/06/20/steer-your-way-by-leonard-cohen",
    "text": "",
    "slot": 17,
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "wheatley-goliath-of-gath",
    "slot": 18,
    "title": "Goliath Of Gath",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Goliath%20Of%20Gath",
    "text": "SAMUEL, Chap. xvii.\nYE martial pow'rs, and all ye tuneful nine,\nInspire my song, and aid my high design.\nThe dreadful scenes and toils of war I write,\nThe ardent warriors, and the fields of fight:\nYou best remember, and you best can sing\nThe acts of heroes to the vocal string:\nResume the lays with which your sacred lyre,",
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "linked-e-e-cummings-la-guerre-ii",
    "format": "linked",
    "title": "La Guerre (II)",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/la-guerre-ii",
    "text": "",
    "slot": 19,
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "blake-the-human-abstract",
    "slot": 20,
    "title": "The Human Abstract",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Human%20Abstract",
    "text": "Pity would be no more\nIf we did not make somebody poor,\nAnd Mercy no more could be\nIf all were as happy as we.",
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "linked-e-e-cummings-here-s-a-little-mouse",
    "format": "linked",
    "title": "Here’s a Little Mouse",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/heres-little-mouse",
    "text": "",
    "slot": 21,
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "keats-a-thing-of-beauty-endymion",
    "slot": 22,
    "title": "A Thing of Beauty (Endymion)",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Thing%20of%20Beauty%20%28Endymion%29",
    "text": "A thing of beauty is a joy for ever:\nIts lovliness increases; it will never\nPass into nothingness; but still will keep\nA bower quiet for us, and a sleep\nFull of sweet dreams, and health, and quiet breathing.\nTherefore, on every morrow, are we wreathing\nA flowery band to bind us to the earth,\nSpite of despondence, of the inhuman dearth",
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "linked-e-e-cummings-chansons-innocentes-ii",
    "format": "linked",
    "title": "Chansons Innocentes II",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/chansons-innocentes-ii",
    "text": "",
    "slot": 23,
    "palette": {
      "paper": "#17102a",
      "ink": "#fff3df",
      "muted": "#c1acc4",
      "line": "rgba(255,243,223,.24)",
      "accent": "#e9a9ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(233,169,255,.22)"
    }
  },
  {
    "id": "whitman-a-boston-ballad-1854",
    "slot": 24,
    "title": "A Boston Ballad, 1854.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Boston%20Ballad%2C%201854.",
    "text": "TO get betimes in Boston town, I rose this morning early;\nHere’s a good place at the corner—I must stand and see the show.\nClear the way there, Jonathan!\nWay for the President’s marshal! Way for the government cannon!\nWay for the Federal foot and dragoons—and the apparitions copiously tumbling.",
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "linked-e-e-cummings-sonnets-realities-i",
    "format": "linked",
    "title": "Sonnets-Realities (I)",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/sonnets-realities-i",
    "text": "",
    "slot": 25,
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "poe-for-annie",
    "slot": 26,
    "title": "For Annie",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/For%20Annie",
    "text": "Thank Heaven! the crisis--\nThe danger is past,\nAnd the lingering illness\nIs over at last--\nAnd the fever called \"Living\"\nIs conquered at last.",
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "linked-e-e-cummings-post-impressions-vi",
    "format": "linked",
    "title": "Post Impressions (VI)",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/post-impressions-vi",
    "text": "",
    "slot": 27,
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "hopkins-the-sea-took-pity",
    "slot": 28,
    "title": "The Sea Took Pity",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Sea%20Took%20Pity",
    "text": "The sea took pity: it interposed with doom:\n‘I have tall daughters dear that heed my hand:\nLet Winter wed one, sow them in her womb,\nAnd she shall child them on the New-world strand.’\n. . . . . . . .",
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "linked-e-e-cummings-amores-vii",
    "format": "linked",
    "title": "Amores (VII)",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/amores-vii",
    "text": "",
    "slot": 29,
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "browning-mother-and-poet",
    "slot": 30,
    "title": "Mother and Poet",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Mother%20and%20Poet",
    "text": "I.\nDead ! One of them shot by the sea in the east,\nAnd one of them shot in the west by the sea.\nDead ! both my boys ! When you sit at the feast\nAnd are wanting a great song for Italy free,\nLet none look at me !",
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "linked-e-e-cummings-songs-vi",
    "format": "linked",
    "title": "Songs (VI)",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/songs-vi-0",
    "text": "",
    "slot": 31,
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "bronte-how-still-how-happy",
    "slot": 32,
    "title": "How still, how happy!",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/How%20still%2C%20how%20happy%21",
    "text": "How still, how happy! Those are words\nThat once would scarce agree together;\nI loved the plashing of the surge -\nThe changing heaven the breezy weather,",
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "linked-e-e-cummings-amores-vi",
    "format": "linked",
    "title": "Amores (VI)",
    "author": "E. E. Cummings",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/amores-vi-0",
    "text": "",
    "slot": 33,
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "wilde-the-ballad-of-reading-gaol",
    "slot": 34,
    "title": "The Ballad Of Reading Gaol",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Ballad%20Of%20Reading%20Gaol",
    "text": "(In memoriam\nC. T. W.\nSometime trooper of the Royal Horse Guards\nobiit H.M. prison, Reading, Berkshire\nJuly 7, 1896)",
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "linked-e-e-cummings-all-nearness-pauses-while-a-star",
    "format": "linked",
    "title": "“all nearness pauses, while a star…”",
    "author": "E. E. Cummings",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poetrymagazine/poems/25957/all-nearness-pauses-while-a-star",
    "text": "",
    "slot": 35,
    "palette": {
      "paper": "#182641",
      "ink": "#f4f7ff",
      "muted": "#a9b8d0",
      "line": "rgba(244,247,255,.24)",
      "accent": "#9fd8ff",
      "surface": "rgba(255,255,255,.08)",
      "glow": "rgba(159,216,255,.24)"
    }
  },
  {
    "id": "emerson-celestial-love",
    "slot": 36,
    "title": "Celestial Love",
    "author": "Ralph Waldo Emerson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Celestial%20Love",
    "text": "Higher far,\nUpward, into the pure realm,\nOver sun or star,\nOver the flickering Dæmon film,\nThou must mount for love,—\nInto vision which all form\nIn one only form dissolves;\nIn a region where the wheel,",
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "linked-walt-whitman-long-too-long-america",
    "format": "linked",
    "title": "Long, Too Long America",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/long-too-long-america",
    "text": "",
    "slot": 37,
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "dickinson-summer-begins-to-have-the-look",
    "slot": 38,
    "title": "Summer begins to have the look",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Summer%20begins%20to%20have%20the%20look",
    "text": "Summer begins to have the look\nPeruser of enchanting Book\nReluctantly but sure perceives\nA gain upon the backward leaves --",
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "linked-walt-whitman-year-that-trembled-and-reel-d-beneath-me",
    "format": "linked",
    "title": "Year That Trembled and Reel’d Beneath Me",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/year-trembled-and-reeld-beneath-me",
    "text": "",
    "slot": 39,
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "rossetti-from-sunset-to-star-rise",
    "slot": 40,
    "title": "From Sunset to Star Rise",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/From%20Sunset%20to%20Star%20Rise",
    "text": "Go from me, summer friends, and tarry not:\nI am no summer friend, but wintry cold,\nA silly sheep benighted from the fold,\nA sluggard with a thorn-choked garden plot.\nTake counsel, sever from my lot your lot,\nDwell in your pleasant places, hoard your gold;\nLest you with me should shiver on the wold,\nAthirst and hungering on a barren spot.",
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "linked-walt-whitman-not-the-pilot",
    "format": "linked",
    "title": "Not the Pilot",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/not-pilot",
    "text": "",
    "slot": 41,
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "whitman-whispers-of-heavenly-death",
    "slot": 42,
    "title": "Whispers of Heavenly Death.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Whispers%20of%20Heavenly%20Death.",
    "text": "WHISPERS of heavenly death, murmur’d I hear;\nLabial gossip of night—sibilant chorals;\nFootsteps gently ascending—mystical breezes, wafted soft and low;\nRipples of unseen rivers—tides of a current, flowing, forever flowing;\n(Or is it the plashing of tears? the measureless waters of human tears?)",
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "linked-walt-whitman-as-toilsome-i-wander-d-virginia-s-woods",
    "format": "linked",
    "title": "As Toilsome I Wander’d Virginia’s Woods",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/toilsome-i-wanderd-virginias-woods",
    "text": "",
    "slot": 43,
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "poe-eldorado",
    "slot": 44,
    "title": "Eldorado",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Eldorado",
    "text": "Gaily bedight,\nA gallant knight,\nIn sunshine and in shadow,\nHad journeyed long,\nSinging a song,\nIn search of Eldorado.\nBut he grew old--\nThis knight so bold--",
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "linked-walt-whitman-a-march-in-the-ranks-hard-prest-and-the-road-unknown",
    "format": "linked",
    "title": "A March in the Ranks Hard-Prest, and the Road Unknown",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/march-ranks-hard-prest-and-road-unknown",
    "text": "",
    "slot": 45,
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "hopkins-thee-god-i-come-from",
    "slot": 46,
    "title": "Thee, God, I Come from",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Thee%2C%20God%2C%20I%20Come%20from",
    "text": "Thee, God, I come from, to thee go,\nAll day long I like fountain flow\nFrom thy hand out, swayed about\nMote-like in thy mighty glow.",
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "linked-walt-whitman-by-the-bivouac-s-fitful-flame",
    "format": "linked",
    "title": "By the Bivouac’s Fitful Flame",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/bivouacs-fitful-flame",
    "text": "",
    "slot": 47,
    "palette": {
      "paper": "#dce7ed",
      "ink": "#172027",
      "muted": "#576a75",
      "line": "rgba(23,32,39,.24)",
      "accent": "#b44835",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,180,120,.28)"
    }
  },
  {
    "id": "browning-pain-in-pleasure",
    "slot": 48,
    "title": "Pain In Pleasure",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Pain%20In%20Pleasure",
    "text": "A THOUGHT ay like a flower upon mine heart,\nAnd drew around it other thoughts like bees\nFor multitude and thirst of sweetnesses;\nWhereat rejoicing, I desired the art\nOf the Greek whistler, who to wharf and mart\nCould lure those insect swarms from orange-trees\nThat I might hive with me such thoughts and please\nMy soul so, always. foolish counterpart",
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-an-army-corps-on-the-march",
    "format": "linked",
    "title": "An Army Corps on the March",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/army-corps-march",
    "text": "",
    "slot": 49,
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "bronte-come-hither-child",
    "slot": 50,
    "title": "Come hither, child",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Come%20hither%2C%20child",
    "text": "Come hither, child--who gifted thee\nWith power to touch that string so well?\nHow darest thou rouse up thoughts in me,\nThoughts that I would--but cannot quell?",
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-bivouac-on-a-mountain-side",
    "format": "linked",
    "title": "Bivouac on a Mountain Side",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/bivouac-mountain-side",
    "text": "",
    "slot": 51,
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "wilde-easter-day",
    "slot": 52,
    "title": "Easter Day",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Easter%20Day",
    "text": "The silver trumpets rang across the Dome:\nThe people knelt upon the ground with awe:\nAnd borne upon the necks of men I saw,\nLike some great God, the Holy Lord of Rome.\nPriest-like, he wore a robe more white than foam,\nAnd, king-like, swathed himself in royal red,\nThree crowns of gold rose high upon his head:\nIn splendour and in light the Pope passed home.",
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-cavalry-crossing-a-ford",
    "format": "linked",
    "title": "Cavalry Crossing a Ford",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/cavalry-crossing-ford",
    "text": "",
    "slot": 53,
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "emerson-mithridates",
    "slot": 54,
    "title": "Mithridates",
    "author": "Ralph Waldo Emerson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Mithridates",
    "text": "I cannot spare water or wine,\nTobacco-leaf, or poppy, or rose;\nFrom the earth-poles to the Line,\nAll between that works or grows,\nEvery thing is kin of mine.",
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-the-centenarian-s-story",
    "format": "linked",
    "title": "The Centenarian’s Story",
    "author": "Walt Whitman",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/centenarians-story",
    "text": "",
    "slot": 55,
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "dickinson-the-life-we-have-is-very-great",
    "slot": 56,
    "title": "The Life we have is very great.",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Life%20we%20have%20is%20very%20great.",
    "text": "The Life we have is very great.\nThe Life that we shall see\nSurpasses it, we know, because\nIt is Infinity.\nBut when all Space has been beheld\nAnd all Dominion shown\nThe smallest Human Heart's extent\nReduces it to none.",
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-america",
    "format": "linked",
    "title": "America",
    "author": "Walt Whitman",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poems/53091/america-56d23215696b8",
    "text": "",
    "slot": 57,
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "rossetti-is-it-well-with-the-child",
    "slot": 58,
    "title": "Is it Well with the Child?",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Is%20it%20Well%20with%20the%20Child%3F",
    "text": "SAFE where I cannot die yet,\nSafe where I hope to lie too,\nSafe from the fume and the fret;\nYou, and you,\nWhom I never forget.\nSafe from the frost and the snow,\nSafe from the storm and the sun,\nSafe where the seeds wait to grow",
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-are-you-the-new-person-drawn-toward-me",
    "format": "linked",
    "title": "“Are you the new person drawn toward me?”",
    "author": "Walt Whitman",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poems/50394/are-you-the-new-person-drawn-toward-me",
    "text": "",
    "slot": 59,
    "palette": {
      "paper": "#f6dda7",
      "ink": "#21170c",
      "muted": "#6f5736",
      "line": "rgba(33,23,12,.24)",
      "accent": "#9a3c24",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(255,126,77,.24)"
    }
  },
  {
    "id": "whitman-starting-from-paumanok",
    "slot": 60,
    "title": "Starting from Paumanok.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Starting%20from%20Paumanok.",
    "text": "1\nSTARTING from fish-shape Paumanok, where I was born,\nWell-begotten, and rais’d by a perfect mother;\nAfter roaming many lands—lover of populous pavements;\nDweller in Mannahatta, my city—or on southern savannas;\nOr a soldier camp’d, or carrying my knapsack and gun—or a miner in\nCalifornia;\nOr rude in my home in Dakota’s woods, my diet meat, my drink from the",
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "linked-walt-whitman-as-i-ebb-d-with-the-ocean-of-life",
    "format": "linked",
    "title": "As I Ebb’d with the Ocean of Life",
    "author": "Walt Whitman",
    "source": "Poetry Foundation",
    "sourceUrl": "https://www.poetryfoundation.org/poems/51003/as-i-ebbd-with-the-ocean-of-life",
    "text": "",
    "slot": 61,
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "poe-to-marie-louise-shew",
    "slot": 62,
    "title": "To Marie Louise (Shew)",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20Marie%20Louise%20%28Shew%29",
    "text": "Of all who hail thy presence as the morning--\nOf all to whom thine absence is the night--\nThe blotting utterly from out high heaven\nThe sacred sun--of all who, weeping, bless thee\nHourly for hope--for life--ah, above all,\nFor the resurrection of deep buried faith\nIn truth, in virtue, in humanity--\nOf all who, on despair's unhallowed bed",
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "linked-ross-gay-throwing-children",
    "format": "linked",
    "title": "Throwing Children",
    "author": "Ross Gay",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/throwing-children",
    "text": "",
    "slot": 63,
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "hopkins-brothers",
    "slot": 64,
    "title": "Brothers",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Brothers",
    "text": "How lovely the elder brother's\nLife all laced in the other's,\nLóve-laced!—what once I well\nWitnessed; so fortune fell.\nWhen Shrovetide, two years gone,\nOur boys' plays brought on\nPart was picked for John,\nYoung Jóhn: then fear, then joy",
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "linked-ross-gay-again",
    "format": "linked",
    "title": "Again",
    "author": "Ross Gay",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/again",
    "text": "",
    "slot": 65,
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "browning-on-a-portrait-of-wordsworth",
    "slot": 66,
    "title": "On A Portrait Of Wordsworth",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/On%20A%20Portrait%20Of%20Wordsworth",
    "text": "WORDSWORTH upon Helvellyn ! Let the cloud\nEbb audibly along the mountain-wind,\nThen break against the rock, and show behind\nThe lowland valleys floating up to crowd\nThe sense with beauty. He with forehead bowed\nAnd humble-lidded eyes, as one inclined\nBefore the sovran thought of his own mind,\nAnd very meek with inspirations proud,",
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "linked-ross-gay-bringing-the-shovel-down",
    "format": "linked",
    "title": "Bringing the Shovel Down",
    "author": "Ross Gay",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/bringing-shovel-down",
    "text": "",
    "slot": 67,
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "bronte-stars",
    "slot": 68,
    "title": "Stars",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Stars",
    "text": "Ah! why, because the dazzling sun\nRestored our Earth to joy,\nHave you departed, every one,\nAnd left a desert sky?",
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "linked-ross-gay-a-small-needful-fact",
    "format": "linked",
    "title": "A Small Needful Fact",
    "author": "Ross Gay",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/small-needful-fact",
    "text": "",
    "slot": 69,
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "wilde-to-my-wife-with-a-copy-of-my-poems",
    "slot": 70,
    "title": "To My Wife - With A Copy Of My Poems",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20My%20Wife%20-%20With%20A%20Copy%20Of%20My%20Poems",
    "text": "I can write no stately proem\nAs a prelude to my lay;\nFrom a poet to a poem\nI would dare to say.",
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "linked-ross-gay-ode-to-the-puritan-in-me",
    "format": "linked",
    "title": "ode to the puritan in me",
    "author": "Ross Gay",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/ode-puritan-me",
    "text": "",
    "slot": 71,
    "palette": {
      "paper": "#fff3a6",
      "ink": "#18130a",
      "muted": "#695d35",
      "line": "rgba(24,19,10,.28)",
      "accent": "#2b6e3f",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(43,110,63,.24)"
    }
  },
  {
    "id": "emerson-ode-to-beauty",
    "slot": 72,
    "title": "Ode To Beauty",
    "author": "Ralph Waldo Emerson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Ode%20To%20Beauty",
    "text": "Who gave thee, O Beauty!\nThe keys of this breast,\nToo credulous lover\nOf blest and unblest?\nSay when in lapsed ages\nThee knew I of old;\nOr what was the service\nFor which I was sold?",
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "linked-ross-gay-to-the-fig-tree-on-9th-and-christian",
    "format": "linked",
    "title": "To the Fig Tree on 9th and Christian",
    "author": "Ross Gay",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/fig-tree-9th-and-christian",
    "text": "",
    "slot": 73,
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "dickinson-could-hope-inspect-her-basis",
    "slot": 74,
    "title": "Could Hope inspect her Basis",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Could%20Hope%20inspect%20her%20Basis",
    "text": "Could Hope inspect her Basis\nHer Craft were done --\nHas a fictitious Charter\nOr it has none --",
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "linked-ada-lim-n-in-praise-of-mystery-a-poem-for-europa",
    "format": "linked",
    "title": "In Praise of Mystery: A Poem for Europa",
    "author": "Ada Limón",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/praise-mystery-poem-europa",
    "text": "",
    "slot": 75,
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "rossetti-a-birthday",
    "slot": 76,
    "title": "A Birthday",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Birthday",
    "text": "My heart is like a singing bird\nWhose nest is in a water'd shoot;\nMy heart is like an apple-tree\nWhose boughs are bent with thickset fruit;\nMy heart is like a rainbow shell\nThat paddles in a halcyon sea;\nMy heart is gladder than all these\nBecause my love is come to me.",
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "linked-ada-lim-n-when-it-comes-down-to-it",
    "format": "linked",
    "title": "When It Comes Down To It",
    "author": "Ada Limón",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/when-it-comes-down-it",
    "text": "",
    "slot": 77,
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "whitman-passage-to-india",
    "slot": 78,
    "title": "Passage to India.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Passage%20to%20India.",
    "text": "1\nSINGING my days,\nSinging the great achievements of the present,\nSinging the strong, light works of engineers,\nOur modern wonders, (the antique ponderous Seven outvied,)\nIn the Old World, the east, the Suez canal,\nThe New by its mighty railroad spann’d,\nThe seas inlaid with eloquent, gentle wires,",
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "linked-ada-lim-n-it-begins-with-the-trees",
    "format": "linked",
    "title": "It Begins With the Trees",
    "author": "Ada Limón",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/it-begins-trees",
    "text": "",
    "slot": 79,
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "poe-the-city-in-the-sea",
    "slot": 80,
    "title": "The City In The Sea",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20City%20In%20The%20Sea",
    "text": "Lo! Death has reared himself a throne\nIn a strange city lying alone\nFar down within the dim West,\nWhere the good and the bad and the worst and the best\nHave gone to their eternal rest.\nThere shrines and palaces and towers\n(Time-eaten towers and tremble not!)\nResemble nothing that is ours.",
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "linked-ada-lim-n-drowning-creek",
    "format": "linked",
    "title": "Drowning Creek",
    "author": "Ada Limón",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/drowning-creek",
    "text": "",
    "slot": 81,
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "hopkins-moonrise",
    "slot": 82,
    "title": "Moonrise",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Moonrise",
    "text": "I awoke in the Midsummer not to call night, in the white and the walk of the morning:\nThe moon, dwindled and thinned to the fringe of a finger-nail held to the candle,\nOr paring of paradisaical fruit, lovely in waning but lustreless,\nStepped from the stool, drew back from the barrow, of dark Maenefa the mountain;",
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "linked-ada-lim-n-salvage",
    "format": "linked",
    "title": "Salvage",
    "author": "Ada Limón",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/salvage-0",
    "text": "",
    "slot": 83,
    "palette": {
      "paper": "#f3d21b",
      "ink": "#11100a",
      "muted": "#5f4f08",
      "line": "rgba(17,16,10,.28)",
      "accent": "#9b2d18",
      "surface": "rgba(255,255,255,.2)",
      "glow": "rgba(155,45,24,.22)"
    }
  },
  {
    "id": "browning-lord-walter-s-wife",
    "slot": 84,
    "title": "Lord Walter's Wife",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Lord%20Walter%27s%20Wife",
    "text": "I\n'But where do you go?' said the lady, while both sat under the yew,\nAnd her eyes were alive in their depth, as the kraken beneath the sea-blue.\nII",
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "linked-ada-lim-n-lover",
    "format": "linked",
    "title": "Lover",
    "author": "Ada Limón",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/lover-2",
    "text": "",
    "slot": 85,
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "bronte-death",
    "slot": 86,
    "title": "Death",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Death",
    "text": "Death! that struck when I was most confiding\nIn my certain faith of joy to be -\nStrike again, Time's withered branch dividing\nFrom the fresh root of Eternity!",
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "linked-jane-hirshfield-i-speak-with-the-future",
    "format": "linked",
    "title": "I speak with the future.",
    "author": "Jane Hirshfield",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/i-speak-future",
    "text": "",
    "slot": 87,
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "wilde-ballade-de-marguerite-normande",
    "slot": 88,
    "title": "Ballade De Marguerite (Normande)",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Ballade%20De%20Marguerite%20%28Normande%29",
    "text": "I am weary of lying within the chase\nWhen the knights are meeting in market-place.\nNay, go not thou to the red-roofed town\nLest the hoofs of the war-horse tread thee down.",
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "linked-jane-hirshfield-counting-this-new-year-s-morning-what-powers-yet-remai",
    "format": "linked",
    "title": "Counting, this New Year’s Morning, What Powers Yet Remain to Me",
    "author": "Jane Hirshfield",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/counting-new-years-morning-what-powers-yet-remain-me",
    "text": "",
    "slot": 89,
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "emerson-to-eva",
    "slot": 90,
    "title": "To Eva",
    "author": "Ralph Waldo Emerson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20Eva",
    "text": "O Fair and stately maid, whose eye\nWas kindled in the upper sky\nAt the same torch that lighted mine;\nFor so I must interpret still\nThy sweet dominion o'er my will,\nA sympathy divine.",
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "linked-jane-hirshfield-words",
    "format": "linked",
    "title": "Words",
    "author": "Jane Hirshfield",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/words-1",
    "text": "",
    "slot": 91,
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "dickinson-success-is-counted-sweetest",
    "slot": 92,
    "title": "Success is counted sweetest",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Success%20is%20counted%20sweetest",
    "text": "Success is counted sweetest\nBy those who ne'er succeed.\nTo comprehend a nectar\nRequires sorest need.",
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "linked-jane-hirshfield-my-debt",
    "format": "linked",
    "title": "My Debt",
    "author": "Jane Hirshfield",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/my-debt",
    "text": "",
    "slot": 93,
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "rossetti-later-life",
    "slot": 94,
    "title": "Later life",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Later%20life",
    "text": "Something this foggy day, a something which\nIs neither of this fog nor of today,\nHas set me dreaming of the winds that play\nPast certain cliffs, along one certain beach,\nAnd turn the topmost edge of waves to spray:\nAh pleasant pebbly strand so far away,\nSo out of reach while quite within my reach,\nAs out of reach as India or Cathay!",
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "linked-jane-hirshfield-like-others",
    "format": "linked",
    "title": "Like Others",
    "author": "Jane Hirshfield",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/others-0",
    "text": "",
    "slot": 95,
    "palette": {
      "paper": "#e7c79d",
      "ink": "#1b140c",
      "muted": "#715b3e",
      "line": "rgba(27,20,12,.27)",
      "accent": "#285a76",
      "surface": "rgba(255,255,255,.18)",
      "glow": "rgba(40,90,118,.22)"
    }
  },
  {
    "id": "whitman-spain-1873-74",
    "slot": 96,
    "title": "Spain 1873–’74.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Spain%201873%E2%80%93%E2%80%9974.",
    "text": "OUT of the murk of heaviest clouds,\nOut of the feudal wrecks, and heap’d-up skeletons of kings,\nOut of that old entire European debris—the shatter’d mummeries,\nRuin’d cathedrals, crumble of palaces, tombs of priests,\nLo! Freedom’s features, fresh, undimm’d, look forth—the same immortal face\nlooks\nforth;\n(A glimpse as of thy mother’s face, Columbia,",
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "linked-jane-hirshfield-vest",
    "format": "linked",
    "title": "Vest",
    "author": "Jane Hirshfield",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/vest",
    "text": "",
    "slot": 97,
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "poe-bridal-ballad",
    "slot": 98,
    "title": "Bridal Ballad",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Bridal%20Ballad",
    "text": "The ring is on my hand,\nAnd the wreath is on my brow;\nSatins and jewels grand\nAre all at my command.\nAnd I am happy now.",
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "linked-naomi-shihab-nye-no-explosions",
    "format": "linked",
    "title": "No Explosions",
    "author": "Naomi Shihab Nye",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/no-explosions",
    "text": "",
    "slot": 99,
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "hopkins-to-what-serves-mortal-beauty",
    "slot": 100,
    "title": "To What Serves Mortal Beauty?",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20What%20Serves%20Mortal%20Beauty%3F",
    "text": "To what serves mortal beauty '—dangerous; does set danc-\ning blood—the O-seal-that-so ' feature, flung prouder form\nThan Purcell tune lets tread to? ' See: it does this: keeps warm\nMen's wits to the things that are; ' what good means—where a glance\nMaster more may than gaze, ' gaze out of countenance.\nThose lovely lads once, wet-fresh ' windfalls of war's storm,\nHow then should Gregory, a father, ' have gleanèd else from swarm-\ned Rome? But God to a nation ' dealt that day's dear chance.",
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "linked-naomi-shihab-nye-in-a-village-in-the-west-bank",
    "format": "linked",
    "title": "In a Village in the West Bank",
    "author": "Naomi Shihab Nye",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/village-west-bank",
    "text": "",
    "slot": 101,
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "browning-sonnet-33-yes-call-me-by-my-pet-name-let-me-hear",
    "slot": 102,
    "title": "Sonnet 33 - Yes, call me by my pet-name! let me hear",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Sonnet%2033%20-%20Yes%2C%20call%20me%20by%20my%20pet-name%21%20let%20me%20hear",
    "text": "Yes, call me by my pet-name! let me hear\nThe name I used to run at, when a child,\nFrom innocent play, and leave the cowslips piled,\nTo glance up in some face that proved me dear\nWith the look of its eyes. I miss the clear\nFond voices which, being drawn and reconciled\nInto the music of Heaven's undefiled,\nCall me no longer. Silence on the bier,",
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "linked-naomi-shihab-nye-one-boy-told-me",
    "format": "linked",
    "title": "One Boy Told Me",
    "author": "Naomi Shihab Nye",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/one-boy-told-me",
    "text": "",
    "slot": 103,
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "bronte-a-day-dream",
    "slot": 104,
    "title": "A Day Dream",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Day%20Dream",
    "text": "On a sunny brae, alone I lay\nOne summer afternoon;\nIt was the marriage-time of May\nWith her young lover, June.",
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "linked-naomi-shihab-nye-empty",
    "format": "linked",
    "title": "Empty",
    "author": "Naomi Shihab Nye",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/empty-0",
    "text": "",
    "slot": 105,
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "wilde-nay-lord-not-thus-white-lilies-in-the-spring",
    "slot": 106,
    "title": "Nay, Lord, not thus! white lilies in the spring,",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Nay%2C%20Lord%2C%20not%20thus%21%20white%20lilies%20in%20the%20spring%2C",
    "text": "Seven stars in the still water,\nAnd seven in the sky;\nSeven sins on the King's daughter,\nDeep in her soul to lie.",
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "linked-naomi-shihab-nye-my-memories-live-in-my-mother-s-phone",
    "format": "linked",
    "title": "My Memories Live in my Mother’s Phone",
    "author": "Naomi Shihab Nye",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/my-memories-live-my-mothers-phone",
    "text": "",
    "slot": 107,
    "palette": {
      "paper": "#e99b62",
      "ink": "#211005",
      "muted": "#6c3d23",
      "line": "rgba(33,16,5,.27)",
      "accent": "#5b285f",
      "surface": "rgba(255,255,255,.16)",
      "glow": "rgba(91,40,95,.22)"
    }
  },
  {
    "id": "wheatley-to-the-honourable-t-h-esq-on-the-death-of-his-daugh",
    "slot": 108,
    "title": "To The Honourable T. H. Esq; On the Death Of His Daughter",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20The%20Honourable%20T.%20H.%20Esq%3B%20On%20the%20Death%20Of%20His%20Daughter",
    "text": "WHILE deep you mourn beneath the cypress-shade\nThe hand of Death, and your dear daughter\nlaid\nIn dust, whose absence gives your tears to flow,\nAnd racks your bosom with incessant woe,\nLet Recollection take a tender part,\nAssuage the raging tortures of your heart,\nStill the wild tempest of tumultuous grief,",
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "linked-naomi-shihab-nye-what-she-said",
    "format": "linked",
    "title": "What She Said",
    "author": "Naomi Shihab Nye",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/what-she-said",
    "text": "",
    "slot": 109,
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "blake-the-little-boy-found",
    "slot": 110,
    "title": "The Little Boy Found",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Little%20Boy%20Found",
    "text": "The little boy lost in the lonely fen,\nLed by the wandering light,\nBegan to cry, but God, ever nigh,\nAppeared like his father, in white.",
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "linked-lucille-clifton-sal",
    "format": "linked",
    "title": "Sal",
    "author": "Lucille Clifton",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/sal",
    "text": "",
    "slot": 111,
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "keats-written-on-a-summer-evening",
    "slot": 112,
    "title": "Written On A Summer Evening",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Written%20On%20A%20Summer%20Evening",
    "text": "The church bells toll a melancholy round,\nCalling the people to some other prayers,\nSome other gloominess, more dreadful cares,\nMore harkening to the sermon's horrid sound.\nSurely the mind of man is closely bound\nIn some blind spell: seeing that each one tears\nHimself from fireside joys and Lydian airs,\nAnd converse high of those with glory crowned.",
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "linked-lucille-clifton-i-take-my-glasses-off",
    "format": "linked",
    "title": "i take my glasses off",
    "author": "Lucille Clifton",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/i-take-my-glasses",
    "text": "",
    "slot": 113,
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "burns-278-on-the-late-captain-grose-s-peregrinations",
    "slot": 114,
    "title": "278. On the late Captain Grose’s Peregrinations",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/278.%20On%20the%20late%20Captain%20Grose%E2%80%99s%20Peregrinations",
    "text": "HEAR, Land o’ Cakes, and brither Scots,\nFrae Maidenkirk to Johnie Groat’s;—\nIf there’s a hole in a’ your coats,\nI rede you tent it:\nA chield’s amang you takin notes,\nAnd, faith, he’ll prent it:",
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "linked-lucille-clifton-blackgirl-looking-at-blackbird",
    "format": "linked",
    "title": "blackgirl looking at blackbird",
    "author": "Lucille Clifton",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/blackgirl-looking-blackbird",
    "text": "",
    "slot": 115,
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "dunbar-merry-autumn",
    "slot": 116,
    "title": "Merry Autumn",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Merry%20Autumn",
    "text": "It's all a farce,—these tales they tell\nAbout the breezes sighing,\nAnd moans astir o'er field and dell,\nBecause the year is dying.",
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "linked-lucille-clifton-my-dream-about-the-second-coming",
    "format": "linked",
    "title": "my dream about the second coming",
    "author": "Lucille Clifton",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/my-dream-about-second-coming",
    "text": "",
    "slot": 117,
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "clare-what-is-life",
    "slot": 118,
    "title": "What is Life?",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/What%20is%20Life%3F",
    "text": "And what is Life?--An hour-glass on the run,\nA mist retreating from the morning sun,\nA busy, bustling, still repeated dream;\nIts length?--A minute's pause, a moment's thought;\nAnd happiness?-A bubble on the stream,\nThat in the act of seizing shrinks to nought.",
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "linked-lucille-clifton-a-dream-of-foxes",
    "format": "linked",
    "title": "a dream of foxes",
    "author": "Lucille Clifton",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/dream-foxes",
    "text": "",
    "slot": 119,
    "palette": {
      "paper": "#723d59",
      "ink": "#fff1df",
      "muted": "#d8b9c4",
      "line": "rgba(255,241,223,.24)",
      "accent": "#ffd166",
      "surface": "rgba(0,0,0,.12)",
      "glow": "rgba(255,209,102,.23)"
    }
  },
  {
    "id": "shakespeare-blow-blow-thou-winter-wind",
    "slot": 120,
    "title": "Blow, Blow, Thou Winter Wind",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Blow%2C%20Blow%2C%20Thou%20Winter%20Wind",
    "text": "Blow, blow, thou winter wind\nThou art not so unkind\nAs man's ingratitude;\nThy tooth is not so keen,\nBecause thou art not seen,\nAlthough thy breath be rude.",
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "linked-frank-o-hara-having-a-coke-with-you",
    "format": "linked",
    "title": "Having a Coke with You",
    "author": "Frank O’Hara",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/having-coke-you",
    "text": "",
    "slot": 121,
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "levy-a-minor-poet",
    "slot": 122,
    "title": "A Minor Poet",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Minor%20Poet",
    "text": "\"What should such fellows as I do,\nCrawling between earth and heaven?\"\nHere is the phial; here I turn the key\nSharp in the lock. Click!--there's no doubt it turned.\nThis is the third time; there is luck in threes--\nQueen Luck, that rules the world, befriend me now\nAnd freely I'll forgive you many wrongs!\nJust as the draught began to work, first time,",
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "linked-frank-o-hara-why-i-am-not-a-painter",
    "format": "linked",
    "title": "Why I Am Not a Painter",
    "author": "Frank O’Hara",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/why-i-am-not-painter",
    "text": "",
    "slot": 123,
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "stevenson-the-summer-sun-shone-round-me",
    "slot": 124,
    "title": "The Summer Sun Shone Round Me",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Summer%20Sun%20Shone%20Round%20Me",
    "text": "THE summer sun shone round me,\nThe folded valley lay\nIn a stream of sun and odour,\nThat sultry summer day.",
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "linked-frank-o-hara-the-day-lady-died",
    "format": "linked",
    "title": "The Day Lady Died",
    "author": "Frank O’Hara",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/day-lady-died",
    "text": "",
    "slot": 125,
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "dickinson-musicians-wrestle-everywhere",
    "slot": 126,
    "title": "Musicians wrestle everywhere",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Musicians%20wrestle%20everywhere",
    "text": "Musicians wrestle everywhere --\nAll day -- among the crowded air\nI hear the silver strife --\nAnd -- walking -- long before the morn --\nSuch transport breaks upon the town\nI think it that \"New Life\"!",
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "linked-frank-o-hara-personal-poem",
    "format": "linked",
    "title": "Personal Poem",
    "author": "Frank O’Hara",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/personal-poem",
    "text": "",
    "slot": 127,
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "rossetti-monna-innominata-a-sonnet-of-sonnets",
    "slot": 128,
    "title": "Monna Innominata: A Sonnet of Sonnets",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Monna%20Innominata%3A%20A%20Sonnet%20of%20Sonnets",
    "text": "1\nLo dм che han detto a' dolci amici addio. - Dante\nAmor, con quanto sforzo oggi mi vinci! - Petrarca\nCome back to me, who wait and watch for you:--\nOr come not yet, for it is over then,\nAnd long it is before you come again,\nSo far between my pleasures are and few.\nWhile, when you come not, what I do I do",
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "linked-frank-o-hara-ave-maria",
    "format": "linked",
    "title": "Ave Maria",
    "author": "Frank O’Hara",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/ave-maria",
    "text": "",
    "slot": 129,
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "whitman-o-sun-of-real-peace",
    "slot": 130,
    "title": "O Sun of Real Peace.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/O%20Sun%20of%20Real%20Peace.",
    "text": "O SUN of real peace! O hastening light!\nO free and extatic! O what I here, preparing, warble for!\nO the sun of the world will ascend, dazzling, and take his height—and you too, O my\nIdeal,\nwill surely ascend!\nO so amazing and broad—up there resplendent, darting and burning!\nO vision prophetic, stagger’d with weight of light! with pouring glories!\nO lips of my soul, already becoming powerless!",
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "linked-joy-harjo-without",
    "format": "linked",
    "title": "Without",
    "author": "Joy Harjo",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/without",
    "text": "",
    "slot": 131,
    "palette": {
      "paper": "#25304d",
      "ink": "#f8f3e8",
      "muted": "#b9bfd0",
      "line": "rgba(248,243,232,.24)",
      "accent": "#ffcb69",
      "surface": "rgba(0,0,0,.14)",
      "glow": "rgba(255,203,105,.24)"
    }
  },
  {
    "id": "poe-the-valley-of-unrest",
    "slot": 132,
    "title": "The Valley Of Unrest",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Valley%20Of%20Unrest",
    "text": "_Once_ it smiled a silent dell\nWhere the people did not dwell;\nThey had gone unto the wars,\nTrusting to the mild-eyed stars,\nNightly, from their azure towers,\nTo keep watch above the flowers,\nIn the midst of which all day\nThe red sun-light lazily lay,",
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "linked-joy-harjo-how-to-write-a-poem-in-a-time-of-war",
    "format": "linked",
    "title": "How to Write a Poem in a Time of War",
    "author": "Joy Harjo",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/how-write-poem-time-war",
    "text": "",
    "slot": 133,
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "hopkins-to-a-young-child",
    "slot": 134,
    "title": "To a Young Child",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20a%20Young%20Child",
    "text": "Margaret, are you grieving\nOver Goldengrove unleaving?\nLeaves, like the things of man, you\nWith your fresh thoughts care for, can you?\nAh! as the heart grows older\nIt will come to such sights colder\nBy and by, nor spare a sigh\nThough worlds of wanwood leafmeal lie;",
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "linked-joy-harjo-an-american-sunrise",
    "format": "linked",
    "title": "An American Sunrise",
    "author": "Joy Harjo",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/american-sunrise",
    "text": "",
    "slot": 135,
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "browning-the-cry-of-the-children",
    "slot": 136,
    "title": "The Cry Of The Children",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Cry%20Of%20The%20Children",
    "text": "Do ye hear the children weeping, O my brothers,\nEre the sorrow comes with years?\nThey are leaning their young heads against their mothers,\nAnd that cannot stop their tears.\nThe young lambs are bleating in the meadows,\nThe young birds are chirping in the nest,\nThe young fawns are playing with the shadows,\nThe young flowers are blowing toward the west—",
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "linked-joy-harjo-eagle-poem",
    "format": "linked",
    "title": "Eagle Poem",
    "author": "Joy Harjo",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/eagle-poem",
    "text": "",
    "slot": 137,
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "bronte-faith-and-despondency",
    "slot": 138,
    "title": "Faith and Despondency",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Faith%20and%20Despondency",
    "text": "The winter wind is loud and wild,\nCome close to me, my darling child;\nForsake thy books, and mateless play;\nAnd, while the night is gathering grey,\nWe'll talk its pensive hours away;--",
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "linked-stanley-kunitz-passing-through",
    "format": "linked",
    "title": "Passing Through",
    "author": "Stanley Kunitz",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/passing-through-0",
    "text": "",
    "slot": 139,
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "wilde-serenade-for-music",
    "slot": 140,
    "title": "Serenade (For Music)",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Serenade%20%28For%20Music%29",
    "text": "The western wind is blowing fair\nAcross the dark AEgean sea,\nAnd at the secret marble stair\nMy Tyrian galley waits for thee.\nCome down! the purple sail is spread,\nThe watchman sleeps within the town,\nO leave thy lily-flowered bed,\nO Lady mine come down, come down!",
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "linked-stanley-kunitz-the-abduction",
    "format": "linked",
    "title": "The Abduction",
    "author": "Stanley Kunitz",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/abduction",
    "text": "",
    "slot": 141,
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "wheatley-to-a-lady-and-her-children",
    "slot": 142,
    "title": "To a Lady and Her Children",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20a%20Lady%20and%20Her%20Children",
    "text": "O'erwhelming sorrow now demands my song:\nFrom death the overwhelming sorrow sprung.\nWhat flowing tears? What hearts with grief opprest?\nWhat sighs on sighs heave the fond parent's breast?\nThe brother weeps, the hapless sisters join\nTh' increasing woe, and swell the crystal brine;\nThe poor, who once his gen'rous bounty fed,\nDroop, and bewail their benefactor dead.",
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  },
  {
    "id": "linked-stanley-kunitz-the-layers",
    "format": "linked",
    "title": "The Layers",
    "author": "Stanley Kunitz",
    "source": "Academy of American Poets",
    "sourceUrl": "https://poets.org/poem/layers",
    "text": "",
    "slot": 143,
    "palette": {
      "paper": "#0b1525",
      "ink": "#edf4ff",
      "muted": "#9eacc0",
      "line": "rgba(237,244,255,.23)",
      "accent": "#83c5be",
      "surface": "rgba(255,255,255,.07)",
      "glow": "rgba(131,197,190,.23)"
    }
  }
];
