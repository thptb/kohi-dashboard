// Product data
const products = [
    { id: 1, name: 'Bussin Barista', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 2, name: 'Rizz Mocha Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 3, name: 'Lit Caramel Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 4, name: 'Creamy Caramel Vanilla', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 5, name: 'Its Giving Vanilla Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 6, name: 'Sheesh! White Mocha Caramel', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 7, name: 'Eyyy! White Chocolate Mocha', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 8, name: 'Its a Vibe Matcha Latte', type: 'Non-Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 9, name: 'Dirty Matcha', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 10, name: 'Iced Americano', type: 'Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 11, name: 'Iced Choco Caramel', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 12, name: 'Iced Milk Choco', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 13, name: 'Eyyy! Spanish Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 14, name: 'Sugar Rushin', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 15, name: 'Tiramisu Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 16, name: 'Strawberry Milk', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 17, name: 'Strawberry Milk Choco', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 18, name: 'Strawberry Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 19, name: 'Vibin Strawberry Matcha Latte', type: 'Non-Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 20, name: 'Peppermint Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 21, name: 'Mocha Peppermint Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 22, name: 'Brown Sugar Milk', type: 'Non-Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 23, name: 'Brown Sugar Espresso', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 24, name: 'Brown Sugar Latte', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 25, name: 'Brown Sugar Vanilla', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 26, name: 'Brewed Coffee (Kapeng Barako)', type: 'Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 27, name: 'Hot Lemon Black Tea', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 28, name: 'Hot Americano', type: 'Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 29, name: 'Iced Lemon Black Tea', type: 'Juice', price: 49, image: 'assets/product-images/default.png' },
    { id: 30, name: 'Green Apple Fruit Tea', type: 'Juice', price: 49, image: 'assets/product-images/default.png' },
    { id: 31, name: 'Perfect Peach Iced Tea', type: 'Juice', price: 59, image: 'assets/product-images/default.png' },
    { id: 32, name: 'Iced Strawberry Tea', type: 'Juice', price: 49, image: 'assets/product-images/default.png' },
    { id: 33, name: 'Classic Milk Tea', type: 'Non-Coffee', price: 49, image: 'assets/product-images/default.png' },
    { id: 34, name: 'Tuna Bunwich', type: 'Snack', price: 19, image: 'assets/product-images/default.png' },
    { id: 35, name: 'Egg Bunwich', type: 'Snack', price: 19, image: 'assets/product-images/default.png' },
    { id: 36, name: 'Affogato', type: 'Snack', price: 39, image: 'assets/product-images/default.png' },
    { id: 37, name: 'Vanilla Ice Cream', type: 'Snack', price: 86, image: 'assets/product-images/default.png' },
    { id: 38, name: 'Tiramisu', type: 'Snack', price: 39, image: 'assets/product-images/default.png' },
    { id: 39, name: 'Cozy Sunset Vibes', type: 'Mocktail', price: 89, image: 'assets/product-images/default.png' },
    { id: 40, name: 'Lychee Blossom', type: 'Mocktail', price: 89, image: 'assets/product-images/default.png' },
    { id: 41, name: 'Vanilla Coffee Caramel 900', type: 'Snack', price: 111, image: 'assets/product-images/default.png' },
    { id: 42, name: 'Vanilla Coffee Caramel', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 43, name: 'Vanilla Matcha', type: 'Non-Coffee', price: 69, image: 'assets/product-images/default.png' },
    { id: 44, name: 'Citrus Blush Slay', type: 'Juice', price: 59, image: 'assets/product-images/default.png' },
    { id: 45, name: 'Spanish Cold Brew Americano', type: 'Coffee', price: 59, image: 'assets/product-images/default.png' },
    { id: 46, name: 'Chocolate Caramel Cold Brew', type: 'Coffee', price: 69, image: 'assets/product-images/default.png' }
];

// Addon data
const addons = [
    { id: 1, name: 'Extra Shot', price: 25, image: 'assets/addon-images/default.png' },
    { id: 2, name: 'Nata', price: 15, image: 'assets/addon-images/default.png' },
    { id: 3, name: 'Caramel Syrup', price: 15, image: 'assets/addon-images/default.png' },
    { id: 4, name: 'Caramel Drizzle', price: 15, image: 'assets/addon-images/default.png' },
    { id: 5, name: 'Choco Syrup', price: 15, image: 'assets/addon-images/default.png' },
    { id: 6, name: 'Choco Drizzle', price: 15, image: 'assets/addon-images/default.png' }
];

