/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'A hip tour guide to AUstin',
  icon: 'images/menu_icon.png',
  subtitle: 'Welcome to ATX!',
  body: 'Please press selecct for more!.'
});

main.show();

var wind = new UI.Window({ fullscreen: true });
var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 96),
  image: 'IMAGE HERE DAWG'
});

wind.add(image);

wind.show();
wind.on('click', 'Select', wind.hide);

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'UT Tower',
        subtitle: ''
      }, 
      {
        title: 'Capital',
        subtitle: ''
      },
      {
        title:'Barton Springs',
      }
      ]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});
