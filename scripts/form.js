document.getElementById('Year').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
  ];
  const populateProductDropdown = () => {
    const productSelect = document.getElementById("product-list");
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id; 
      option.textContent = product.name; 
      productSelect.appendChild(option);
    });
  };

  populateProductDropdown();

  const ReviewCounter = () => {
    const reviewKey = "reviewCount";
  
    let reviewCount = parseInt(localStorage.getItem(reviewKey)) || 0;
  
 
    reviewCount += 1;
  
    localStorage.setItem(reviewKey, reviewCount);

    document.getElementById("reviewCount").textContent = reviewCount;
  };
  

ReviewCounter();