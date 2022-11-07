mapboxgl.accessToken = 'pk.eyJ1IjoiYWFycmlvbGEiLCJhIjoiY2pwbnB1dWh6MDVrejQzdDJnMW03NWhmYSJ9.N6VKHHE8I8vIErwvYJzcPA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    // center: [-77.034084, 38.909671],
    center: [-73.907359, 40.742154],
    zoom: 9.1,
    scrollZoom: false
});


// Fetch sites from API
async function getSites() {
    const res = await fetch('/api/v1/sites');
    const data = await res.json();  

    const sites = data.data.map(site => {
        return {
            type: 'Features',
            geometry: {
                type: 'Point',
                coordinates: [site.location.coordinates[0], store.location.coordinates[1]]
            },
            properties: {
                siteId: site.siteId,
                icon: 'shop'
            }
        }
    });
    loadMap(sites);  
}


// ++++++   GeoJson Starts

// const sites = {
// "type": "FeatureCollection",
// "features": [
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9919739,40.7160388 ]
// },
// "properties": {
// "name":"Streetwork Lower East Side Drop-In Center",
// "active":"??",
// "gender":"Unisex",
// "cost":"Free",
// "street":"33 Essex Street",
// "borough":"Manhattan ",
// "boroughSection":"Lower Manhattan",
// "state":"NY",
// "Zip":10002,
// "hoursOfOperation":"",
// "phone":"646-602-6404",
// "website":"https://www.safehorizon.org/location/streetwork-lower-east-side-drop-in-center/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"Up to 24 years old",
// "email":"website@safehorizon.org",
// "description":"",
// "locationType":"Youth Drop-in Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"2022-05-19:  Called, but maybe too early.",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9953067,40.7449235 ]
// },
// "properties": {
// "name":"Bowery Residents' Committee (BRC)",
// "active":"??",
// "gender":"",
// "cost":"Free",
// "street":"131 West 25th Street, 12th Floor",
// "borough":"Manhattan",
// "boroughSection":"Lower Manhattan",
// "state":"NY",
// "Zip":10001,
// "hoursOfOperation":"Only Open 9-5",
// "phone":"212-803-5700",
// "website":"http://www.brc.org/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"info@brc.org",
// "description":"",
// "locationType":"Shelter",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"2022-05-19: Number not in service    2125335151",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.8833577,40.7369456 ]
// },
// "properties": {
// "name":"New Life Community Health Center",
// "active":"??",
// "gender":"Unisex",
// "cost":"Free",
// "street":"82-10 Queens Boulevard Elmhurst",
// "borough":"Queens",
// "boroughSection":"Queens",
// "state":"NY",
// "Zip":11373,
// "hoursOfOperation":"Tuesday (4-8 pm) & Saturday (9 am-1 pm)",
// "phone":"718-565-9844",
// "website":"http://www.nlchc.org/for-patients/services/showers-and-health-screenings-for-the-homeless.html",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"volunteer@nlchc.org",
// "description":"Cannot be visibly drunk or under the influence of other drugs.",
// "locationType":"Health Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -74.1148004,40.6393331 ]
// },
// "properties": {
// "name":"Project Hospitality",
// "active":"??",
// "gender":"Unisex",
// "cost":"Free",
// "street":"150 richmond terrace",
// "borough":"Staten Island",
// "boroughSection":"Staten Island",
// "state":"NY",
// "Zip":10301,
// "hoursOfOperation":"24/7",
// "phone":"718-448-1544",
// "website":"https://www.projecthospitality.org/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":" gnovoa@projecthospitality.org",
// "description":"",
// "locationType":"Drop-In Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"718 7200079  (call back later)",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.8885643,40.8653917 ]
// },
// "properties": {
// "name":"Part of the Solution (POTS)",
// "active":"??",
// "gender":"Unisex",
// "cost":"Free",
// "street":"2759 Webster Ave",
// "borough":"Bronx",
// "boroughSection":"The Bronx",
// "state":"NY",
// "Zip":10458,
// "hoursOfOperation":"8 to 10 a.m. Monday through Friday",
// "phone":"718-220-4892",
// "website":"https://potsbronx.org/en/",
// "numberOfStalls":"",
// "amenities":"Has feminine hygiene products.  Has towel and soaps.  Shower shoes not guaranteed",
// "ageRange":"18 years and up",
// "email":"information@potsbronx.org",
// "description":"",
// "locationType":"",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9509427,40.809416 ]
// },
// "properties": {
// "name":"Safe Horizon – Streetwork Harlem Drop In Center",
// "active":"??",
// "gender":"Unisex",
// "cost":"Free",
// "street":"209 West 125th Street",
// "borough":"Manhattan",
// "boroughSection":"Upper Manhattan",
// "state":"NY",
// "Zip":10027,
// "hoursOfOperation":"",
// "phone":"212-695-2220",
// "website":"",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"Up to 24 years old",
// "email":"",
// "description":"",
// "locationType":"Youth Drop-in Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9673228,40.8070418 ]
// },
// "properties": {
// "name":"Broadway Community",
// "active":"No (due to Covid)",
// "gender":"Unisex",
// "cost":"Free",
// "street":"601 W 114th Street",
// "borough":"Manhattan",
// "boroughSection":"Upper Manhattan",
// "state":"NY",
// "Zip":10025,
// "hoursOfOperation":"10:00am-12:30am, Mondays, Wednesdays, and Fridays",
// "phone":"212-864-6100",
// "website":"https://broadwaycommunity.org/services/clothing-and-showers",
// "numberOfStalls":"",
// "amenities":"With each shower, we provide Guests with towels and toiletries. Our showers are professionally cleaned and sanitized on a daily basis.",
// "ageRange":"n/a",
// "email":"",
// "description":"Showers are available to Shelter Guests each evening, and are available to other members of the community on a limited, first-come, first-serve basis on Mondays, Wednesdays, and Fridays from 10:30am to 12:00pm.*",
// "locationType":"Community Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"The health and safety of Broadway Community's Guests, staff, and volunteers is our highest priority. \n\nDue to the ongoing COVID-19 pandemic, clothing and shower services are only available to Guests of our shelter.",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9652643,40.8119008 ]
// },
// "properties": {
// "name":"The Riverside Church in the City of New York",
// "active":"No (due to Covid)",
// "gender":"",
// "cost":"Free",
// "street":"490 Riverside Drive",
// "borough":"Manhattan",
// "boroughSection":"Upper Manhattan",
// "state":"NY",
// "Zip":10027,
// "hoursOfOperation":"Tuesday and Fridayfrom 9:00 a.m. to 4:00 p.m.",
// "phone":"212-870-6700",
// "website":"https://www.trcnyc.org/socialservices/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"",
// "description":"",
// "locationType":"Church",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// //   {
// //     "type": "Feature",
// //     "geometry": {
// //        "type": "Point",
// //        "coordinates":  { }
// //     },
// //     "properties": {
// //     "name":"Shower Power",
// //     "active":"Yes (seasonal)",
// //     "gender":"Unisex",
// //     "cost":"Free",
// //     "street":"???",
// //     "borough":"???",
// //     "boroughSection":"",
// //     "state":"NY",
// //     "Zip":null,
// //     "hoursOfOperation":"",
// //     "phone":"",
// //     "website":"",
// //     "numberOfStalls":"",
// //     "amenities":"",
// //     "ageRange":"",
// //     "email":"",
// //     "description":"",
// //     "locationType":"Mobile Shower",
// //     "twitter":"",
// //     "instagram":"",
// //     "covidUpdates":"",
// //     "notesForAdmin":"",
// //     "FIELD25":""
// //     }
// //   },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9966057,40.7495646 ]
// },
// "properties": {
// "name":"Olivieri Center",
// "active":"Yes (sort of)",
// "gender":"Unisex",
// "cost":"Free",
// "street":"257 West 30th Street",
// "borough":"Manhattan",
// "boroughSection":"Lower Manhattan",
// "state":"NY",
// "Zip":10001,
// "hoursOfOperation":"Center Hours: Monday-Sunday, 7:30 a.m. - 8:30 p.m, but please call ahead to confirm.",
// "phone":"212-947-3211",
// "website":"http://www.urbanpathways.org/programsandservices/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"",
// "description":"",
// "locationType":"Drop-In Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"User must become client.  No drop ins. ",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9277457,40.8156186 ]
// },
// "properties": {
// "name":"Boom! Health",
// "active":"Yes!",
// "gender":"???",
// "cost":"????",
// "street":"226 East 144th St",
// "borough":"Bronx",
// "boroughSection":"The Bronx",
// "state":"NY",
// "Zip":10451,
// "hoursOfOperation":"Mon - Fri: 9AM to 6:30PM\nSat: 9AM to 3PM",
// "phone":"718 - 292- 7718",
// "website":"https://www.boomhealth.org/solutions/drop-in-center",
// "numberOfStalls":"",
// "amenities":"Services (1st and 3rd floor) include meals, showers, clothing, laundry, safe space, daily support and education groups, rapid HIV testing, rapid hepatitis C screening, hepatitis A and B vaccines, case management services, counseling, connection to health care, medication and complementary therapies such as auricular acupuncture.",
// "ageRange":"",
// "email":"info@boomhealth.org",
// "description":"",
// "locationType":"Drop-In Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"22-05-19: Call again, got the run around.  ",
// "FIELD25":"718 - 292- 7718"
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.995297,40.7220929 ]
// },
// "properties": {
// "name":"The Bowery Mission",
// "active":"Yes!",
// "gender":"Men ( Women only on Thursdays",
// "cost":"Free",
// "street":"227 Bowery ",
// "borough":"Manhattan ",
// "boroughSection":"Lower Manhattan",
// "state":"NY",
// "Zip":10002,
// "hoursOfOperation":"",
// "phone":"212-674-3456",
// "website":"https://www.bowery.org/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"media@bowery.org ??",
// "description":"Rescue mission and men’s shelter",
// "locationType":"",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"Chips (a soup kitchec) in on Wednesday | Coney on Thursday,  Tuesday (East ",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9811201,40.7483408 ]
// },
// "properties": {
// "name":"Grand Central Neighborhood Social Services Corporation (GCNSSC)",
// "active":"Yes!",
// "gender":"unisex",
// "cost":"Free",
// "street":"120 East 37th Street ",
// "borough":"Manhattan",
// "boroughSection":"Lower Manhattan",
// "state":"NY",
// "Zip":10016,
// "hoursOfOperation":"mon wed friday, morning showers cut off starts at 8 am",
// "phone":"212-883-0680",
// "website":"http://www.grandcentralneighborhood.org/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"admin@gcnssc.org",
// "description":"",
// "locationType":"Drop-in Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"wear a mask.",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.8915979,40.8168196 ]
// },
// "properties": {
// "name":"BronxWorks (The Living Room)",
// "active":"Yes!",
// "gender":"Unisex",
// "cost":"Free",
// "street":"800 Barretto Street",
// "borough":"Bronx",
// "boroughSection":"The Bronx",
// "state":"NY",
// "Zip":10474,
// "hoursOfOperation":"24/7",
// "phone":"718-893-3606",
// "website":"http://www.bronxworks.org/index.php",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"22",
// "email":"",
// "description":"Shelter Residences and Drop In Center Guests may use their showers.",
// "locationType":"Supportive Housing Residences",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"wear a mask.  temp",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9822073,40.7849618 ]
// },
// "properties": {
// "name":"All Angels' Church",
// "active":"Yes!",
// "gender":"Unisex",
// "cost":"Free",
// "street":"251 West 80th Street",
// "borough":"Manhattan",
// "boroughSection":"Upper Manhattan",
// "state":"NY",
// "Zip":10024,
// "hoursOfOperation":"Tuesdays & Thursdays\n8am – 2pm",
// "phone":"212-362-9300",
// "website":"https://allangelschurch.com/community-ministries/get-services/",
// "numberOfStalls":"",
// "amenities":"Twice a week, we provide a continental breakfast; hot showers; underwear and clothing; toiletries; mail service; and medical, psychiatric, and other social services.",
// "ageRange":"Any",
// "email":"info@allangelschurch.com",
// "description":"\\r\\n\\\"Shower tickets are given out as early as 7:45am on a first-come, first-served basis. Showers are available for women from 8:00 – 9:30am and men’s showers follow. Each guest will receive one towel and toiletries set upon arrival. Socks, underwear, and a t-shirt are distributed once a week. Shower time is limited to 10 minutes per man and 15 minutes per woman.\\\"\\r\\n\\r\\n-https://allangelschurch.com/community-ministries/get-services/\\r\\n\\r\\nTowels are available.\\r\\n\\r\\n\\r\\n\\r\\ninfo@allangelschurch.com",
// "locationType":"Church",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"Still good!",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -73.9514243,40.795809 ]
// },
// "properties": {
// "name":"New York Common Pantry",
// "active":"Yes!",
// "gender":"Unisex",
// "cost":"Free",
// "street":"8 East 109th Street",
// "borough":"Manhattan",
// "boroughSection":"Upper Manhattan",
// "state":"NY",
// "Zip":10029,
// "hoursOfOperation":"Monday through Friday between 9am to 1:00pm",
// "phone":"917-720-9700",
// "website":"http://nycommonpantry.org/",
// "numberOfStalls":"",
// "amenities":"",
// "ageRange":"",
// "email":"",
// "description":"Showers are available Monday through Friday between 8:30am to 1:00pm. Sign up for showers must be done before 9:30am",
// "locationType":"Health Center/Food Pantry",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"",
// "FIELD25":""
// }
// },
// {
// "type": "Feature",
// "geometry": {
//    "type": "Point",
//    "coordinates":  [ -74.0166005,40.6451389 ]
// },
// "properties": {
// "name":"Turning Point Brooklyn (mobile location)",
// "active":"Yes! (seasonal)",
// "gender":"Unisex",
// "cost":"Free",
// "street":"Sunset park  |  Coney Island | East New York",
// "borough":"Brooklyn",
// "boroughSection":"Brooklyn",
// "state":"NY",
// "Zip":11220,
// "hoursOfOperation":"Tues wed thursday, 11 am to 3pm",
// "phone":"718-360-8186",
// "website":"https://www.tpbk.org/shower-project/",
// "numberOfStalls":"",
// "amenities":"20 showers per day, 4 minutes long, about 10 minutes.",
// "ageRange":"",
// "email":"https://wearebcs.org/what-we-do/health-housing-and-homelessnesssolutions/",
// "description":"Please call ahead for before visiting.",
// "locationType":"Wellness Center",
// "twitter":"",
// "instagram":"",
// "covidUpdates":"",
// "notesForAdmin":"2022-05-19: Number not in service",
// "FIELD25":""
// }
// }
// ]
// }