// Menu data
let menuItems = [
    {
        id: 1,
        name: "Bussin Barista",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
    {
        id: 2,
        name: "Rizz Mocha Latte",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
    {
        id: 3,
        name: "Lit Caramel Latte",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
    {
        id: 4,
        name: "Creamy Caramel Vanilla",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
    {
        id: 5,
        name: "Its Giving Vanilla Latte",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 6,
        name: "Sheesh! White Mocha Caramel",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 7,
        name: "Eyyy! White Chocolate Mocha",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 8,
        name: "Its a Vibe Matcha Latte",
        category: "Non-Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 9,
        name: "Dirty Matcha",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 10,
        name: "Iced Americano",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 11,
        name: "Iced Choco Caramel",
        category: "Non-Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 12,
        name: "Iced Milk Choco",
        category: "Non-Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 13,
        name: "Eyyy! Spanish Latte",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 14,
        name: "Sugar Rushin",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    },
        {
        id: 15,
        name: "Tiramisu Latte",
        category: "Coffee",
        ingredients: [
            "Milk",
            "Coffee",
            "Ice"
        ]
    }
];

const users = {
    admin: { password: '', role: 'admin' },
    barista: { password: '', role: 'admin' },
    guest: { password: '', role: 'guest' }
};

// Current user state
let currentUser = null;

// DOM elements
const productsGrid = document.getElementById('products-grid');
const addonsGrid = document.getElementById('addons-grid');
const cartItems = document.getElementById('cart-items');
const subtotalElement = document.getElementById('subtotal');
const deliveryFeeElement = document.getElementById('delivery-fee');
const totalElement = document.getElementById('total');
const customerNameInput = document.getElementById('customer-name');
const serviceTypeSelect = document.getElementById('service-type');
const addonTypeSelect = document.getElementById('addon-type');
const clearBtn = document.getElementById('clear-btn');
const generateInvoiceBtn = document.getElementById('generate-invoice-btn');
const invoiceModal = document.getElementById('invoice-modal');
const closeBtn = document.querySelector('.close-btn');
const invoiceContent = document.getElementById('invoice-content');
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const addonsContainer = document.getElementById('addons-container');
const menuGrid = document.getElementById('menu-grid');
const productSearch = document.getElementById('product-search');
const menuSearch = document.getElementById('menu-search');
const addMenuItemBtn = document.getElementById('add-menu-item');
const menuItemModal = document.getElementById('menu-item-modal');
const menuItemForm = document.getElementById('menu-item-form');
const menuItemName = document.getElementById('menu-item-name');
const menuItemCategory = document.getElementById('menu-item-category');
const ingredientsList = document.getElementById('ingredients-list');
const newIngredient = document.getElementById('new-ingredient');
const addIngredientBtn = document.getElementById('add-ingredient');
const saveMenuItemBtn = document.getElementById('save-menu-item');
const cancelMenuItemBtn = document.getElementById('cancel-menu-item');
const toggleThemeBtn = document.getElementById('toggle-theme');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const userRoleSelect = document.getElementById('user-role');
const userDisplay = document.getElementById('user-display');
const container = document.querySelector('.container');
const menuNavBtn = document.getElementById('menu-nav-btn');
const inventoryNavBtn = document.getElementById('inventory-nav-btn');

// Cart state
let cart = [];
let currentProductId = null;
let currentAddonItemIndex = -1;
let currentEditingMenuItemId = null;

function generateReferenceNumber() {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
}

// Initialize the app with login check
function init() {
    // Set initial visibility
    loginModal.style.display = 'block';
    container.style.display = 'none';

    setupLoginEventListeners();
    
    // Check if user is already logged in (from sessionStorage)
    const savedUser = sessionStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        handleSuccessfulLogin();
    }
}
// Setup login event listeners
function setupLoginEventListeners() {
    loginBtn.addEventListener('click', handleLogin);
    logoutBtn.addEventListener('click', handleLogout);
    
    // Allow login on Enter key
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
}

// Handle login
function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const role = userRoleSelect.value;
    
    if (!username || !role) {
        alert('Please enter username and select a role');
        return;
    }
    
    // For guest login, no password needed
    if (role === 'guest') {
        currentUser = { username: username || 'Guest', role: 'guest' };
        handleSuccessfulLogin();
        return;
    }
    
    // Check admin/barista credentials
    const user = users[username.toLowerCase()];
    if (user && user.password === password && user.role === role) {
        currentUser = { username, role };
        handleSuccessfulLogin();
    } else {
        alert('Invalid username, password, or role combination');
    }
}

// Handle successful login
function handleSuccessfulLogin() {
    // Save user to sessionStorage
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    loginModal.style.display = 'none';
    container.style.display = 'block';
    
    // Set up the rest of the app
    setupAppAfterLogin();
}

// Set up the app after successful login
function setupAppAfterLogin() {
    // Update user display
    updateUserDisplay();
    
    // Initialize the rest of the app
    setupNavigation();
    renderProducts();
    renderAddons();
    renderMenu();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    setupEventListeners();
    checkGenerateInvoiceButton();
    updateProductAvailability();
    disableAddons();
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggleThemeBtn.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Hide admin-only features for guest users
    if (currentUser.role === 'guest') {
        menuNavBtn.classList.add('hidden-for-guest');
        inventoryNavBtn.classList.add('hidden-for-guest');
    }
}

// Update user display in header
function updateUserDisplay() {
    userDisplay.textContent = currentUser.username;
    userDisplay.className = `user-display ${currentUser.role}`;
    userDisplay.innerHTML = `
        <i class="fas fa-${currentUser.role === 'admin' ? 'user-shield' : 'user'}"></i>
        ${currentUser.username}
    `;
}

// Handle logout
function handleLogout() {
    // Clear user data
    currentUser = null;
    sessionStorage.removeItem('currentUser');
    
    // Reset UI
    container.style.display = 'none';
    loginModal.style.display = 'block';
    
    // Reset form
    usernameInput.value = '';
    passwordInput.value = '';
    userRoleSelect.value = '';
    
    // Clear cart and other states if needed
    clearCart();
}

// Setup navigation between pages
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get the page to show from data attribute
            const pageToShow = button.getAttribute('data-page');
            
            // Remove active class from all buttons and pages
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Show the corresponding page
            const pageId = `${pageToShow}-page`;
            const pageElement = document.getElementById(pageId);
            if (pageElement) {
                pageElement.classList.add('active');
            }
        });
    });
}

