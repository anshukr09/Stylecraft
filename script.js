// Mock Data
const mockProducts = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    category: "outerwear",
    brand: "StyleCraft",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop"
    ],
    description: "Luxurious genuine leather jacket with premium finish. Perfect for both casual and formal occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Navy"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    tags: ["leather", "premium", "jacket", "outerwear"]
  },
  {
    id: 2,
    name: "Elegant Evening Dress",
    category: "dresses",
    brand: "Luxe",
    price: 189.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-6b1c7462690e?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop"
    ],
    description: "Sophisticated evening dress crafted with attention to detail. Features elegant silhouette and premium fabric.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Burgundy"],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    tags: ["dress", "evening", "elegant", "formal"]
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    category: "outerwear",
    brand: "Urban",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9P6ztM64IJ9Fp_F2HGrtqziLV8-ePQhpRirnU8LdqVW-XNdxEDpA_auPEs_4UW8YQ68MWEoN6rCqZy6cybyx4X_eZ5Oktjy1YzWWYRJmNXSRaSeFc-K81ScoLdmOUD3y-zV7cN5M&usqp=CAc",
    images: [
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ9P6ztM64IJ9Fp_F2HGrtqziLV8-ePQhpRirnU8LdqVW-XNdxEDpA_auPEs_4UW8YQ68MWEoN6rCqZy6cybyx4X_eZ5Oktjy1YzWWYRJmNXSRaSeFc-K81ScoLdmOUD3y-zV7cN5M&usqp=CAc"
    ],
    description: "Timeless denim jacket with modern fit. Versatile piece that pairs well with any outfit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Light Blue", "Black"],
    rating: 4.6,
    reviews: 203,
    inStock: true,
    featured: false,
    tags: ["denim", "jacket", "casual", "classic"]
  },
  {
    id: 4,
    name: "Designer Handbag",
    category: "accessories",
    brand: "Luxe",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop"
    ],
    description: "Luxury designer handbag crafted from premium materials. Perfect for both day and evening wear.",
    sizes: ["One Size"],
    colors: ["Black", "Beige", "Brown"],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    featured: true,
    tags: ["handbag", "designer", "luxury", "accessories"]
  },
  {
    id: 5,
    name: "Casual Summer Dress",
    category: "dresses",
    brand: "Fresh",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop"
    ],
    description: "Light and breezy summer dress perfect for warm weather. Comfortable fit with beautiful design.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Pink", "Yellow"],
    rating: 4.5,
    reviews: 78,
    inStock: true,
    featured: false,
    tags: ["dress", "summer", "casual", "light"]
  },
  {
    id: 6,
    name: "Premium Sneakers",
    category: "shoes",
    brand: "Sport",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=600&fit=crop"
    ],
    description: "High-quality sneakers with superior comfort and style. Perfect for both athletic and casual wear.",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Grey", "Navy"],
    rating: 4.4,
    reviews: 267,
    inStock: true,
    featured: false,
    tags: ["sneakers", "shoes", "sport", "casual"]
  },
  {
    id: 7,
    name: "Silk Blouse",
    category: "tops",
    brand: "Elegant",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4e94?w=500&h=600&fit=crop"
    ],
    description: "Luxurious silk blouse with elegant drape. Professional yet feminine design for the modern woman.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream", "Black", "Navy"],
    rating: 4.8,
    reviews: 92,
    inStock: true,
    featured: true,
    tags: ["blouse", "silk", "elegant", "professional"]
  },
  {
    id: 8,
    name: "High-Waisted Jeans",
    category: "bottoms",
    brand: "Denim Co",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=600&fit=crop"
    ],
    description: "Flattering high-waisted jeans with perfect fit. Made from premium denim with stretch for comfort.",
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Dark Blue", "Light Blue", "Black", "White"],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    featured: false,
    tags: ["jeans", "denim", "high-waisted", "bottoms"]
  }
];

