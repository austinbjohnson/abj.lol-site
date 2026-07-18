// Public-domain poems curated into the day's 144 ten-minute windows.
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
    "id": "blake-london",
    "slot": 1,
    "title": "London",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/London",
    "text": "I wandered through each chartered street,\nNear where the chartered Thames does flow,\nA mark in every face I meet,\nMarks of weakness, marks of woe.",
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
    "id": "keats-to-my-brothers",
    "slot": 3,
    "title": "To My Brothers",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20My%20Brothers",
    "text": "Small, busy flames play through the fresh-laid coals,\nAnd their faint cracklings o'er our silence creep\nLike whispers of the household gods that keep\nA gentle empire o'er fraternal souls.\nAnd while for rhymes I search around the poles,\nYour eyes are fixed, as in poetic sleep,\nUpon the lore so voluble and deep,\nThat aye at fall of night our care condoles.",
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
    "id": "whitman-primeval-my-love-for-the-woman-i-love",
    "slot": 5,
    "title": "Primeval my Love for the Woman I Love.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Primeval%20my%20Love%20for%20the%20Woman%20I%20Love.",
    "text": "PRIMEVAL my love for the woman I love,\nO bride! O wife! more resistless, more enduring than I can tell, the thought of you!\nThen separate, as disembodied, the purest born,\nThe ethereal, the last athletic reality, my consolation,\nI ascend—I float in the regions of your love, O man,\nO sharer of my roving life.",
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
    "id": "poe-to-helen",
    "slot": 7,
    "title": "To Helen",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20Helen",
    "text": "I saw thee once--once only--years ago:\nI must not say _how_ many--but _not_ many.\nIt was a July midnight; and from out\nA full-orbed moon, that, like thine own soul, soaring,\nSought a precipitate pathway up through heaven,\nThere fell a silvery-silken veil of light,\nWith quietude, and sultriness and slumber,\nUpon the upturn'd faces of a thousand",
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
    "id": "hopkins-spring",
    "slot": 9,
    "title": "Spring",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Spring",
    "text": "Nothing is so beautiful as spring—\nWhen weeds, in wheels, shoot long and lovely and lush;\nThrush's eggs look little low heavens, and thrush\nThrough the echoing timber does so rinse and wring\nThe ear, it strikes like lightnings to hear him sing;\nThe glassy peartree leaves and blooms, they brush\nThe descending blue; that blue is all in a rush\nWith richness; the racing lambs too have fair their fling.",
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
    "id": "browning-human-life-s-mystery",
    "slot": 11,
    "title": "Human Life’s Mystery",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Human%20Life%E2%80%99s%20Mystery",
    "text": "We sow the glebe, we reap the corn,\nWe build the house where we may rest,\nAnd then, at moments, suddenly,\nWe look up to the great wide sky,\nInquiring wherefore we were born…\nFor earnest or for jest?",
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
    "id": "bronte-tis-moonlight-summer-moonlight",
    "slot": 13,
    "title": "'Tis moonlight, summer moonlight",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/%27Tis%20moonlight%2C%20summer%20moonlight",
    "text": "'Tis moonlight, summer moonlight,\nAll soft and still and fair;\nThe solemn hour of midnight\nBreathes sweet thoughts everywhere,",
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
    "id": "wilde-charmides",
    "slot": 15,
    "title": "CHARMIDES",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/CHARMIDES",
    "text": "I.\nHe was a Grecian lad, who coming home\nWith pulpy figs and wine from Sicily\nStood at his galley's prow, and let the foam\nBlow through his crisp brown curls unconsciously,\nAnd holding wave and wind in boy's despite\nPeered from his dripping seat across the wet and stormy night.",
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
    "id": "emerson-loss-and-gain",
    "slot": 17,
    "title": "Loss And Gain",
    "author": "Ralph Waldo Emerson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Loss%20And%20Gain",
    "text": "Virtue runs before the muse\nAnd defies her skill,\nShe is rapt, and doth refuse\nTo wait a painter's will.",
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
    "id": "dickinson-the-words-the-happy-say",
    "slot": 19,
    "title": "The words the happy say",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20words%20the%20happy%20say",
    "text": "The words the happy say\nAre paltry melody\nBut those the silent feel\nAre beautiful --",
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
    "id": "rossetti-winter-my-secret",
    "slot": 21,
    "title": "Winter: My Secret",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Winter%3A%20My%20Secret",
    "text": "I tell my secret? No indeed, not I:\nPerhaps some day, who knows?\nBut not today; it froze, and blows, and snows,\nAnd you're too curious: fie!\nYou want to hear it? well:\nOnly, my secret's mine, and I won't tell.",
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
    "id": "wordsworth-lines-written-in-early-spring",
    "slot": 23,
    "title": "Lines Written In Early Spring",
    "author": "William Wordsworth",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Lines%20Written%20In%20Early%20Spring",
    "text": "I heard a thousand blended notes,\nWhile in a grove I sate reclined,\nIn that sweet mood when pleasant thoughts\nBring sad thoughts to the mind.",
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
    "id": "burns-177-elegy-on-the-death-of-sir-james-hunter-blair",
    "slot": 25,
    "title": "177. Elegy on the Death of Sir James Hunter Blair",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/177.%20Elegy%20on%20the%20Death%20of%20Sir%20James%20Hunter%20Blair",
    "text": "THE LAMP of day, with-ill presaging glare,\nDim, cloudy, sank beneath the western wave;\nTh’ inconstant blast howl’d thro’ the dark’ning air,\nAnd hollow whistled in the rocky cave.",
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
    "id": "dunbar-encouraged",
    "slot": 27,
    "title": "Encouraged",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Encouraged",
    "text": "Because you love me I have much achieved,\nHad you despised me then I must have failed,\nBut since I knew you trusted and believed,\nI could not disappoint you and so prevailed.",
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
    "id": "clare-summer-evening",
    "slot": 29,
    "title": "Summer Evening",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Summer%20Evening",
    "text": "The sinking sun is taking leave,\nAnd sweetly gilds the edge of Eve,\nWhile huddling clouds of purple dye\nGloomy hang the western sky.\nCrows crowd croaking over head,\nHastening to the woods to bed.\nCooing sits the lonely dove,\nCalling home her absent love.",
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
    "id": "shakespeare-spring-and-winter-ii",
    "slot": 31,
    "title": "Spring and Winter ii",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Spring%20and%20Winter%20ii",
    "text": "WHEN icicles hang by the wall,\nAnd Dick the shepherd blows his nail,\nAnd Tom bears logs into the hall,\nAnd milk comes frozen home in pail,\nWhen blood is nipp'd, and ways be foul,\nThen nightly sings the staring owl,\nTo-whit!\nTo-who!--a merry note,",
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
    "id": "levy-ballade-of-an-omnibus",
    "slot": 33,
    "title": "Ballade of an Omnibus",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Ballade%20of%20an%20Omnibus",
    "text": "\"To see my love suffices me.\"\n--Ballades in Blue China.\nSome men to carriages aspire;\nOn some the costly hansoms wait;\nSome seek a fly, on job or hire;\nSome mount the trotting steed, elate.\nI envy not the rich and great,\nA wandering minstrel, poor and free,",
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
    "id": "stevenson-flower-god-god-of-the-spring",
    "slot": 35,
    "title": "Flower God, God Of The Spring",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Flower%20God%2C%20God%20Of%20The%20Spring",
    "text": "FLOWER god, god of the spring, beautiful, bountiful,\nCold-dyed shield in the sky, lover of versicles,\nHere I wander in April\nCold, grey-headed; and still to my\nHeart, Spring comes with a bound, Spring the deliverer,\nSpring, song-leader in woods, chorally resonant;\nSpring, flower-planter in meadows,\nChild-conductor in willowy",
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
    "id": "wheatley-on-the-death-of-the-rev-dr-sewell",
    "slot": 37,
    "title": "On the Death of the Rev. Dr. Sewell",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/On%20the%20Death%20of%20the%20Rev.%20Dr.%20Sewell",
    "text": "Ere yet the morn its lovely blushes spread,\nSee Sewell number'd with the happy dead.\nHail, holy man, arriv'd th' immortal shore,\nThough we shall hear thy warning voice no more.\nCome, let us all behold with wishful eyes\nThe saint ascending to his native skies;\nFrom hence the prophet wing'd his rapt'rous way\nTo the blest mansions in eternal day.",
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
    "id": "blake-a-poison-tree",
    "slot": 39,
    "title": "A POISON TREE",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20POISON%20TREE",
    "text": "I was angry with my friend:\nI told my wrath, my wrath did end.\nI was angry with my foe:\nI told it not, my wrath did grow.",
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
    "id": "keats-to-homer",
    "slot": 41,
    "title": "To Homer",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20Homer",
    "text": "Standing aloof in giant ignorance,\nOf thee I hear and of the Cyclades,\nAs one who sits ashore and longs perchance\nTo visit dolphin-coral in deep seas.\nSo thou wast blind;--but then the veil was rent,\nFor Jove uncurtain'd Heaven to let thee live,\nAnd Neptune made for thee a spumy tent,\nAnd Pan made sing for thee his forest-hive;",
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
    "id": "burns-306-election-ballad-at-close-of-contest-for-representi",
    "slot": 43,
    "title": "306. Election Ballad at close of Contest for representing the Dumfries Burghs, 1790",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/306.%20Election%20Ballad%20at%20close%20of%20Contest%20for%20representing%20the%20Dumfries%20Burghs%2C%201790",
    "text": "FINTRY, my stay in wordly strife,\nFriend o’ my muse, friend o’ my life,\nAre ye as idle’s I am?\nCome then, wi’ uncouth kintra fleg,\nO’er Pegasus I’ll fling my leg,\nAnd ye shall see me try him.",
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
    "id": "dunbar-sympathy",
    "slot": 45,
    "title": "Sympathy",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Sympathy",
    "text": "I know what the caged bird feels, alas!\nWhen the sun is bright on the upland slopes;\nWhen the wind stirs soft through the springing grass,\nAnd the river flows like a stream of glass;\nWhen the first bird sings and the first bud opes,\nAnd the faint perfume from its chalice steals--\nI know what the caged bird feels!",
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
    "id": "clare-from-the-parish-a-satire",
    "slot": 47,
    "title": "From \"The Parish: A Satire\"",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/From%20%22The%20Parish%3A%20A%20Satire%22",
    "text": "In politics and politicians' lies\nThe modern farmer waxes wondrous wise;\nOpinionates with wisdom all compact,\nAnd een could tell a nation how to act;\nThrows light on darkness with excessive skill,\nKnows who acts well and whose designs are ill,\nProves half the members nought but bribery's tools,\nAnd calls the past a dull dark age of fools.",
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
    "id": "shakespeare-orpheus-with-his-lute-made-trees",
    "slot": 49,
    "title": "Orpheus with his Lute Made Trees",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Orpheus%20with%20his%20Lute%20Made%20Trees",
    "text": "Orpheus with his lute made trees,\nAnd the mountain tops that freeze,\nBow themselves, when he did sing:\nTo his music plants and flowers\nEver sprung; as sun and showers\nThere had made a lasting spring.",
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
    "id": "levy-a-prayer",
    "slot": 51,
    "title": "A Prayer",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Prayer",
    "text": "Since that I may not have\nLove on this side the grave,\nLet me imagine Love.\nSince not mine is the bliss\nOf 'claspt hands and lips that kiss,'\nLet me in dreams it prove.\nWhat tho' as the years roll\nNo soul shall melt to my soul,",
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
    "id": "stevenson-envoy-for-a-child-s-garden-of-verses",
    "slot": 53,
    "title": "Envoy For \"A Child's Garden Of Verses\"",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Envoy%20For%20%22A%20Child%27s%20Garden%20Of%20Verses%22",
    "text": "WHETHER upon the garden seat\nYou lounge with your uplifted feet\nUnder the May's whole Heaven of blue;\nOr whether on the sofa you,\nNo grown up person being by,\nDo some soft corner occupy;\nTake you this volume in your hands\nAnd enter into other lands,",
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
    "id": "wheatley-niobe-in-distress",
    "slot": 55,
    "title": "Niobe in Distress",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Niobe%20in%20Distress",
    "text": "Apollo's wrath to man the dreadful spring\nOf ills innum'rous, tuneful goddess, sing!\nThou who did'st first th' ideal pencil give,\nAnd taught'st the painter in his works to live,\nInspire with glowing energy of thought,\nWhat Wilson painted, and what Ovid wrote.\nMuse! lend thy aid, nor let me sue in vain,\nTho' last and meanest of the rhyming train!",
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
    "id": "blake-thel-s-motto",
    "slot": 57,
    "title": "Thel's Motto",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Thel%27s%20Motto",
    "text": "Does the Eagle know what is in the pit?\nOr wilt thou go ask the Mole:\nCan Wisdom be put in a silver rod?\nOr Love in a golden bowl?",
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
    "id": "keats-give-me-women-wine-and-snuff",
    "slot": 59,
    "title": "Give Me Women, Wine, and Snuff",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Give%20Me%20Women%2C%20Wine%2C%20and%20Snuff",
    "text": "GIVE me women, wine, and snuff\nUntill I cry out \"hold, enough!\"\nYou may do so sans objection\nTill the day of resurrection:\nFor, bless my beard, they aye shall be\nMy beloved Trinity.",
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
    "id": "burns-tam-o-shanter",
    "slot": 61,
    "title": "Tam O'Shanter",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Tam%20O%27Shanter",
    "text": "A Tale\n\"Of Brownyis and of Bogilis full is this Buke.\"\n—Gawin Douglas.\nWhen chapman billies leave the street,\nAnd drouthy neebors neebors meet,\nAs market-days are wearing late,\nAn' folk begin to tak' the gate;\nWhile we sit bousing at the nappy,",
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
    "id": "dunbar-encouragement",
    "slot": 63,
    "title": "Encouragement",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Encouragement",
    "text": "WHO dat knockin' at de do'?\nWhy, Ike Johnson, -- yes, fu' sho!\nCome in, Ike. I's mighty glad\nYou come down. I t'ought you's\nmad\nAt me 'bout de othah night,\nAn' was stayin' 'way fu' spite.\nSay, now, was you mad fu' true",
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
    "id": "clare-ploughman-singing",
    "slot": 65,
    "title": "Ploughman Singing",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Ploughman%20Singing",
    "text": "Here morning in the ploughman's songs is met\nEre yet one footstep shows in all the sky,\nAnd twilight in the east, a doubt as yet,\nShows not her sleeve of grey to know her bye.\nWoke early, I arose and thought that first\nIn winter time of all the world was I.\nThe old owls might have hallooed if they durst,\nBut joy just then was up and whistled bye",
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
    "id": "shakespeare-winter",
    "slot": 67,
    "title": "Winter",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Winter",
    "text": "When icicles hang by the wall\nAnd Dick the shepherd blows his nail\nAnd Tom bears logs into the hall,\nAnd milk comes frozen home in pail,\nWhen Blood is nipped and ways be foul,\nThen nightly sings the staring owl,\nTu-who;\nTu-whit, tu-who: a merry note,",
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
    "id": "levy-the-birch-tree-at-loschwitz",
    "slot": 69,
    "title": "The Birch-Tree at Loschwitz",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Birch-Tree%20at%20Loschwitz",
    "text": "At Loschwitz above the city\nThe air is sunny and chill;\nThe birch-trees and the pine-trees\nGrow thick upon the hill.",
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
    "id": "stevenson-the-wind-is-without-there-and-howls-in-the-trees",
    "slot": 71,
    "title": "The Wind Is Without There And Howls In The Trees",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Wind%20Is%20Without%20There%20And%20Howls%20In%20The%20Trees",
    "text": "THE wind is without there and howls in the trees,\nAnd the rain-flurries drum on the glass:\nAlone by the fireside with elbows on knees\nI can number the hours as they pass.\nYet now, when to cheer me the crickets begin,\nAnd my pipe is just happily lit,\nBelieve me, my friend, tho' the evening draws in,\nThat not all uncontested I sit.",
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
    "id": "wheatley-to-a-gentleman-and-lady-on-the-death-of-the-lady-s-",
    "slot": 73,
    "title": "To a Gentleman and Lady on the Death of the Lady's Brother and Sister",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20a%20Gentleman%20and%20Lady%20on%20the%20Death%20of%20the%20Lady%27s%20Brother%20and%20Sister",
    "text": "On Death's domain intent I fix my eyes,\nWhere human nature in vast ruin lies,\nWith pensive mind I search the drear abode,\nWhere the great conqu'ror has his spoils bestow'd;\nThere there the offspring of six thousand years\nIn endless numbers to my view appears:\nWhole kingdoms in his gloomy den are thrust,\nAnd nations mix with their primeval dust:",
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
    "id": "blake-the-blossom",
    "slot": 75,
    "title": "The Blossom",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Blossom",
    "text": "Merry, merry sparrow!\nUnder leaves so green\nA happy blossom\nSees you, swift as arrow,\nSeek your cradle narrow,\nNear my bosom.\nPretty, pretty robin!\nUnder leaves so green",
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
    "id": "keats-to-autumn",
    "slot": 77,
    "title": "To Autumn",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20Autumn",
    "text": "I\nSeason of mists and mellow fruitfulness,\nClose bosom-friend of the maturing sun;\nConspiring with him how to load and bless\nWith fruit the vines that round the thatch-eves run;\nTo bend with apples the moss'd cottage-trees,\nAnd fill all fruit with ripeness to the core;\nTo swell the gourd, and plump the hazel shells",
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
    "id": "burns-92-suppressed-stanzas-of-the-vision",
    "slot": 79,
    "title": "92. Suppressed Stanzas of “The Vision”",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/92.%20Suppressed%20Stanzas%20of%20%E2%80%9CThe%20Vision%E2%80%9D",
    "text": "WITH secret throes I marked that earth,\nThat cottage, witness of my birth;\nAnd near I saw, bold issuing forth\nIn youthful pride,\nA Lindsay race of noble worth,\nFamed far and wide.",
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
    "id": "dunbar-little-brown-baby",
    "slot": 81,
    "title": "Little Brown Baby",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Little%20Brown%20Baby",
    "text": "Little brown baby wif spa'klin' eyes,\nCome to yo' pappy an' set on his knee.\nWhat you been doin', suh -- makin' san' pies?\nLook at dat bib -- you's es du'ty ez me.\nLook at dat mouf -- dat's merlasses, I bet;\nCome hyeah, Maria, an' wipe off his han's.\nBees gwine to ketch you an' eat you up yit,\nBein' so sticky an sweet -- goodness lan's!",
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
    "id": "clare-grasshoppers",
    "slot": 83,
    "title": "Grasshoppers",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Grasshoppers",
    "text": "Grasshoppers go in many a thumming spring\nAnd now to stalks of tasseled sow-grass cling,\nThat shakes and swees awhile, but still keeps straight;\nWhile arching oxeye doubles with his weight.\nNext on the cat-tail-grass with farther bound\nHe springs, that bends until they touch the ground.",
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
    "id": "shakespeare-spring",
    "slot": 85,
    "title": "Spring",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Spring",
    "text": "When daisies pied, and violets blue,\nAnd lady-smocks all silver-white,\nAnd cuckoo-buds of yellow hue\nDo paint the meadows with delight,\nThe cuckoo then, on every tree,\nMocks married men, for thus sings he:\n'Cuckoo!\nCuckoo, cuckoo!' O word of fear,",
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
    "id": "levy-a-london-plane-tree",
    "slot": 87,
    "title": "A London Plane-Tree",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20London%20Plane-Tree",
    "text": "Green is the plane-tree in the square,\nThe other trees are brown;\nThey droop and pine for country air;\nThe plane-tree loves the town.",
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
    "id": "stevenson-winter-time",
    "slot": 89,
    "title": "Winter-Time",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Winter-Time",
    "text": "Late lies the wintry sun a-bed,\nA frosty, fiery sleepy-head;\nBlinks but an hour or two; and then,\nA blood-red orange, sets again.",
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
    "id": "wheatley-an-hymn-to-humanity-to-s-p-g-esp",
    "slot": 91,
    "title": "An Hymn To Humanity (To S.P.G. Esp)",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/An%20Hymn%20To%20Humanity%20%28To%20S.P.G.%20Esp%29",
    "text": "O! for this dark terrestrial ball\nForsakes his azure-paved hall\nA prince of heav'nly birth!\nDivine Humanity behold,\nWhat wonders rise, what charms unfold\nAt his descent to earth!",
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
    "id": "blake-the-little-boy-lost",
    "slot": 93,
    "title": "The Little Boy Lost",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Little%20Boy%20Lost",
    "text": "\"Father, father, where are you going?\nOh do not walk so fast!\nSpeak, father, speak to your little boy,\nOr else I shall be lost.\"",
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
    "id": "keats-song-of-the-indian-maid-from-endymion",
    "slot": 95,
    "title": "Song of the Indian Maid, from 'Endymion'",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Song%20of%20the%20Indian%20Maid%2C%20from%20%27Endymion%27",
    "text": "O SORROW!\nWhy dost borrow\nThe natural hue of health, from vermeil lips?--\nTo give maiden blushes\nTo the white rose bushes?\nOr is it thy dewy hand the daisy tips?",
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
    "id": "burns-293-the-whistle-a-ballad",
    "slot": 97,
    "title": "293. The Whistle: A Ballad",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/293.%20The%20Whistle%3A%20A%20Ballad",
    "text": "I SING of a Whistle, a Whistle of worth,\nI sing of a Whistle, the pride of the North.\nWas brought to the court of our good Scottish King,\nAnd long with this Whistle all Scotland shall ring.",
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
    "id": "dunbar-summer-in-the-south",
    "slot": 99,
    "title": "Summer in the South",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Summer%20in%20the%20South",
    "text": "The Oriole sings in the greening grove\nAs if he were half-way waiting,\nThe rosebuds peep from their hoods of green,\nTimid, and hesitating.\nThe rain comes down in a torrent sweep\nAnd the nights smell warm and pinety,\nThe garden thrives, but the tender shoots\nAre yellow-green and tiny.",
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
    "id": "clare-idle-fame",
    "slot": 101,
    "title": "Idle Fame",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Idle%20Fame",
    "text": "I would not wish the burning blaze\nOf fame around a restless world,\nThe thunder and the storm of praise\nIn crowded tumults heard and hurled.\nI would not be a flower to stand\nThe stare of every passer-bye;\nBut in some nook of fairyland,\nSeen in the praise of beauty's eye.",
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
    "id": "shakespeare-spring-and-winter-i",
    "slot": 103,
    "title": "Spring and Winter i",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Spring%20and%20Winter%20i",
    "text": "WHEN daisies pied and violets blue,\nAnd lady-smocks all silver-white,\nAnd cuckoo-buds of yellow hue\nDo paint the meadows with delight,\nThe cuckoo then, on every tree,\nMocks married men; for thus sings he,\nCuckoo!\nCuckoo, cuckoo!--O word of fear,",
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
    "id": "levy-ballade-of-a-special-edition",
    "slot": 105,
    "title": "Ballade of a Special Edition",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Ballade%20of%20a%20Special%20Edition",
    "text": "He comes; I hear him up the street--\nBird of ill omen, flapping wide\nThe pinion of a printed sheet,\nHis hoarse note scares the eventide.\nOf slaughter, theft, and suicide\nHe is the herald and the friend;\nNow he vociferates with pride--\nA double murder in Mile End!",
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
    "id": "stevenson-light-as-the-linnet-on-my-way-i-start",
    "slot": 107,
    "title": "Light As The Linnet On My Way I Start",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Light%20As%20The%20Linnet%20On%20My%20Way%20I%20Start",
    "text": "LIGHT as the linnet on my way I start,\nFor all my pack I bear a chartered heart.\nForth on the world without a guide or chart,\nContent to know, through all man's varying fates,\nThe eternal woman by the wayside waits.",
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
    "id": "dickinson-i-years-had-been-from-home",
    "slot": 109,
    "title": "I Years had been from Home",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/I%20Years%20had%20been%20from%20Home",
    "text": "I Years had been from Home\nAnd now before the Door\nI dared not enter, lest a Face\nI never saw before",
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
    "id": "rossetti-from-later-life",
    "slot": 111,
    "title": "From “Later Life”",
    "author": "Christina Rossetti",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/From%20%E2%80%9CLater%20Life%E2%80%9D",
    "text": "VI\nWe lack, yet cannot fix upon the lack:\nNot this, nor that; yet somewhat, certainly.\nWe see the things we do not yearn to see\nAround us: and what see we glancing back?\nLost hopes that leave our hearts upon the rack,\nHopes that were never ours yet seem’d to be,\nFor which we steer’d on life’s salt stormy sea",
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
    "id": "whitman-what-general-has-a-good-army",
    "slot": 113,
    "title": "What General has a Good Army.",
    "author": "Walt Whitman",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/What%20General%20has%20a%20Good%20Army.",
    "text": "WHAT General has a good army in himself, has a good army;\nHe happy in himself, or she happy in herself, is happy,\nBut I tell you you cannot be happy by others, any more than you can beget or conceive a\nchild\nby others.",
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
    "id": "poe-to-one-in-paradise",
    "slot": 115,
    "title": "To One In Paradise",
    "author": "Edgar Allan Poe",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20One%20In%20Paradise",
    "text": "Thou wast that all to me, love,\nFor which my soul did pine--\nA green isle in the sea, love,\nA fountain and a shrine,\nAll wreathed with fairy fruits and flowers,\nAnd all the flowers were mine.",
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
    "id": "hopkins-heaven-haven-a-nun-takes-the-veil",
    "slot": 117,
    "title": "Heaven--Haven: A Nun Takes The Veil",
    "author": "Gerard Manley Hopkins",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Heaven--Haven%3A%20A%20Nun%20Takes%20The%20Veil",
    "text": "I have desired to go\nWhere springs not fail,\nTo fields where flies no sharp and sided hail\nAnd a few lilies blow.",
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
    "id": "browning-sonnet-16-and-yet-because-thou-overcomest-so",
    "slot": 119,
    "title": "Sonnet 16 - And yet, because thou overcomest so",
    "author": "Elizabeth Barrett Browning",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Sonnet%2016%20-%20And%20yet%2C%20because%20thou%20overcomest%20so",
    "text": "And yet, because thou overcomest so,\nBecause thou art more noble and like a king,\nThou canst prevail against my fears and fling\nThy purple round me, till my heart shall grow\nToo close against thine heart henceforth to know\nHow it shook when alone. Why, conquering\nMay prove as lordly and complete a thing\nIn lifting upward, as in crushing low!",
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
    "id": "bronte-sympathy",
    "slot": 121,
    "title": "Sympathy",
    "author": "Emily Bronte",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Sympathy",
    "text": "There should be no despair for you\nWhile nightly stars are burning,\nWhile evening pours its silent dew\nAnd sunshine gilds the morning.\nThere should be no despair - though tears\nMay flow down like a river:\nAre not the best beloved of years\nAround your heart forever?",
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
    "id": "wilde-roses-and-rue",
    "slot": 123,
    "title": "Roses And Rue",
    "author": "Oscar Wilde",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Roses%20And%20Rue",
    "text": "(To L. L.)\nCould we dig up this long-buried treasure,\nWere it worth the pleasure,\nWe never could learn love's song,\nWe are parted too long.",
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
    "id": "wheatley-a-funeral-poem-on-the-death-of-c-e",
    "slot": 125,
    "title": "A Funeral Poem on the Death of C.E.",
    "author": "Phillis Wheatley",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/A%20Funeral%20Poem%20on%20the%20Death%20of%20C.E.",
    "text": "Through airy roads he wings his instant flight\nTo purer regions of celestial light;\nEnlarg'd he sees unnumber'd systems roll,\nBeneath him sees the universal whole,\nPlanets on planets run their destin'd round,\nAnd circling wonders fill the vast profound.\nTh' ethereal now, and now th' empyreal skies\nWith growing splendors strike his wond'ring eyes:",
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
    "id": "blake-spring",
    "slot": 127,
    "title": "Spring",
    "author": "William Blake",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Spring",
    "text": "Sound the flute!\nNow it's mute!\nBird's delight,\nDay and night,\nNightingale,\nIn the dale,\nLark in sky,--\nMerrily,",
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
    "id": "keats-to-my-brother-george",
    "slot": 129,
    "title": "To My Brother George",
    "author": "John Keats",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/To%20My%20Brother%20George",
    "text": "Many the wonders I this day have seen:\nThe sun, when first he kissed away the tears\nThat filled the eyes of Morn;—the laurelled peers\nWho from the feathery gold of evening lean;—\nThe ocean with its vastness, its blue green,\nIts ships, its rocks, its caves, its hopes, its fears,\nIts voice mysterious, which whoso hears\nMust think on what will be, and what has been.",
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
    "id": "burns-128-the-farewell",
    "slot": 131,
    "title": "128. The Farewell",
    "author": "Robert Burns",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/128.%20The%20Farewell",
    "text": "FAREWELL, old Scotia’s bleak domains,\nFar dearer than the torrid plains,\nWhere rich ananas blow!\nFarewell, a mother’s blessing dear!\nA borther’s sigh! a sister’s tear!\nMy Jean’s heart-rending throe!\nFarewell, my Bess! tho’ thou’rt bereft\nOf my paternal care.",
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
    "id": "dunbar-common-things",
    "slot": 133,
    "title": "Common Things",
    "author": "Paul Laurence Dunbar",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Common%20Things",
    "text": "I like to hear of wealth and gold,\nAnd El Doradoes in their glory;\nI like for silks and satins bold\nTo sweep and rustle through a story.",
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
    "id": "clare-the-gipsy-s-camp",
    "slot": 135,
    "title": "The Gipsy's Camp",
    "author": "John Clare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/The%20Gipsy%27s%20Camp",
    "text": "How oft on Sundays, when I'd time to tramp,\nMy rambles led me to a gipsy's camp,\nWhere the real effigy of midnight hags,\nWith tawny smoked flesh and tattered rags,\nUncouth-brimmed hat, and weather-beaten cloak,\nNeath the wild shelter of a knotty oak,\nAlong the greensward uniformly pricks\nHer pliant bending hazel's arching sticks:",
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
    "id": "shakespeare-under-the-greenwood-tree",
    "slot": 137,
    "title": "Under the Greenwood Tree",
    "author": "William Shakespeare",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Under%20the%20Greenwood%20Tree",
    "text": "Under the greenwood tree\nWho loves to lie with me,\nAnd turn his merry note\nUnto the sweet bird's throat,\nCome hither, come hither, come hither:\nHere shall he see\nNo enemy\nBut winter and rough weather.",
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
    "id": "levy-in-the-black-forest",
    "slot": 139,
    "title": "In the Black Forest",
    "author": "Amy Levy",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/In%20the%20Black%20Forest",
    "text": "I lay beneath the pine trees,\nAnd looked aloft, where, through\nThe dusky, clustered tree-tops,\nGleamed rent, gay rifts of blue.",
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
    "id": "stevenson-music-at-the-villa-marina",
    "slot": 141,
    "title": "Music At The Villa Marina",
    "author": "Robert Louis Stevenson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Music%20At%20The%20Villa%20Marina",
    "text": "FOR some abiding central source of power,\nStrong-smitten steady chords, ye seem to flow\nAnd, flowing, carry virtue. Far below,\nThe vain tumultuous passions of the hour\nFleet fast and disappear; and as the sun\nShines on the wake of tempests, there is cast\nO'er all the shattered ruins of my past\nA strong contentment as of battles won.",
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
    "id": "dickinson-where-thou-art-that-is-home",
    "slot": 143,
    "title": "Where Thou art -- that -- is Home --",
    "author": "Emily Dickinson",
    "source": "PoetryDB public-domain archive",
    "sourceUrl": "https://poetrydb.org/title/Where%20Thou%20art%20--%20that%20--%20is%20Home%20--",
    "text": "Where Thou art -- that -- is Home --\nCashmere -- or Calvary -- the same --\nDegree -- or Shame --\nI scarce esteem Location's Name --\nSo I may Come --",
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
