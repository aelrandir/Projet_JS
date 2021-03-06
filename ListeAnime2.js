var osmosis = require('osmosis');

function getEvents(f){
  var events = [];
  osmosis
  .get('http://www.wakanim.tv/fr/v2/agenda/agenda')
  .find('div')
  .set({
    Heure_Date: 'div span'
  })
  .data(function(listing) {
    if(Object.keys(listing).length === 0){
      // empty object, do nothing
      return;
    }
    events.push(listing);
  })
  .done(function(){
    f(events);
  });
}


getEvents(function(events){
  console.log(events);
});
