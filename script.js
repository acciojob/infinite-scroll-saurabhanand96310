//your code here!
// Function to generate a list item
let ol=document.getElementById("infi-list")

function generateListItem() {
  // Code to generate a list item
     let newListItem = document.createElement("li")
	newListItem.innerHTML="Item"
	ol.append(newListItem)
	
}

// Generate 10 list items by default
for (let i = 0; i < 10; i++) {
  generateListItem();
}

// Event listener for scroll event
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // User has scrolled to the bottom of the page, generate 2 more list items
    generateListItem();
    generateListItem();
  }
});