// Render products with category filtering
function renderProducts() {
    productsGrid.innerHTML = '';
    const searchTerm = productSearch.value.toLowerCase();
    
    products.forEach(product => {
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm)) {
            return;
        }
        
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.dataset.productId = product.id;
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-name">${product.name}</div>
            <div class="product-price">₱${product.price.toFixed(2)}</div>
        `;
        productElement.addEventListener('click', () => {
            if (!productElement.classList.contains('disabled')) {
                // Highlight selected product
                document.querySelectorAll('.product-item').forEach(item => {
                    item.classList.remove('selected');
                });
                productElement.classList.add('selected');
                
                addToCart(product);
            }
        });
        productsGrid.appendChild(productElement);
    });
    updateProductAvailability();
}

// Filter products by category
function filterProductsByCategory(category) {
    if (category === 'all') {
        document.querySelectorAll('.product-item').forEach(item => {
            item.style.display = 'flex';
        });
    } else {
        document.querySelectorAll('.product-item').forEach(item => {
            const productId = parseInt(item.dataset.productId);
            const product = products.find(p => p.id === productId);
            item.style.display = product.type === category ? 'flex' : 'none';
        });
    }
}

// Disable all addons initially
function disableAddons() {
    document.querySelectorAll('.addon-item').forEach(item => {
        item.classList.add('disabled');
    });
}

// Enable addons when a product is selected for addons
function enableAddons() {
    document.querySelectorAll('.addon-item').forEach(item => {
        item.classList.remove('disabled');
    });
}

// Update product availability based on form completion
function updateProductAvailability() {
    const isFormComplete = customerNameInput.value.trim() !== '' && serviceTypeSelect.value !== '';
    
    document.querySelectorAll('.product-item').forEach(item => {
        if (isFormComplete) {
            item.classList.remove('disabled');
        } else {
            item.classList.add('disabled');
        }
    });

    // Update addon type dropdown
    addonTypeSelect.disabled = !isFormComplete;
    if (!isFormComplete) {
        addonTypeSelect.value = '';
        addonsContainer.style.display = 'none';
        currentProductId = null;
        currentAddonItemIndex = -1;
        disableAddons();
    }
}

// Add product to cart
function addToCart(product) {
    const wantsAddons = addonTypeSelect.value === 'Yes';
    
    if (wantsAddons) {
        // Create new item for addons
        const newItem = {
            product,
            quantity: 1,
            addons: []
        };
        cart.push(newItem);
        currentProductId = product.id;
        currentAddonItemIndex = cart.length - 1;
        addonsContainer.style.display = 'block';
        enableAddons();
    } else {
        // Check for existing item without addons
        const existingIndex = cart.findIndex(item => 
            item.product.id === product.id && 
            item.addons.length === 0
        );
        
        if (existingIndex !== -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                product,
                quantity: 1,
                addons: []
            });
        }
        disableAddons();
    }
    
    renderCart();
    updateTotals();
    checkGenerateInvoiceButton();
}

// Add addon to cart item
function addAddonToCartItem(addon) {
    if (currentAddonItemIndex === -1) return;
    
    const existingAddonIndex = cart[currentAddonItemIndex].addons.findIndex(a => a.id === addon.id);
    
    if (existingAddonIndex !== -1) {
        cart[currentAddonItemIndex].addons[existingAddonIndex].quantity += 1;
    } else {
        cart[currentAddonItemIndex].addons.push({
            ...addon,
            quantity: 1
        });
    }
    
    renderCart();
    updateTotals();
}

// Remove addon from cart item
function removeAddonFromCartItem(itemIndex, addonIndex) {
    if (itemIndex >= 0 && itemIndex < cart.length) {
        if (addonIndex >= 0 && addonIndex < cart[itemIndex].addons.length) {
            if (cart[itemIndex].addons[addonIndex].quantity > 1) {
                cart[itemIndex].addons[addonIndex].quantity -= 1;
            } else {
                cart[itemIndex].addons.splice(addonIndex, 1);
            }
            renderCart();
            updateTotals();
        }
    }
}

// Render addons
function renderAddons() {
    addonsGrid.innerHTML = '';
    addons.forEach(addon => {
        const addonElement = document.createElement('div');
        addonElement.className = 'addon-item disabled';
        addonElement.dataset.addonId = addon.id;
        addonElement.innerHTML = `
            <img src="${addon.image}" alt="${addon.name}" class="addon-image">
            <div class="addon-name">${addon.name}</div>
            <div class="addon-price">₱${addon.price.toFixed(2)}</div>
        `;
        addonElement.addEventListener('click', () => {
            if (!addonElement.classList.contains('disabled')) {
                // Highlight selected addon
                document.querySelectorAll('.addon-item').forEach(item => {
                    item.classList.remove('selected');
                });
                addonElement.classList.add('selected');
                
                addAddonToCartItem(addon);
            }
        });
        addonsGrid.appendChild(addonElement);
    });
}

// Render cart items with improved addon display
function renderCart() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in cart</p>';
        addonsContainer.style.display = 'none';
        currentProductId = null;
        currentAddonItemIndex = -1;
        disableAddons();
        return;
    }
    
    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        
        const itemInfoElement = document.createElement('div');
        itemInfoElement.className = 'cart-item-info';
        
        let addonsHTML = '';
        if (item.addons.length > 0) {
            addonsHTML = `<div class="cart-item-addons"><strong>Addons:</strong><ul>`;
            item.addons.forEach((addon, addonIndex) => {
                addonsHTML += `
                    <li>
                        ${addon.name} x${addon.quantity} 
                        <button class="delete-addon-btn" data-item-index="${index}" data-addon-index="${addonIndex}">
                            ✕
                        </button>
                    </li>
                `;
            });
            addonsHTML += `</ul></div>`;
        }
        
        itemInfoElement.innerHTML = `
            <div class="cart-item-name">${item.product.name} x${item.quantity}</div>
            ${addonsHTML}
            <div class="cart-item-price">₱${calculateItemTotal(item).toFixed(2)}</div>
        `;
        
        const quantityControls = document.createElement('div');
        quantityControls.className = 'cart-item-quantity';
        quantityControls.innerHTML = `
            <button class="quantity-btn minus" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn plus" data-index="${index}">+</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        
        cartItemElement.appendChild(itemInfoElement);
        cartItemElement.appendChild(quantityControls);
        cartItems.appendChild(cartItemElement);
    });
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            decreaseQuantity(index);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            increaseQuantity(index);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            removeItem(index);
        });
    });
    
    // Add event listeners to addon delete buttons
    document.querySelectorAll('.delete-addon-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemIndex = parseInt(e.target.getAttribute('data-item-index'));
            const addonIndex = parseInt(e.target.getAttribute('data-addon-index'));
            removeAddonFromCartItem(itemIndex, addonIndex);
        });
    });
}

