/**
 * Created by oded on 05/05/2015.
 */
var places = [
    //nations
    {value: "Anderfels", data:{"zoom": 4, "latLng": L.latLng(69.09993967425089,-97.55859375)}},
    {value: "Tevinter Imperium", data:{"zoom": 4, "latLng": L.latLng(57.468589192089325,-9.580078125)}},
    {value: "Nevarra", data:{"zoom": 4, "latLng": L.latLng(32.175612478499325,-11.42578125)}},
    {value: "Orlais", data:{"zoom": 4, "latLng": L.latLng(-20.385825381874263,-71.455078125)}},
    {value: "Ferelden", data:{"zoom": 4, "latLng": L.latLng(-33.21111647241684,48.69140625)}},
    {value: "Free Marches", data:{"zoom": 4, "latLng": L.latLng(29.916852233070173,59.4140625)}},
    {value: "Antiva", data:{"zoom": 4, "latLng": L.latLng(61.85614879566797,78.837890625)}},
    {value: "Rivain", data:{"zoom": 4, "latLng": L.latLng(74.16408546675687,118.38867187500001)}},
    {value: "Par Vollen", data:{"zoom": 4, "latLng": L.latLng(83.46037681466397,116.19140625)}},
    {value: "Seheron", data:{"zoom": 4, "latLng": L.latLng(80.04286374779889,0.87890625)}},

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
];