const categories = [
  { id: 'all', name: 'All Products', count: 8 },
  { id: 'dresses', name: 'Dresses', count: 2 },
  { id: 'outerwear', name: 'Outerwear', count: 2 },
  { id: 'accessories', name: 'Accessories', count: 1 },
  { id: 'shoes', name: 'Shoes', count: 1 },
  { id: 'tops', name: 'Tops', count: 1 },
  { id: 'bottoms', name: 'Bottoms', count: 1 }
];

const brands = [
  'All Brands',
  'StyleCraft',
  'Luxe',
  'Urban',
  'Fresh',
  'Sport',
  'Elegant',
  'Denim Co'
];

// Global State
let currentFilters = {
  category: 'all',
  brand: 'All Brands',
  minPrice: '',
  maxPrice: '',
  minRating: 0,
  search: ''
};

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentViewMode = 'grid';
let currentSort = 'featured';
let selectedProduct = null;
let currentImageIndex = 0;
let selectedSize = '';
let selectedColor = '';
let quantity = 1;

// Currency Utilities (USD -> INR display)
const INR_EXCHANGE_RATE = 83; // approximate
const inrFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
function formatInrFromUsd(usdAmount) {
  const inr = usdAmount * INR_EXCHANGE_RATE;
  return inrFormatter.format(inr);
}

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupRevealObserver();
  // Respect reduced motion for parallax
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    startHeroParallax();
  }
});

function initializeApp() {
  setupEventListeners();
  loadFilters();
  loadFeaturedProducts();
  loadProducts();
  updateCounters();
  initializeSwiper();
}

// Lightweight hero parallax using requestAnimationFrame
let __parallaxRAF = null;
function startHeroParallax() {
  const d1 = document.querySelector('.hero-decoration-1');
  const d2 = document.querySelector('.hero-decoration-2');
  const d3 = document.querySelector('.hero-decoration-3');
  if (!d1 && !d2 && !d3) return;

  let targetX = 0, targetY = 0;
  let x = 0, y = 0;
  const ease = 0.07;

  function onMove(e) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const px = (e.clientX || (e.touches && e.touches[0]?.clientX) || vw/2) / vw - 0.5;
    const py = (e.clientY || (e.touches && e.touches[0]?.clientY) || vh/2) / vh - 0.5;
    targetX = px * 20; // max 20px offset
    targetY = py * 12;
  }

  function loop() {
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    if (d1) d1.style.transform = `translate3d(${x * 1.0}px, ${y * 1.0}px, 0)`;
    if (d2) d2.style.transform = `translate3d(${x * -0.6}px, ${y * -0.6}px, 0)`;
    if (d3) d3.style.transform = `translate3d(${x * 1.4}px, ${y * -0.4}px, 0)`;
    __parallaxRAF = requestAnimationFrame(loop);
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
  loop();
}

function stopHeroParallax() {
  if (__parallaxRAF) cancelAnimationFrame(__parallaxRAF);
  __parallaxRAF = null;
}

// Event Listeners
function setupEventListeners() {
  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  
  mobileMenuBtn?.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = mobileNav.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
  });

  // Search functionality
  const searchInputs = document.querySelectorAll('#searchInput, #mobileSearchInput');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      currentFilters.search = e.target.value;
      loadProducts();
    });
  });

  // Sort functionality
  const sortSelect = document.getElementById('sortSelect');
  sortSelect?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    loadProducts();
  });

  // View toggle
  const viewBtns = document.querySelectorAll('.view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentViewMode = btn.dataset.view;
      updateProductsView();
    });
  });

  // Filter events
  setupFilterEvents();

  // Modal events
  setupModalEvents();

  // Mobile filter modal
  const mobileFilterBtn = document.getElementById('mobileFilterBtn');
  const mobileFiltersModal = document.getElementById('mobileFiltersModal');
  const mobileFiltersClose = document.getElementById('mobileFiltersClose');

  mobileFilterBtn?.addEventListener('click', () => {
    mobileFiltersModal.classList.add('active');
  });

  mobileFiltersClose?.addEventListener('click', () => {
    mobileFiltersModal.classList.remove('active');
  });

  // Clear filters
  const clearFiltersBtn = document.getElementById('clearFilters');
  clearFiltersBtn?.addEventListener('click', clearAllFilters);

  // Drawers: Cart and Wishlist
  const cartBtn = document.getElementById('cartBtn');
  const wishlistBtn = document.getElementById('wishlistBtn');
  cartBtn?.addEventListener('click', () => openDrawer('cart'));
  wishlistBtn?.addEventListener('click', () => openDrawer('wishlist'));

  const overlay = document.getElementById('drawerOverlay');
  overlay?.addEventListener('click', closeAllDrawers);
  document.querySelectorAll('[data-drawer-close]').forEach(btn => btn.addEventListener('click', closeAllDrawers));

  // Escape to close drawers
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllDrawers();
  });
}