// Calculate item total
function calculateItemTotal(item) {
    const productTotal = item.product.price * item.quantity;
    const addonsTotal = item.addons.reduce((sum, addon) => sum + (addon.price * addon.quantity), 0);
    return productTotal + addonsTotal;
}

// Update order totals
function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);
    
    let deliveryFee = 0;
    const serviceType = serviceTypeSelect.value;
    
    if (serviceType === 'Delivery') {
        const drinkCount = cart.reduce((count, item) => {
            return count + (['Coffee', 'Non-Coffee', 'Juice', 'Mocktail'].includes(item.product.type) ? item.quantity : 0);
        }, 0);
        
        if (drinkCount === 2) {
            deliveryFee = 40;
        } else if (drinkCount === 3) {
            deliveryFee = 20;
        } else if (drinkCount >= 4) {
            deliveryFee = 0;
        }
    }
    
    const total = subtotal + deliveryFee;
    
    subtotalElement.textContent = `₱${subtotal.toFixed(2)}`;
    if (serviceType === 'Delivery' && deliveryFee > 0) {
        document.querySelector('.delivery-fee').style.display = 'flex';
        deliveryFeeElement.textContent = `₱${deliveryFee.toFixed(2)}`;
    } else {
        document.querySelector('.delivery-fee').style.display = 'none';
        deliveryFeeElement.textContent = '₱0.00';
    }
    totalElement.textContent = `₱${total.toFixed(2)}`;
}

