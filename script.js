
const quantityRadios = document.querySelectorAll('input[name="quantity"]'); // Get all radio buttons

// When a radio button is clicked, show the corresponding grid
quantityRadios.forEach((radio) => {
  radio.addEventListener('change', function() {
    // Hide all grid containers first
    document.querySelectorAll('.grid-container').forEach(grid => {
      grid.style.display = 'none';
    });

    // Show the grid container for the current product section
    const gridContainer = radio.closest('.product-info').querySelector('.grid-container');
    if (radio.checked) {
      gridContainer.style.display = 'block';
    }

    // Update the total price dynamically
    updateTotalPrice();
  });
});

// Function to update the total price dynamically
function updateTotalPrice() {
  const checkedRadio = document.querySelector('input[name="quantity"]:checked');
  
  // Get the price from the .current-price element of the selected radio button
  const productInfo = checkedRadio.closest('.product-info');
  const priceText = productInfo.querySelector('.current-price').textContent; // Get the price text
  const unitPrice = priceText.trim(); // Get the price as text, no need to convert it

  // Update the total price (just show the selected price)
  const totalPriceElement = document.querySelector('div h4 span'); // Select the total price element
  totalPriceElement.textContent = unitPrice;
}

// Optionally, set the initial state of grid containers and update total price
document.querySelectorAll('.product-info').forEach(product => {
  const radio = product.querySelector('input[type="radio"]');
  const gridContainer = product.querySelector('.grid-container');
  if (!radio.checked) {
    gridContainer.style.display = 'none'; // Hide grid containers if not selected
  }

  // Initial total price calculation
  if (radio.checked) {
    updateTotalPrice();
  }

  // Make the grid container clickable
  product.addEventListener('click', function() {
    // Trigger click on the radio button within the product
    const radio = product.querySelector('input[type="radio"]');
    radio.checked = true; // Simulate a radio button click

    // Show the grid container for the clicked product
    const gridContainer = product.querySelector('.grid-container');
    document.querySelectorAll('.grid-container').forEach(grid => {
      grid.style.display = 'none'; // Hide other grids
    });

    gridContainer.style.display = 'block'; // Show the clicked grid

    // Update the total price dynamically
    updateTotalPrice();
  });
});