function setupFilterEvents() {
  // Filter headers (collapsible)
  const filterHeaders = document.querySelectorAll('.filter-header');
  filterHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector('i');
      
      if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.style.transform = 'rotate(0deg)';
      } else {
        content.style.display = 'none';
        icon.style.transform = 'rotate(-90deg)';
      }
    });
  });

  // Price inputs (accept INR, convert to USD for internal filter)
  const minPriceInput = document.getElementById('minPrice');
  const maxPriceInput = document.getElementById('maxPrice');

  minPriceInput?.addEventListener('input', (e) => {
    const inr = parseFloat(e.target.value || '');
    currentFilters.minPrice = isNaN(inr) ? '' : String(Math.round(inr / INR_EXCHANGE_RATE));
    loadProducts();
    updateClearFiltersButton();
  });

  maxPriceInput?.addEventListener('input', (e) => {
    const inr = parseFloat(e.target.value || '');
    currentFilters.maxPrice = isNaN(inr) ? '' : String(Math.round(inr / INR_EXCHANGE_RATE));
    loadProducts();
    updateClearFiltersButton();
  });

  // Price range radio buttons (values prefixed with inr:LOW-HIGH or inr:LOW+)
  const priceRangeInputs = document.querySelectorAll('input[name="priceRange"]');
  priceRangeInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        const value = e.target.value; // e.g., inr:4000-8500 or inr:16500+
        const raw = value.replace('inr:', '');
        if (raw.endsWith('+')) {
          const lowInr = parseInt(raw.replace('+', '')) || 0;
          currentFilters.minPrice = String(Math.round(lowInr / INR_EXCHANGE_RATE));
          currentFilters.maxPrice = '';
        } else {
          const [lowInrStr, highInrStr] = raw.split('-');
          const lowInr = parseInt(lowInrStr) || 0;
          const highInr = parseInt(highInrStr) || 0;
          currentFilters.minPrice = String(Math.round(lowInr / INR_EXCHANGE_RATE));
          currentFilters.maxPrice = String(Math.round(highInr / INR_EXCHANGE_RATE));
        }

        // Reflect INR values back in inputs
        minPriceInput.value = currentFilters.minPrice ? Math.round(parseFloat(currentFilters.minPrice) * INR_EXCHANGE_RATE) : '';
        maxPriceInput.value = currentFilters.maxPrice ? Math.round(parseFloat(currentFilters.maxPrice) * INR_EXCHANGE_RATE) : '';
        loadProducts();
        updateClearFiltersButton();
      }
    });
  });

  // Rating filter
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  ratingInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      if (e.target.checked) {
        currentFilters.minRating = parseFloat(e.target.value);
        loadProducts();
        updateClearFiltersButton();
      }
    });
  });
}