// Quantity adjustment functions
function increaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += 1;
        renderCart();
        updateTotals();
        checkGenerateInvoiceButton();
    }
}

function decreaseQuantity(index) {
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        renderCart();
        updateTotals();
        checkGenerateInvoiceButton();
    }
}

function removeItem(index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        renderCart();
        updateTotals();
        checkGenerateInvoiceButton();
    }
}

// Clear cart
function clearCart() {
    cart = [];
    customerNameInput.value = '';
    serviceTypeSelect.value = '';
    addonTypeSelect.value = '';
    addonTypeSelect.disabled = true;
    currentProductId = null;
    currentAddonItemIndex = -1;
    addonsContainer.style.display = 'none';
    renderCart();
    updateTotals();
    checkGenerateInvoiceButton();
    updateProductAvailability();
    disableAddons();
}

// Update date and time
function updateDateTime() {
    const now = new Date();
    currentDateElement.textContent = now.toLocaleDateString();
    currentTimeElement.textContent = now.toLocaleTimeString();
}

// Check if generate invoice button should be enabled
function checkGenerateInvoiceButton() {
    generateInvoiceBtn.disabled = !(
        customerNameInput.value.trim() && 
        serviceTypeSelect.value && 
        cart.length > 0
    );
}

// Generate invoice with consistent styling
function generateInvoice() {
    const customerName = customerNameInput.value;
    const serviceType = serviceTypeSelect.value;
    const now = new Date();
    const subtotal = parseFloat(subtotalElement.textContent.replace('₱', ''));
    const deliveryFee = parseFloat(deliveryFeeElement.textContent.replace('₱', '')) || 0;
    const total = parseFloat(totalElement.textContent.replace('₱', ''));
    
    let invoiceHTML = `
        <div class="invoice" id="invoice-to-download">
            <div class="invoice-header">
                <img src="assets/invoice.png" alt="1521KOHI Logo" class="invoice-logo">
                <h2>1521kohi</h2>
                <p>Our latte slaps, No cap</p>
                <p>G.C.S.R.L</p>
            </div>
            
            <div class="invoice-details">
                <h3>INVOICE</h3>
            </div>

            <div class="invoice-meta">
                <div class="invoice-date">
                    <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
                    <p><strong>Time:</strong> ${now.toLocaleTimeString()}</p>
                </div>
                <div class="invoice-data">
                    <p><strong>Customer:</strong> ${customerName}</p>
                    <p><strong>Service:</strong> ${serviceType}</p>
                </div>
            </div>

            <table class="invoice-items">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    cart.forEach(item => {
        invoiceHTML += `
            <tr>
                <td>${item.product.name}</td>
                <td>${item.quantity}</td>
                <td>₱${item.product.price.toFixed(2)}</td>
                <td>₱${(item.product.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
        
        item.addons.forEach(addon => {
            invoiceHTML += `
                <tr>
                    <td>+ ${addon.name}</td>
                    <td>${addon.quantity}</td>
                    <td>₱${addon.price.toFixed(2)}</td>
                    <td>₱${(addon.price * addon.quantity).toFixed(2)}</td>
                </tr>
            `;
        });
    });

    invoiceHTML += `
                </tbody>
            </table>
            
            <div class="invoice-totals">
                <div class="invoice-subtotal">
                    <span>Subtotal:</span>
                    <span>₱${subtotal.toFixed(2)}</span>
                </div>
    `;

    if (serviceType === 'Delivery' && deliveryFee > 0) {
        invoiceHTML += `
                <div class="invoice-delivery">
                    <span>Delivery Fee:</span>
                    <span>₱${deliveryFee.toFixed(2)}</span>
                </div>
        `;
    }

    invoiceHTML += `
                <div class="invoice-total">
                    <span>Total:</span>
                    <span>₱${total.toFixed(2)}</span>
                </div>
            </div>
            
            <div class="invoice-footer">
                <p>Reference #: ${generateReferenceNumber()}</p>
                <p>Thank you for your order!</p>
                <p>Like and Follow <strong>@1521kohi</strong></p>
                <p>Facebook, Instagram, Tiktok</p>
            </div>
        </div>
    `;
    
    invoiceContent.innerHTML = invoiceHTML;
    
    // Clear existing buttons and add new ones
    const modalFooter = document.querySelector('#invoice-modal .modal-footer');
    modalFooter.innerHTML = '';
    
    const printBtn = document.createElement('button');
    printBtn.className = 'btn';
    printBtn.textContent = 'Print Invoice';
    printBtn.addEventListener('click', printInvoice);
    modalFooter.appendChild(printBtn);
    
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn primary';
    downloadBtn.textContent = 'Download Invoice';
    downloadBtn.addEventListener('click', downloadInvoice);
    modalFooter.appendChild(downloadBtn);
    
    invoiceModal.style.display = 'block';
}