// ------    GeoJson Ends

// sites.features.forEach(function (site, i) {
// site.properties.id = i;
// });

function loadMap(sites) {
    map.on('load', () => {
    /* Add the data to your map as a layer */
    map.addSource('places', {
    type: 'geojson',
    // data: sites
    data: {
        type: 'FeatureCollection',
        features: sites,
    }
    });

    const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, // Set the access token
    mapboxgl: mapboxgl, // Set the mapbox-gl instance
    marker: true, // Use the geocoder's default marker style
    bbox: [-74.262239, 40.49411, -73.574907, 40.90017] // Set the bounding box coordinates
    });

    map.addControl(geocoder, 'top-left');

    buildLocationList(sites);
    addMarkers();

    geocoder.on('result', (event) => {
    const searchResult = event.result.geometry;
    const options = { units: 'miles' };
    for (const site of sites.features) {
        site.properties.distance = turf.distance(
            searchResult,
            site.geometry,
            options
        );
    }
    sites.features.sort((a, b) => {
        if (a.properties.distance > b.properties.distance) {
            return 1;
        }
        if (a.properties.distance < b.properties.distance) {
            return -1;
        }
        return 0; // a must be equal to b
    });
    const listings = document.getElementById('listings');
    while (listings.firstChild) {
        listings.removeChild(listings.firstChild);
    }
    buildLocationList(sites);

    const activeListing = document.getElementById(
        `listing-${sites.features[0].properties.id}`
    );
    activeListing.classList.add('active');

    const bbox = getBbox(sites, 0, searchResult);
    map.fitBounds(bbox, {
    padding: 100
    });

    createPopUp(sites.features[0]);



    });

    });
}