function setupModalEvents() {
  const modal = document.getElementById('productModal');
  const modalClose = document.getElementById('modalClose');

  modalClose?.addEventListener('click', closeModal);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Modal image navigation
  const modalPrevImage = document.getElementById('modalPrevImage');
  const modalNextImage = document.getElementById('modalNextImage');

  modalPrevImage?.addEventListener('click', () => {
    if (selectedProduct && selectedProduct.images) {
      currentImageIndex = currentImageIndex === 0 ? selectedProduct.images.length - 1 : currentImageIndex - 1;
      updateModalImage();
    }
  });

  modalNextImage?.addEventListener('click', () => {
    if (selectedProduct && selectedProduct.images) {
      currentImageIndex = currentImageIndex === selectedProduct.images.length - 1 ? 0 : currentImageIndex + 1;
      updateModalImage();
    }
  });

  // Quantity controls
  const decreaseQuantity = document.getElementById('decreaseQuantity');
  const increaseQuantity = document.getElementById('increaseQuantity');

  decreaseQuantity?.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      document.getElementById('quantityValue').textContent = quantity;
    }
  });

  increaseQuantity?.addEventListener('click', () => {
    quantity++;
    document.getElementById('quantityValue').textContent = quantity;
  });

  // Modal actions
  const modalAddToCart = document.getElementById('modalAddToCart');
  const modalWishlist = document.getElementById('modalWishlist');

  modalAddToCart?.addEventListener('click', () => {
    if (selectedProduct) {
      if (selectedProduct.sizes && selectedProduct.sizes.length > 0 && !selectedSize) {
        showToast('Please select a size', 'error');
        return;
      }
      addToCart({...selectedProduct, selectedSize, selectedColor, quantity});
      closeModal();
    }
  });

  modalWishlist?.addEventListener('click', () => {
    if (selectedProduct) {
      toggleWishlist(selectedProduct);
      updateModalWishlistButton();
    }
  });
}

// Load Functions
function loadFilters() {
  loadCategoryFilters();
  loadBrandFilters();
}

function loadCategoryFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  if (!categoryFilter) return;

  const categoryHTML = categories.map(category => `
    <label class="filter-option">
      <input type="radio" name="category" value="${category.id}" ${currentFilters.category === category.id ? 'checked' : ''}>
      <span>${category.name}</span>
      <span style="margin-left: auto; font-size: 0.75rem; color: #6b7280;">(${category.count})</span>
    </label>
  `).join('');

  categoryFilter.innerHTML = categoryHTML;

  // Add event listeners
  const categoryInputs = categoryFilter.querySelectorAll('input[name="category"]');
  categoryInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      currentFilters.category = e.target.value;
      loadProducts();
      updateClearFiltersButton();
    });
  });
}

function loadBrandFilters() {
  const brandFilter = document.getElementById('brandFilter');
  if (!brandFilter) return;

  const brandHTML = brands.map(brand => `
    <label class="filter-option">
      <input type="radio" name="brand" value="${brand}" ${currentFilters.brand === brand ? 'checked' : ''}>
      <span>${brand}</span>
    </label>
  `).join('');

  brandFilter.innerHTML = brandHTML;

  // Add event listeners
  const brandInputs = brandFilter.querySelectorAll('input[name="brand"]');
  brandInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      currentFilters.brand = e.target.value;
      loadProducts();
      updateClearFiltersButton();
    });
  });
}