// Print invoice with consistent styling
function printInvoice() {
    const invoiceElement = document.getElementById('invoice-to-download');
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>1521kohi Invoice</title>
                <style>
                    body { 
                        font-family: 'Proxima Nova', sans-serif; 
                        margin: 0; 
                        padding: 20px; 
                        color: #111376;
                    }
                    .invoice { 
                        width: 80mm; 
                        font-size: 12px; 
                        margin: 0 auto; 
                    }
                    .invoice-header { 
                        text-align: center; 
                        margin-bottom: 5px; 
                    }
                    .invoice-logo { 
                        height: 40px; 
                    }
                    .invoice-details { 
                        text-align: center; 
                        margin-bottom: 5px; 
                    }
                    .invoice-details h3 {
                        margin-bottom: 5px;
                    }
                    .invoice-meta {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 5px;
                        font-size: 11px;
                    }
                    .invoice-items { 
                        width: 100%; 
                        border-collapse: collapse; 
                        margin: 10px 0; 
                        font-size: 11px; 
                    }
                    .invoice-items th { 
                        background-color: #111376; 
                        color: white; 
                        text-align: center; 
                        padding: 5px; 
                        border: 1px solid #ddd; 
                    }
                    .invoice-items td { 
                        padding: 5px; 
                        border: 1px solid #ddd; 
                        text-align: center; 
                    }
                    .invoice-totals { 
                        margin-top: 10px; 
                        font-size: 12px; 
                    }
                    .invoice-subtotal,
                    .invoice-delivery,
                    .invoice-total { 
                        display: flex; 
                        justify-content: space-between; 
                        margin-bottom: 5px; 
                    }
                    .invoice-total { 
                        font-weight: bold; 
                        margin-top: 8px; 
                        padding-top: 8px; 
                        border-top: 1px solid #ddd; 
                    }
                    .invoice-footer { 
                        text-align: center; 
                        font-size: 10px; 
                    }
                    .invoice-footer p:first-child {
                        font-weight: bold;
                        margin-bottom: 5px;
                        font-size: 10px;
                        }
                </style>
            </head>
            <body>
                ${invoiceElement.outerHTML}
                <script>
                    window.onload = function() {
                        setTimeout(function() {
                            window.print();
                            window.close();
                        }, 200);
                    };
                </script>
            </body>
        </html>
    `);
    printWindow.document.close();
}

// Download invoice as image
function downloadInvoice() {
    const invoiceElement = document.getElementById('invoice-to-download');
    
    // Ensure html2canvas is loaded
    if (typeof html2canvas !== 'undefined') {
        html2canvas(invoiceElement, {
            scale: 2, // Higher quality
            logging: false,
            useCORS: true,
            allowTaint: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `1521kohi-invoice-${new Date().getTime()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error('Error generating invoice image:', err);
            alert('Error generating invoice image. Please try again.');
        });
    } else {
        alert('Download feature not available right now. Please try again later.');
    }
}

