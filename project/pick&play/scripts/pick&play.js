document.getElementById('Year').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }

//Form
const products = [
    { id: "pp-1888", name: "Guiatar", averagerating: 4.5 },
    { id: "pp-2050", name: "Tutorials", averagerating: 4.7 },
    { id: "pp-1987", name: "Information", averagerating: 3.5 },
    { id: "pp-2000", name: "Reccomendation", averagerating: 3.9 },
    { id: "pp-1969", name: "Other", averagerating: 5.0 },
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