function loadFeaturedProducts() {
  const featuredProducts = mockProducts.filter(product => product.featured);
  const swiperWrapper = document.getElementById('featuredSwiperWrapper');
  
  if (!swiperWrapper) return;

  const featuredHTML = featuredProducts.map(product => {
    const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const starsHTML = generateStars(product.rating);

    return `
      <div class="swiper-slide">
        <div class="featured-slide reveal">
          <div class="featured-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="discount-badge">-${discountPercentage}%</div>
          </div>
          <div class="featured-details">
            <div class="featured-brand">${product.brand}</div>
            <h3 class="featured-name">${product.name}</h3>
            <div class="featured-rating">
              <div class="stars">${starsHTML}</div>
              <span>${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p class="featured-description">${product.description}</p>
            <div class="featured-price">
              <span class="current-price">${formatInrFromUsd(product.price)}</span>
              <span class="original-price">${formatInrFromUsd(product.originalPrice)}</span>
            </div>
            <div class="featured-actions">
              <button class="btn-quick-view" onclick="openProductModal(${product.id})">
                Quick View
              </button>
              <button class="btn-add-cart" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  swiperWrapper.innerHTML = featuredHTML;
}

function loadProducts() {
  const filteredProducts = filterProducts(mockProducts);
  displayProducts(filteredProducts);
  updateProductCount(filteredProducts.length);
}

function filterProducts(products) {
  return products.filter(product => {
    // Search filter
    const matchesSearch = !currentFilters.search || 
      product.name.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
      product.description.toLowerCase().includes(currentFilters.search.toLowerCase()) ||
      product.brand.toLowerCase().includes(currentFilters.search.toLowerCase());

    // Category filter
    const matchesCategory = currentFilters.category === 'all' || product.category === currentFilters.category;

    // Brand filter
    const matchesBrand = currentFilters.brand === 'All Brands' || product.brand === currentFilters.brand;

    // Price filter
    const matchesMinPrice = !currentFilters.minPrice || product.price >= parseFloat(currentFilters.minPrice);
    const matchesMaxPrice = !currentFilters.maxPrice || product.price <= parseFloat(currentFilters.maxPrice);

    // Rating filter
    const matchesRating = product.rating >= currentFilters.minRating;

    return matchesSearch && matchesCategory && matchesBrand && matchesMinPrice && matchesMaxPrice && matchesRating;
  }).sort((a, b) => {
    switch (currentSort) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-az':
        return a.name.localeCompare(b.name);
      case 'name-za':
        return b.name.localeCompare(a.name);
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
        return b.featured - a.featured;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });
}

function displayProducts(products) {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  if (products.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <i class="fas fa-search"></i>
        </div>
        <h3 class="empty-title">No products found</h3>
        <p class="empty-message">
          Try adjusting your filters or search terms to find what you're looking for.
        </p>
      </div>
    `;
    return;
  }

  const productsHTML = products.map(product => {
    const discountPercentage = product.originalPrice > product.price ? 
      Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const starsHTML = generateStars(product.rating);
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const colorDotsHTML = generateColorDots(product.colors);

    return `
      <div class="product-card reveal">
        <div class="product-image-container">
          ${discountPercentage > 0 ? `<div class="product-badges">
            <div class="discount-badge">-${discountPercentage}%</div>
            ${product.featured ? '<div class="featured-badge">Featured</div>' : ''}
          </div>` : (product.featured ? '<div class="product-badges"><div class="featured-badge">Featured</div></div>' : '')}
          
          <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
          
          <div class="product-overlay">
            <div class="product-actions">
              <button class="action-button" onclick="openProductModal(${product.id})" title="Quick View">
                <i class="fas fa-eye"></i>
              </button>
              <button class="action-button wishlist ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${JSON.stringify(product).replace(/"/g, '&quot;')})" title="Add to Wishlist">
                <i class="fas fa-heart"></i>
              </button>
              <button class="action-button" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})" title="Add to Cart">
                <i class="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="product-info">
          <div class="product-meta">
            <span class="product-brand">${product.brand}</span>
            <span class="product-category">${product.category}</span>
          </div>

          <h3 class="product-name">${product.name}</h3>

          <div class="product-rating">
            <div class="rating-stars">${starsHTML}</div>
            <span class="rating-text">${product.rating} (${product.reviews})</span>
          </div>

          <div class="product-price-container">
            <div class="product-prices">
              <span class="current-price">${formatInrFromUsd(product.price)}</span>
              ${product.originalPrice > product.price ? `<span class="original-price">${formatInrFromUsd(product.originalPrice)}</span>` : ''}
            </div>
            <div class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
              ${product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>

          ${product.colors && product.colors.length > 0 ? `
            <div class="product-colors">
              <span class="colors-label">Available Colors:</span>
              <div class="color-dots">
                ${colorDotsHTML}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  productsGrid.innerHTML = productsHTML;
  updateProductsView();
}

function updateProductsView() {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  if (currentViewMode === 'list') {
    productsGrid.classList.add('list-view');
  } else {
    productsGrid.classList.remove('list-view');
  }
}

// Reveal-on-scroll animations using IntersectionObserver
function setupRevealObserver() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Observe dynamically added content after product/modal renders
  const reobserve = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  };

  // Hook into renders
  const originalDisplayProducts = displayProducts;
  displayProducts = function(products) {
    originalDisplayProducts(products);
    reobserve();
  };

  const originalLoadFeatured = loadFeaturedProducts;
  loadFeaturedProducts = function() {
    originalLoadFeatured();
    reobserve();
  };
}

// Helper Functions
function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let starsHTML = '';
  
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="star">★</span>';
  }
  
  if (hasHalfStar) {
    starsHTML += '<span class="star half">☆</span>';
  }
  
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="star empty">☆</span>';
  }
  
  return starsHTML;
}