// Menu Management Functions
function renderMenu() {
    menuGrid.innerHTML = '';
    const searchTerm = menuSearch.value.toLowerCase();
    
    menuItems.forEach(item => {
        if (searchTerm && !item.name.toLowerCase().includes(searchTerm)) {
            return;
        }
        
        const menuItemElement = document.createElement('div');
        menuItemElement.className = 'menu-item';
        menuItemElement.dataset.itemId = item.id;
        
        let ingredientsHTML = '<ul>';
        item.ingredients.forEach((ingredient, index) => {
            ingredientsHTML += `
                <li>
                    ${ingredient}
                    <span class="delete-ingredient" data-item-id="${item.id}" data-ingredient-index="${index}">
                        ✕
                    </span>
                </li>
            `;
        });
        ingredientsHTML += '</ul>';
        
        menuItemElement.innerHTML = `
            <h3>
                ${item.name} <small>(${item.category})</small>
                <div class="menu-item-actions">
                    <button class="edit-menu-item" data-item-id="${item.id}">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-menu-item" data-item-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </h3>
            ${ingredientsHTML}
        `;
        
        menuGrid.appendChild(menuItemElement);
    });
    
    // Add event listeners to edit and delete buttons
    document.querySelectorAll('.edit-menu-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
            editMenuItem(itemId);
        });
    });
    
    document.querySelectorAll('.delete-menu-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
            deleteMenuItem(itemId);
        });
    });
    
    // Add event listeners to ingredient delete buttons
    document.querySelectorAll('.delete-ingredient').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
            const ingredientIndex = parseInt(e.currentTarget.getAttribute('data-ingredient-index'));
            deleteIngredient(itemId, ingredientIndex);
            e.stopPropagation();
        });
    });
}

function openMenuItemModal(isNew = true, item = null) {
    ingredientsList.innerHTML = '';
    currentEditingMenuItemId = isNew ? null : item.id;
    
    if (isNew) {
        document.getElementById('menu-modal-title').textContent = 'Add New Menu Item';
        menuItemName.value = '';
        menuItemCategory.value = 'Coffee';
    } else {
        document.getElementById('menu-modal-title').textContent = 'Edit Menu Item';
        menuItemName.value = item.name;
        menuItemCategory.value = item.category;
        
        // Add existing ingredients
        item.ingredients.forEach(ingredient => {
            addIngredientToForm(ingredient);
        });
    }
    
    menuItemModal.style.display = 'block';
}

function addIngredientToForm(ingredient) {
    const ingredientElement = document.createElement('div');
    ingredientElement.className = 'ingredient-item';
    ingredientElement.innerHTML = `
        <span>${ingredient}</span>
        <button class="delete-ingredient-btn" type="button">
            ✕
        </button>
    `;
    
    ingredientElement.querySelector('.delete-ingredient-btn').addEventListener('click', () => {
        ingredientElement.remove();
    });
    
    ingredientsList.appendChild(ingredientElement);
}

