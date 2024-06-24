/* State */
// Here, we define variables for the data that our program needs to remember.
// We call this data "state" because it represents the state of our program.

const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Julia", price: 50, occupation: "Bartender" },
  { name: "Lauren", price: 60, occupation: "Gardener" },
  { name: "Matthew", price: 80, occupation: "Policy Consultant" },
  { name: "Emma", price: 40, occupation: "Artist" },
  { name: "Peter", price: 70, occupation: "Video Editor" },

  // { name: "Prof. Possibility", price: 43, occupation: "teacher" },
];
const maxListings = 9;
// `setInterval` will call `addShape` every 1000 milliseconds (1 second)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addShapeIntervalId)` will stop the interval.
const addFreeLancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the squares
  const freelancerList = document.querySelector("#freelancers");
  const listings = freelancers.map((person) => {
    const newListing = document.createElement("p");
    newListing.innerText = `Name:${person.name} Occupation:${person.occupation} Price:$${person.price}`;
    return newListing;
  });
  freelancerList.replaceChildren(...listings);
}

/**
 * Add a random shape to the `shapes` array
 */

function addFreelancer() {
  const person = freelancers[Math.floor(Math.random() * freelancers.length)];

  if (freelancers > maxListings) {
    clearInterval(addFreeLancerIntervalId);
  }

  freelancers.push({ person });

  // TODO: Randomize the size of the shape

  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}

function avgPrice() {
  let currentAvg = (price) => ((total += current) / freelancers.length, 1);
  return currentAvg;
}