function generateColorDots(colors) {
  if (!colors || colors.length === 0) return '';
  
  const visibleColors = colors.slice(0, 4);
  let html = '';
  
  visibleColors.forEach(color => {
    const colorValue = color.toLowerCase() === 'navy' ? '#000080' : color.toLowerCase();
    html += `<div class="color-dot" style="background-color: ${colorValue}" title="${color}"></div>`;
  });
  
  if (colors.length > 4) {
    html += `<div class="color-more">+${colors.length - 4}</div>`;
  }
  
  return html;
}

function updateProductCount(count) {
  const productCountElements = document.querySelectorAll('#productCount, #visibleProductCount');
  productCountElements.forEach(element => {
    if (element) element.textContent = count;
  });
}

function updateCounters() {
  const wishlistCountElements = document.querySelectorAll('#wishlistCount');
  wishlistCountElements.forEach(element => {
    if (element) element.textContent = wishlist.length;
  });

  const cartCountElements = document.querySelectorAll('#cartCount');
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCountElements.forEach(element => {
    if (element) element.textContent = totalCartItems;
  });

  // Show/hide badges
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    const count = parseInt(badge.textContent);
    badge.style.display = count > 0 ? 'flex' : 'none';
  });
}

// Drawer Logic
function openDrawer(type) {
  const overlay = document.getElementById('drawerOverlay');
  const cartDrawer = document.getElementById('cartDrawer');
  const wishlistDrawer = document.getElementById('wishlistDrawer');

  if (!overlay || !cartDrawer || !wishlistDrawer) return;

  // Close all first
  cartDrawer.classList.remove('active');
  wishlistDrawer.classList.remove('active');

  if (type === 'cart') {
    populateCartDrawer();
    cartDrawer.classList.add('active');
  } else if (type === 'wishlist') {
    populateWishlistDrawer();
    wishlistDrawer.classList.add('active');
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllDrawers() {
  const overlay = document.getElementById('drawerOverlay');
  const drawers = document.querySelectorAll('.drawer');
  drawers.forEach(d => d.classList.remove('active'));
  overlay?.classList.remove('active');
  document.body.style.overflow = '';
}

function populateCartDrawer() {
  const body = document.getElementById('cartDrawerBody');
  const footer = document.getElementById('cartDrawerFooter');
  if (!body || !footer) return;

  if (cart.length === 0) {
    body.innerHTML = '<p class="empty-message">Your cart is empty.</p>';
    footer.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div class="drawer-item-title">${item.name}</div>
        <div class="drawer-item-meta">${item.selectedSize ? `Size: ${item.selectedSize} · ` : ''}${item.selectedColor ? `Color: ${item.selectedColor} · ` : ''}Qty: ${item.quantity}</div>
      </div>
      <div class="drawer-item-price">${formatInrFromUsd(item.price * item.quantity)}</div>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  footer.innerHTML = `
    <div class="drawer-total">
      <span>Total</span>
      <span>${formatInrFromUsd(total)}</span>
    </div>
    <div class="drawer-actions">
      <button class="btn-checkout" id="goToCheckoutBtn">Checkout</button>
      <button class="btn-clear" id="clearCartBtn">Clear</button>
    </div>
  `;

  document.getElementById('clearCartBtn')?.addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCounters();
    populateCartDrawer();
  });

  document.getElementById('goToCheckoutBtn')?.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });
}