function addMarkers() {
/* For each feature in the GeoJSON object above: */
for (const marker of sites.features) {
    /* Create a div element for the marker. */
    const el = document.createElement('div');
    /* Assign a unique `id` to the marker. */
    el.id = `marker-${marker.properties.id}`;
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';

    /**
     * Create a marker using the div element
     * defined above and add it to the map.
     **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);

    el.addEventListener('click', (e) => {
    /* Fly to the point */
    flyToSite(marker);
    /* Close all other popups and display popup for clicked site */
    createPopUp(marker);
    /* Highlight listing in sidebar */
    const activeItem = document.getElementsByClassName('active');
    e.stopPropagation();
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    const listing = document.getElementById(`listing-${marker.properties.id}`);
    listing.classList.add('active');
    });
    
}
}

function buildLocationList(sites) {
for (const site of sites.features) {
/* Add a new listing section to the sidebar. */
const listings = document.getElementById('listings');
const listing = listings.appendChild(document.createElement('div'));
/* Assign a unique `id` to the listing. */
listing.id = `listing-${site.properties.id}`;
/* Assign the `item` class to each listing for styling. */
listing.className = 'item';

/* Add the link to the individual listing created above. */
const link = listing.appendChild(document.createElement('a'));
link.href = '#';
link.className = 'title';
link.id = `link-${site.properties.id}`;
link.innerHTML = `${site.properties.name}`;

/* Add details to the individual listing. */
const details = listing.appendChild(document.createElement('div'));
details.innerHTML = `${site.properties.street}`;
if (site.properties.phone) {
  details.innerHTML += ` · ${site.properties.phone}`;
}
if (site.properties.distance) {
  const roundedDistance = Math.round(site.properties.distance * 100) / 100;
  details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
}

link.addEventListener('click', function () {
for (const feature of sites.features) {
    if (this.id === `link-${feature.properties.id}`) {
    flyToSite(feature);
    createPopUp(feature);
    }
}
const activeItem = document.getElementsByClassName('active');
if (activeItem[0]) {
    activeItem[0].classList.remove('active');
}
this.parentNode.classList.add('active');
});

}
}