function saveMenuItem() {
    const name = menuItemName.value.trim();
    const category = menuItemCategory.value;
    const ingredients = Array.from(ingredientsList.children).map(item => item.textContent.trim());
    
    if (!name) {
        alert('Please enter a name for the menu item');
        return;
    }
    
    if (ingredients.length === 0) {
        alert('Please add at least one ingredient');
        return;
    }
    
    if (currentEditingMenuItemId === null) {
        // Add new item
        const newId = menuItems.length > 0 ? Math.max(...menuItems.map(item => item.id)) + 1 : 1;
        menuItems.push({
            id: newId,
            name,
            category,
            ingredients
        });
    } else {
        // Update existing item
        const itemIndex = menuItems.findIndex(item => item.id === currentEditingMenuItemId);
        if (itemIndex !== -1) {
            menuItems[itemIndex] = {
                id: currentEditingMenuItemId,
                name,
                category,
                ingredients
            };
        }
    }
    
    renderMenu();
    menuItemModal.style.display = 'none';
}

function editMenuItem(itemId) {
    const item = menuItems.find(item => item.id === itemId);
    if (item) {
        openMenuItemModal(false, item);
    }
}

function deleteMenuItem(itemId) {
    if (confirm('Are you sure you want to delete this menu item?')) {
        menuItems = menuItems.filter(item => item.id !== itemId);
        renderMenu();
    }
}

function deleteIngredient(itemId, ingredientIndex) {
    const itemIndex = menuItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1 && ingredientIndex >= 0 && ingredientIndex < menuItems[itemIndex].ingredients.length) {
        menuItems[itemIndex].ingredients.splice(ingredientIndex, 1);
        renderMenu();
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    toggleThemeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
}

// Setup event listeners
function setupEventListeners() {
    clearBtn.addEventListener('click', clearCart);
    generateInvoiceBtn.addEventListener('click', generateInvoice);
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});
    
    customerNameInput.addEventListener('input', () => {
        checkGenerateInvoiceButton();
        updateProductAvailability();
    });
    
    serviceTypeSelect.addEventListener('change', () => {
        updateTotals();
        checkGenerateInvoiceButton();
        updateProductAvailability();
        addonTypeSelect.value = '';
        addonTypeSelect.disabled = !(customerNameInput.value.trim() && serviceTypeSelect.value);
        addonsContainer.style.display = 'none';
        disableAddons();
    });
    
    addonTypeSelect.addEventListener('change', () => {
        if (addonTypeSelect.value === 'No') {
            addonsContainer.style.display = 'none';
            currentProductId = null;
            currentAddonItemIndex = -1;
            disableAddons();
        } else if (addonTypeSelect.value === 'Yes') {
            if (cart.length > 0) {
                currentProductId = cart[cart.length - 1].product.id;
                currentAddonItemIndex = cart.length - 1;
                addonsContainer.style.display = 'block';
                enableAddons();
            } else {
                alert('Please add a product first before selecting addons');
                addonTypeSelect.value = '';
            }
        }
    });
    
    // Category tab event listeners
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => {
                t.classList.remove('active');
            });
            tab.classList.add('active');
            filterProductsByCategory(tab.dataset.category);
        });
    });
    
    // Product search
    productSearch.addEventListener('input', () => {
        renderProducts();
    });
    
    // Menu search
    menuSearch.addEventListener('input', () => {
        renderMenu();
    });
    
    // Menu item management
    addMenuItemBtn.addEventListener('click', () => {
        openMenuItemModal(true);
    });
    
    addIngredientBtn.addEventListener('click', () => {
        const ingredient = newIngredient.value.trim();
        if (ingredient) {
            addIngredientToForm(ingredient);
            newIngredient.value = '';
        }
    });
    
    newIngredient.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addIngredientBtn.click();
        }
    });
    
    saveMenuItemBtn.addEventListener('click', saveMenuItem);
    cancelMenuItemBtn.addEventListener('click', () => {
        menuItemModal.style.display = 'none';
    });
    
    // Theme toggle
    toggleThemeBtn.addEventListener('click', toggleTheme);
    
window.addEventListener('click', (e) => {
    if (e.target === invoiceModal) {
        invoiceModal.style.display = 'none';
    }
    if (e.target === menuItemModal) {
        menuItemModal.style.display = 'none';
    }
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
}
);

// Initialize the app
document.addEventListener('DOMContentLoaded', init);

}
document.addEventListener("DOMContentLoaded", init);