function populateWishlistDrawer() {
  const body = document.getElementById('wishlistDrawerBody');
  if (!body) return;

  if (wishlist.length === 0) {
    body.innerHTML = '<p class="empty-message">Your wishlist is empty.</p>';
    return;
  }

  body.innerHTML = wishlist.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <div class="drawer-item-title">${item.name}</div>
        <div class="drawer-item-meta">${item.brand} · ${item.category}</div>
      </div>
      <div class="drawer-item-price">${formatInrFromUsd(item.price)}</div>
    </div>
  `).join('');
}

function updateClearFiltersButton() {
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (!clearFiltersBtn) return;

  const hasActiveFilters = currentFilters.category !== 'all' || 
                          currentFilters.brand !== 'All Brands' || 
                          currentFilters.minPrice || 
                          currentFilters.maxPrice || 
                          currentFilters.minRating > 0 ||
                          currentFilters.search;

  clearFiltersBtn.style.display = hasActiveFilters ? 'flex' : 'none';
}

// Action Functions
function toggleWishlist(product) {
  const existingIndex = wishlist.findIndex(item => item.id === product.id);
  
  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
    showToast('Removed from wishlist', 'success');
  } else {
    wishlist.push(product);
    showToast('Added to wishlist', 'success');
  }
  
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateCounters();
  loadProducts(); // Refresh to update wishlist buttons
}

function addToCart(product) {
  const existingItemIndex = cart.findIndex(item => 
    item.id === product.id && 
    item.selectedSize === (product.selectedSize || '') && 
    item.selectedColor === (product.selectedColor || '')
  );
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += product.quantity || 1;
    showToast('Updated cart quantity', 'success');
  } else {
    cart.push({
      ...product,
      quantity: product.quantity || 1,
      selectedSize: product.selectedSize || '',
      selectedColor: product.selectedColor || ''
    });
    showToast('Added to cart', 'success');
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCounters();
}

function clearAllFilters() {
  currentFilters = {
    category: 'all',
    brand: 'All Brands',
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    search: ''
  };

  // Reset form inputs
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.querySelectorAll('#searchInput, #mobileSearchInput').forEach(input => {
    input.value = '';
  });

  // Reset radio buttons
  document.querySelector('input[name="category"][value="all"]').checked = true;
  document.querySelector('input[name="brand"][value="All Brands"]').checked = true;
  document.querySelectorAll('input[name="priceRange"]').forEach(input => {
    input.checked = false;
  });
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.checked = false;
  });

  loadProducts();
  updateClearFiltersButton();
}

// Modal Functions
function openProductModal(productId) {
  selectedProduct = mockProducts.find(p => p.id === productId);
  if (!selectedProduct) return;

  currentImageIndex = 0;
  selectedSize = '';
  selectedColor = '';
  quantity = 1;

  populateModal();
  
  const modal = document.getElementById('productModal');
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
  selectedProduct = null;
}

function populateModal() {
  if (!selectedProduct) return;

  // Basic info
  document.getElementById('modalBrand').textContent = selectedProduct.brand;
  document.getElementById('modalCategory').textContent = selectedProduct.category;
  document.getElementById('modalTitle').textContent = selectedProduct.name;
  document.getElementById('modalDescription').textContent = selectedProduct.description;

  // Rating
  const ratingElement = document.getElementById('modalRating');
  ratingElement.innerHTML = `
    <div class="stars">${generateStars(selectedProduct.rating)}</div>
    <span>${selectedProduct.rating} (${selectedProduct.reviews} reviews)</span>
  `;

  // Price
  const priceElement = document.getElementById('modalPrice');
  priceElement.innerHTML = `
    <span class="current-price">${formatInrFromUsd(selectedProduct.price)}</span>
    ${selectedProduct.originalPrice > selectedProduct.price ? 
      `<span class=\"original-price\">${formatInrFromUsd(selectedProduct.originalPrice)}</span>` : ''}
  `;

  // Images
  updateModalImage();
  updateModalThumbnails();

  // Colors
  if (selectedProduct.colors && selectedProduct.colors.length > 0) {
    const colorsSection = document.getElementById('modalColors');
    colorsSection.style.display = 'flex';
    const colorOptions = colorsSection.querySelector('.color-options');
    colorOptions.innerHTML = selectedProduct.colors.map(color => {
      const colorValue = color.toLowerCase() === 'navy' ? '#000080' : color.toLowerCase();
      return `
        <div class=\"color-option\" 
             style=\"background-color: ${colorValue}\" 
             onclick=\"selectColor('${color}', this)\" 
             title="${color}"></div>
      `;
    }).join('');
  }

  // Sizes
  if (selectedProduct.sizes && selectedProduct.sizes.length > 0) {
    const sizesSection = document.getElementById('modalSizes');
    sizesSection.style.display = 'flex';
    const sizeOptions = sizesSection.querySelector('.size-options');
    sizeOptions.innerHTML = selectedProduct.sizes.map(size => `
      <div class=\"size-option\" onclick=\"selectSize('${size}', this)\">${size}</div>
    `).join('');
  }

  // Quantity
  document.getElementById('quantityValue').textContent = quantity;

  // Stock status
  const stockElement = document.getElementById('modalStock');
  stockElement.innerHTML = `
    <i class="fas fa-${selectedProduct.inStock ? 'check' : 'times'}"></i>
    ${selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
  `;
  stockElement.className = `stock-status ${selectedProduct.inStock ? 'in-stock' : 'out-of-stock'}`;

  // Update buttons
  const addToCartBtn = document.getElementById('modalAddToCart');
  addToCartBtn.disabled = !selectedProduct.inStock;
  addToCartBtn.innerHTML = `
    <i class="fas fa-shopping-bag"></i>
    ${selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
  `;

  updateModalWishlistButton();
}

function updateModalImage() {
  if (!selectedProduct || !selectedProduct.images) return;

  const modalMainImage = document.getElementById('modalMainImage');
  modalMainImage.src = selectedProduct.images[currentImageIndex];
}

function updateModalThumbnails() {
  if (!selectedProduct || !selectedProduct.images || selectedProduct.images.length <= 1) return;

  const thumbnailsContainer = document.getElementById('modalThumbnails');
  thumbnailsContainer.innerHTML = selectedProduct.images.map((image, index) => `
    <div class="thumbnail ${index === currentImageIndex ? 'active' : ''}" 
         onclick="selectModalImage(${index})">
      <img src="${image}" alt="">
    </div>
  `).join('');
}

function updateModalWishlistButton() {
  const wishlistBtn = document.getElementById('modalWishlist');
  const isInWishlist = wishlist.some(item => item.id === selectedProduct.id);
  
  wishlistBtn.className = `btn-wishlist ${isInWishlist ? 'active' : ''}`;
  wishlistBtn.innerHTML = `<i class="fas fa-heart"></i>`;
}

function selectModalImage(index) {
  currentImageIndex = index;
  updateModalImage();
  updateModalThumbnails();
}

function selectColor(color, el) {
  selectedColor = color;
  document.querySelectorAll('.color-option').forEach(option => option.classList.remove('selected'));
  if (el) el.classList.add('selected');
  const label = document.querySelector('#modalColors label');
  if (label) label.textContent = `Color: ${color}`;
}

function selectSize(size, el) {
  selectedSize = size;
  document.querySelectorAll('.size-option').forEach(option => option.classList.remove('selected'));
  if (el) el.classList.add('selected');
  const label = document.querySelector('#modalSizes label');
  if (label) label.textContent = `Size: ${size}`;
}

// Swiper Initialization
function initializeSwiper() {
  new Swiper('.featuredSwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: 'slide',
    speed: 500,
  });
}

// Toast Notifications
function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon ${type}">
      <i class="fas fa-${type === 'success' ? 'check' : 'exclamation-triangle'}"></i>
    </div>
    <div class="toast-message">${message}</div>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
  `;

  // Add close functionality
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    removeToast(toast);
  });

  toastContainer.appendChild(toast);

  // Auto remove after 3 seconds
  setTimeout(() => {
    removeToast(toast);
  }, 3000);
}

function removeToast(toast) {
  toast.style.animation = 'slideOut 0.3s ease forwards';
  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 300);
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu if open
      const mobileNav = document.getElementById('mobileNav');
      if (mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
      }
    });
  });
});