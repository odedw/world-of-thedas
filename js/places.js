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

    //Seheron
    {value: "Seheron", data:{"nation":"Seheron","zoom": 4, "latLng": L.latLng(79.73428059335232,24.609375)}},
    {value: "Alam", data:{"nation":"Seheron","zoom": 4, "latLng": L.latLng(78.00732483005181,-5.9765625)}},

    //Par Vollen
    {value: "Qunandar", data:{"nation":"Par Vollen","zoom": 4, "latLng": L.latLng(83.28798543651806,93.42773437499999)}},

    //Rivain

];
