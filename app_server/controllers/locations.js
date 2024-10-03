const homelist = (req, res) => {
  res.render('locations-list', {
      title: 'Epic Expedetions',
      pageHeader: {
          title: 'Epic Expedetions',
          strapline: 'Journey Beyond the Ordinary'
      },
      sidebar: "Epic Expeditions offer curated travel packages for all types of travelers, from adventure seekers to leisure explorers. Users can easily browse, compare, and book trips tailored to their preferences and budgets.",
      locations: [
          {
              name: 'GOA',
              address: 'Goa: Where Every Shore Tells a Story!',
              rating: 3,
              price: 12000,
              facilities: ['Stay', 'Food', 'Transport'],
              distance: '5D Trip',
              link:"/location"
          },
          {
              name: 'Manali',
              address: 'Manali: Your Gateway to Nature Majesty!',
              rating: 4,
              price: 24000,
              facilities: ['Premium Hotel Stay', 'Food', 'Travel Guide'],
              distance: '2W Trip',
              link:"/Manali"
          },
          {
              name: 'Ooty',
              address: 'Ooty: The Queen of Hill Stations Awaits!',
              rating: 2,
              price: 8000,
              facilities: ['Food', 'Stay'],
              distance: '3D Trip',
              link:"/ooty"
          }
      ]
  });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
   };
   const Manali = (req, res) => {
    res.render('Manali', { title: 'Manali' });
   };
   const ooty = (req, res) => {
    res.render('ooty', { title: 'ooty' });
   };
   /* GET 'Add review' page */
   const addReview = (req, res) => {
    res.render('location-review-form', { title: 'Add review' });
   };

module.exports = {
  homelist,
  locationInfo,
  addReview,
  Manali,
  ooty
};
