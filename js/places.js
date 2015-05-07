/**
 * Created by oded on 05/05/2015.
 */
var nationZoom = window.screen.availWidth > 480 ? 4 : 3;
var initialZoom = window.screen.availWidth > 480 ? 3 : 2;

var places = [
    //nations
    {value: "Anderfels", data:{"zoom": nationZoom, "latLng": L.latLng(69.09993967425089,-97.55859375)}},
    {value: "Tevinter Imperium", data:{"zoom": nationZoom, "latLng": L.latLng(57.468589192089325,-9.580078125)}},
    {value: "Nevarra", data:{"zoom": nationZoom, "latLng": L.latLng(32.175612478499325,-11.42578125)}},
    {value: "Orlais", data:{"zoom": nationZoom, "latLng": L.latLng(-20.385825381874263,-71.455078125)}},
    {value: "Ferelden", data:{"zoom": nationZoom, "latLng": L.latLng(-33.21111647241684,48.69140625)}},
    {value: "Free Marches", data:{"zoom": nationZoom, "latLng": L.latLng(29.916852233070173,59.4140625)}},
    {value: "Antiva", data:{"zoom": nationZoom, "latLng": L.latLng(61.85614879566797,78.837890625)}},
    {value: "Rivain", data:{"zoom": nationZoom, "latLng": L.latLng(74.16408546675687,118.38867187500001)}},
    {value: "Par Vollen", data:{"zoom": nationZoom, "latLng": L.latLng(83.46037681466397,116.19140625)}},
    {value: "Seheron", data:{"zoom": nationZoom, "latLng": L.latLng(80.04286374779889,0.87890625)}},
    {value: "Kal-Sharok", data:{"zoom": nationZoom, "latLng": L.latLng(45.460130637921004,-88.9453125)}},

    //seas & lakes
    {value: "Colean Sea", data:{"zoom": 4, "latLng": L.latLng(81.65968514918798,-48.69140625)}},
    {value: "Nocen Sea", data:{"zoom": 4, "latLng": L.latLng(70.0205873017406,-13.53515625)}},
    {value: "Boeric Ocean", data:{"zoom": 4, "latLng": L.latLng(83.15311098437887,40.693359375)}},
    {value: "Venefication Sea", data:{"zoom": 4, "latLng": L.latLng(77.8418477505252,93.33984375)}},
    {value: "The Northern Passage", data:{"zoom": 4, "latLng": L.latLng(81.33484424149815,121.640625)}},
    {value: "Rialto Bay", data:{"nation": "Antiva", "zoom": 4, "latLng": L.latLng(63.54855223203644,107.841796875)}},
    {value: "Amaranthine Ocean", data:{"zoom": 4, "latLng": L.latLng(13.923403897723347,144.140625)}},
    {value: "The Frozen Seas", data:{"zoom": 4, "latLng": L.latLng(-54.97761367069625,143.525390625)}},
    {value: "Waking Sea", data:{"zoom": 4, "latLng": L.latLng(-10.660607953624762,2.197265625)}},
    {value: "Lake Calenhad", data:{"nation": "Ferelden", "zoom": 4, "latLng": L.latLng(-36.73888412439431,21.708984375)}},
    {value: "Lake Celestine", data:{"nation": "Orlais", "zoom": 4, "latLng": L.latLng(-40.11168866559596,-65.302734375)}},
    {value: "Sundered Sea", data:{"zoom": 4, "latLng": L.latLng(-60.716197793577145,-130.693359375)}},
    {value: "Volca Sea", data:{"zoom": 4, "latLng": L.latLng(70.34831755984781,-157.939453125)}},
    {value: "Minanter River", data:{"zoom": 4, "latLng": L.latLng(35.746512259918504,41.484375)}},
    {value: "Ventosus Straits", data:{"zoom": 4, "latLng": L.latLng(76.98014914976217,10.72265625)}},

    //Seheron
    {value: "Seheron", data:{"nation":"Seheron","zoom": 4, "latLng": L.latLng(79.73428059335232,24.609375)}},
    {value: "Alam", data:{"nation":"Seheron","zoom": 4, "latLng": L.latLng(78.00732483005181,-5.9765625)}},

    //Par Vollen
    {value: "Qunandar", data:{"nation":"Par Vollen","zoom": 4, "latLng": L.latLng(83.28798543651806,93.42773437499999)}},

    //Rivain
    {value: "Kont-arr", data:{"nation":"Rivain","zoom": 4, "latLng": L.latLng(78.09829559916763,114.873046875)}},
    {value: "Seere", data:{"nation":"Rivain","zoom": 4, "latLng": L.latLng(79.56054626376367,127.08984375000001)}},
    {value: "Daismuid", data:{"nation":"Rivain","zoom": 4, "latLng": L.latLng(68.366801093914,117.24609374999999)}},
    {value: "Llomerynn", data:{"nation":"Rivain","zoom": 4, "latLng": L.latLng(53.067626642387374,125.68359374999999)}},

    //Antiva
    {value: "Ayesleigh", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(70.61261423801925,101.513671875)}},
    {value: "Afsaana", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(68.43151284537514,103.35937499999999)}},
    {value: "Treviso", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(66.44310650816469,92.10937499999999)}},
    {value: "Antiva City", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(59.7563950493563,91.93359375)}},
    {value: "Rialto", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(55.32914440840507,99.84374999999999)}},
    {value: "Salle", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(53.4357192066942,106.69921875)}},
    {value: "Bastion", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(48.63290858589532,106.69921875)}},
    {value: "Ansburg", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(43.89789239125797,80.771484375)}},
    {value: "Green Dales", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(47.57652571374621,67.060546875)}},
    {value: "The Weyrs", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(53.067626642387374,82.001953125)}},
    {value: "Seleny", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(58.90464570302001,71.279296875)}},
    {value: "The Drylands", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(67.06743335108298,72.158203125)}},
    {value: "Brynnlaw", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(72.97118902284586,73.30078125)}},
    {value: "The White Spire", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(74.75274618925876,74.53125)}},
    {value: "Arlathan Forest", data:{"nation":"Antiva","zoom": 4, "latLng": L.latLng(73.20131708476698,54.931640625)}},

    //Free Marches
    {value: "Wycome", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(41.57436130598913,105.29296874999999)}},
    {value: "Hercinia", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(27.371767300523047,98.87695312499999)}},
    {value: "Markham", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(24.28702686537645,77.783203125)}},
    {value: "Ostwick", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(13.325484885597936,75.498046875)}},
    {value: "Wildervale", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(23.88583769986199,25.224609375)}},
    {value: "Vimmark Mountains", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(11.953349393643416,45.791015625)}},
    {value: "Kirkwall", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(3.337953961416485,32.87109375)}},
    {value: "Planasene Forest", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(-0.08789059053082422,15.468749999999998)}},
    {value: "Starkhaven", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(35.17380831799959,48.33984375)}},
    {value: "Tantervale", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(35.38904996691167,19.335937499999996)}},
    {value: "Estwach", data:{"nation":"Free Marches","zoom": 4, "latLng": L.latLng(30.977609093348686,117.42187500000001)}},

    //Tevinter Imperium
    {value: "Qarinus", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(73.42842364106816,24.873046874999996)}},
    {value: "Eyes of Nocen", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(75.93088543216642,14.94140625)}},
    {value: "Carastes", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(71.41317683396566,8.96484375)}},
    {value: "Neromenian", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(66.26685631430843,0.263671875)}},
    {value: "Vyrantium", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(61.270232790000634,-12.568359375)}},
    {value: "Marnus Pell", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(65.47650756256367,-32.51953125)}},
    {value: "Aseriel", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(67.5085683629386,-34.013671875)}},
    {value: "Minrathous", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(76.31035754301745,-27.59765625)}},
    {value: "Valarian Fields", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(75.342281944273,-33.3984375)}},
    {value: "The High Reaches", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(75.07300992968266,-41.923828125)}},
    {value: "The Imperial Highway", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(51.01375465718821,-21.09375)}},
    {value: "Val Dorma", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(63.39152174400882,-44.736328125)}},
    {value: "Nessum", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(45.460130637921004,-45.615234375)}},
    {value: "Caimen Brea", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(42.48830197960227,-43.33007812499999)}},
    {value: "Trevis", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(39.30029918615029,-38.759765625)}},
    {value: "Perivantium", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(49.89463439573421,14.677734375000002)}},
    {value: "The Hundred Pillars", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(59.130863097255904,32.783203125)}},
    {value: "Marothius", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(63.074865690586634,26.279296875)}},
    {value: "The Silent Plains", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(40.04443758460859,-7.119140625)}},
    {value: "Solas", data:{"nation":"Tevinter Imperium","zoom": 4, "latLng": L.latLng(47.69497434186282,-2.724609375)}},

    //Nevarra
    {value: "Cumberland", data:{"nation":"Nevarra","zoom": 4, "latLng": L.latLng(2.5479878714713706,-9.4921875)}},
    {value: "Hasmal", data:{"nation":"Nevarra","zoom": 4, "latLng": L.latLng(36.87962060502676,13.095703125)}},
    {value: "Hunter Fell", data:{"nation":"Nevarra","zoom": 4, "latLng": L.latLng(25.958044673317843,-32.34375)}},
    {value: "Nevarra City", data:{"nation":"Nevarra","zoom": 4, "latLng": L.latLng(25.085598897064777,-17.666015625)}},
    {value: "Perendale", data:{"nation":"Nevarra","zoom": 4, "latLng": L.latLng(35.746512259918504,-66.70898437499999)}},
    {value: "The Fields of Ghislain", data:{"nation":"Nevarra","zoom": 4, "latLng": L.latLng(17.560246503294913,-39.7265625)}},

    //Anderfels
    {value: "Hossberg ", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(69.06856318696033,-77.95898437499999)}},
    {value: "Kassel", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(74.86788912917916,-71.015625)}},
    {value: "Laysh", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(68.942606818121,-146.865234375)}},
    {value: "Nordbotten", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(63.39152174400882,-110.91796875)}},
    {value: "Tallo", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(77.23507365492472,-58.62304687499999)}},
    {value: "Sundarin", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(83.31873282163234,-61.17187499999999)}},
    {value: "Tallo's Eye", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(61.312451574838214,-58.88671875)}},
    {value: "Qundalon", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(35.31736632923788,-97.119140625)}},
    {value: "Weisshaupt", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(61.48075950007598,-58.62304687499999)}},
    {value: "The Blasted Hills", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(36.31512514748051,-98.26171875)}},
    {value: "Broken Tooth", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(60.84491057364915,-58.095703125)}},
    {value: "Feral Fjords", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(77.19617635994676,-153.72070312499997)}},
    {value: "Hunterhorn Mountains", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(47.39834920035926,-119.88281249999999)}},
    {value: "The Lattenfluss", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(70.90226826757711,-79.365234375)}},
    {value: "Merdaine", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(62.30879369102805,-96.94335937499999)}},
    {value: "The Wandering Hills", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(75.95223506623554,-108.896484375)}},
    {value: "The Weathered Pass", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(79.02171239525758,-118.21289062499999)}},
    {value: "The Donarks", data:{"nation":"Anderfels","zoom": 4, "latLng": L.latLng(83.05815960186747,-121.46484375)}},
];
