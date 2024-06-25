/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.
const priceSpan = document.querySelector("#avg-price");

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30},
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 }
  // { name: "Sarah", price: 50, occupation: "Bartender" },
  // { name: "Lauren", price: 60, occupation: "Gardener" },
  // { name: "Matthew", price: 80, occupation: "Policy Consultant" },
  // { name: "Emma", price: 40, occupation: "Artist" },
  // { name: "Peter", price: 70, occupation: "Video Editor" },

  // { name: "Prof. Possibility", price: 43, occupation: "teacher" },
];
const maxListings = 8;
// `setInterval` will call `addFreelancer` every 3000 milliseconds (3 seconds)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval.
const addFreeLancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the listings
  const freelancerList = document.querySelector("#freelancers");
  const listings = freelancers.map((person) => {
    const newListing = document.createElement("li");
    newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
    return newListing;
  });
  freelancerList.replaceChildren(...listings);
}

/**
 * Add a random listing to the 'listings' array
 */

function addFreelancer() {
  const names = ["Sarah","Lauren","Matthew","Emma","Peter"];
  const occupations = ["Bartender","Gardener","Policy Consultant","Visual Artist","Video Editor" ];
  const prices = [50, 80, 90, 40, 70];
  // const randomNameIndex = Math.floor(Math.random() * names.length);
  // const randomOccupationIndex = Math.floor(Math.random() * occupations.length);
  // const randomPriceIndex = Math.floor(Math.random() * prices.length);
  // const name = names[Math.floor(Math.random() * names.length)];
  // const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  // const price = prices[Math.floor(Math.random() * prices.length)];
  // const newFreelancer = {name, occupation, price};

  const newFreelancer = {
    name: names[Math.floor(Math.random() * names.length)],
    occupation: occupations[Math.floor(Math.random() * occupations.length)],
    price: prices[Math.floor(Math.random() * prices.length)]
  };
  
  //const person = freelancers[Math.floor(Math.random() * freelancers.length)];

  // if (freelancers > maxListings) {
  //   clearInterval(addFreeLancerIntervalId);
  // }

  freelancers.push(newFreelancer);
  const avgRate = freelancers.reduce((total, currentItem)=>(total += currentItem.price),0)/freelancers.length;

  // TODO: Connect updated average rate to HTML
  priceSpan.innerText = avgRate.toFixed(2);

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}

function avgPrice() {
  let currentAvg = (price) => ((total += current) / freelancers.length, 1);
  return currentAvg;
  document.querySelector("#avg-price") = currentAvg;
}