function flyToSite(currentFeature) {
map.flyTo({
center: currentFeature.geometry.coordinates,
zoom: 15
});
}

function createPopUp(currentFeature) {
const popUps = document.getElementsByClassName('mapboxgl-popup');
/** Check if there is already a popup on the map and if so, remove it */
if (popUps[0]) popUps[0].remove();

const popup = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat(currentFeature.geometry.coordinates)
.setHTML(`<h3>Sweet Baby Ray</h3><h4>${currentFeature.properties.name}</h4>`)
.addTo(map);
}

function getBbox(sortedsites, siteIdentifier, searchResult) {
const lats = [
sortedsites.features[siteIdentifier].geometry.coordinates[1],
searchResult.coordinates[1]
];
const lons = [
sortedsites.features[siteIdentifier].geometry.coordinates[0],
searchResult.coordinates[0]
];
const sortedLons = lons.sort((a, b) => {
if (a > b) {
  return 1;
}
if (a.distance < b.distance) {
  return -1;
}
return 0;
});
const sortedLats = lats.sort((a, b) => {
if (a > b) {
  return 1;
}
if (a.distance < b.distance) {
  return -1;
}
return 0;
});
return [
[sortedLons[0], sortedLats[0]],
[sortedLons[1], sortedLats[1]]
];
}

getSites(); 
