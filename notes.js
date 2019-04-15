// ------------------------------------------------
//                 JAVASCRIPT NOTES
// ------------------------------------------------

// ------------------------------------------------
// Objects:
// ------------------------------------------------

// Creating objects - Literal notaton

let hotel = {
  name: 'Eco Hotel',
  rooms: 40,
  booked: 25,
  function checkAvilability() {
    return this.rooms - this.booked;
  }
};

// Creating objects - Constructor notation

let hotel = new Object();

hotel.name = 'Eco Hotel';
hotel.rooms = 40;
hotel.booked = 25;
hotel.checkAvilability = function() {
  return this.rooms - this.booked;
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
let elRooms.textContent = hotel.checkAvilability();

// Updating an object

hotel.name = "Skyfal";
// or
hotel['name'] = 'Skyfal';

// Deleting an object property
delete hotel.name;

// Clearing the value of a prpoerty
hotel.name = '';

// Creating many objects - Constructor notation
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rools = rooms;
  this.booked = booked;
  this.checkAvilability = function() {
    return ths.rooms - this.booked;
  }
};

let ecoHotel = new Hotel('Eco Hotel', 40, 25);
let parkHotel = new Hitel('Park', 120, 77);

// Create/access objects - Constructor notation

// Use code above as a template

let details1 = ecoHotel.name + ' rooms: ';
  details1+= ecoHotel.checkAvilability();
let elHotel1 = document.getElementByIdI('hotel1');
elHotel1.textContent = details1;

let details2 = parkHotel.name + ' rooms: ';
  details2 += parkHotel.checkAvilability();
let elHotel2 = document.getElementById('hotel2';
elHotel.textContent = details2;

// Adding and removing properties

let hotel = {
  name: 'Park',
  rooms: 120,
  booked: 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

let elName = document.getElementById('hotelName');
  elName.textContent = hotel.name;

let elPool = document.getElementById('pool');
  elPool.className = 'Pool: ' + hotel.pool;

let elGym = document.getElementById('gym');
  elGym.className = 'Gym: ' + hotel.gym;


// ------------------------------------------------
// this(keyword)
// ------------------------------------------------

// Function below uses 'this' to return properties of the window object

function windowSize() {
  let width = this.innerWidth;
  let height = this.innerHeight;
  return [height, width];
};

// Using 'this' with global variables
let width = 600;
let shape = {width: 300};

let showWidth = function() {
  document.write(this.width);
};

showWidth();

// A method of an object

let shape = {
  width: 600,
  height: 400,
  getArea: function() {
    return this.width * this.height
  }
};
// Because 'this' refers to the shape object, above would be same as writing:

return shape.width * shape.height;

// Function expression as method
let width = 600;
let shape = {width: 300};

let showWidth = function() {
  document.write(this.width);
};

shape.getWidth = showWidth;
shape.getWidth();

// ------------------------------------------------
// RECAP: Storing data
// ------------------------------------------------

// Variables:
// Variables have one key (var name) and one value (var value) and are seperated by an equal sign

let hotel = 'Quay';

// Arrays:
// You know what these are
let hotels = [
  'Quay', 'Park', 'Bench', 'Bloomsbury'
]

// Use index to retrive certian hotel
hotels[1]
// Returns Park

// Individual objects:
let hotel {
  name: 'Quay',
  rooms: 40
};

// Multuple objects
function Hotel(name, rooms) {
  this.name = name;
  this.rooms = rooms;
};

let hotel1 = new Hotel('Quay', 40);
let hotel2 = new Hotel('Park', 120);

// Dot notation tom retrive object property
hotel2.name;
// returns: Park

// ------------------------------------------------
// Built in objects
// ------------------------------------------------

let builtInMethods = ['window', 'document', 'history', 'location', 'navigator', 'screen']

// Global JavaScript Objects

let buultInObjects = ['string', 'number', 'boolean', 'date', 'math', 'regex']

// Examples:
hotel.toUpperCase();

// ------------------------------------------------
// Browser Object Model
// ------------------------------------------------

// The window object repersent the current browser window or tab, it's the top most object in the broser object model and contains ALL other objects that tell you about the browser.

// ****** These are super important ******

window.innerHeight
// Height of a window(excluding browser interface) in pixels
window.innerWidth
// Width of a window(excluding browser interface) in pixels
window.pageXOffset
// Distance document has been scrolled horizontally in pixels
window.pageYOffset
// Distance document has been scrolled vertically in pixels
window.screenX
// X-cordinate of pointer relative to top left corner of screen in pixels
window.screenY
// Y-cordinate of pointer relative to top left corner of screen in pixels
window.location
// current URL of window object (or local file path)
window.document
// Reference to document object, which is used to repersent the current page contained in window.
window.history
// Reference to hsotry object for browser window or tab, which contains details of the pages that have been viewed in current window or tab.
window.history.length
// Num of items in history object for broswer or tab
window.screen
// Reference to screen object
window.screen.width
// Accesses screen object and finds value of its width property in pixels
window.screen.height
// Accesses screen object and finds value of its height property in pixels
window.alert()
// Creates dialog box with message (user must click OK button to close it)
window.open()
// Opens new broswer windiow with URL specified as param, if browser has popup blocking software this might not work.
window.print()
// Tells browser that user wants to print content of current page(acts like user has cliked print option in browsers UI)






















// end
