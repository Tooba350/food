// SPA Routing Logic
const navLinks = document.querySelectorAll('.nav-link');
const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

function switchView(targetId) {
    // Hide all views
    views.forEach(view => {
        view.classList.remove('active');
    });

    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Show target view
    const targetView = document.getElementById(targetId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Highlight active nav link (except logo)
    navLinks.forEach(link => {
        if (link.getAttribute('data-target') === targetId && !link.classList.contains('logo')) {
            link.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

// Add event listeners to nav links and buttons
[...navLinks, ...navBtns].forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = el.getAttribute('data-target');
        if(targetId) {
            switchView(targetId);
        }
    });
});


// Modal Data for all 16 items
const foodData = {
    // Junk Food
    'junk-1': { name: 'Johnny & Jugnu', image: 'wehshi.jpg', desc: "Lahore's legendary Wehshi Burger, packed with crispy chicken, melted cheese, and their secret signature sauce.", price: 'Rs. 750' },
    'junk-2': { name: 'Fork n Knives', image: 'pizza.jpg', desc: "The famous Kitchen Special Pizza, boasting a deep-dish crust loaded with premium chicken chunks.", price: 'Rs. 1,800' },
    'junk-3': { name: 'OPTP', image: 'fries.jpg', desc: "Gourmet Loaded Fries topped with crispy chicken strips, jalapeños, and drenched in spicy garlic mayo.", price: 'Rs. 650' },
    'junk-4': { name: 'Howdy', image: 'son-of-a-bun.jpg', desc: "Son of a Bun – Extra crispy, juicy fried chicken paired with premium buns and renowned spicy seasoning.", price: 'Rs. 950' },
    
    // Desi Food
    'desi-1': { name: 'Butt Karahi', image: 'karahi.jpg', desc: "Authentic Lahori Mutton Karahi cooked in pure desi ghee with a rich blend of traditional spices.", price: 'Rs. 2,500 / kg' },
    'desi-2': { name: 'Waris Nihari', image: 'nihari.jpg', desc: "Slow-cooked Beef Nihari served piping hot, garnished with fresh ginger, green chilies, and lemon.", price: 'Rs. 800' },
    'desi-3': { name: 'Waqas Biryani', image: 'biryani.jpg', desc: "Famous layered Chicken Biryani with aromatic spices, tender chicken, and perfectly cooked basmati rice.", price: 'Rs. 450' },
    'desi-4': { name: 'Arif Chatkhara', image: 'tawa-chicken.jpg', desc: "Spicy Tawa Chicken prepared on a sizzling flat griddle with a heavy hit of green chilies and yogurt.", price: 'Rs. 900' },

    // Seafood
    'sea-1': { name: 'Bashir Darul Mahi', image: 'finger-fish.jpg', desc: "Crispy fried Finger Fish with a secret batter, served with special apricot and plum chutney.", price: 'Rs. 1,200' },
    'sea-2': { name: 'Fresh Catch', image: 'grilled-prawns.jpg', desc: "Jumbo Grilled Prawns marinated in a smoky coastal spice blend, served with lemon butter sauce.", price: 'Rs. 1,800' },
    'sea-3': { name: 'Local Catch', image: 'tawa-machli.jpg', desc: "Lahori style Tawa Machli pan-fried to perfection with authentic coastal spices.", price: 'Rs. 1,100' },
    'sea-4': { name: 'Rashid Seafood', image: 'fish-tikka.jpg', desc: "Charcoal-grilled Fish Tikka, smoky, tender, and intensely flavorful.", price: 'Rs. 1,400' },

    // Desserts
    'dessert-1': { name: 'Chaman', image: 'ice-cream.jpg', desc: "Gourmet Ice Cream crafted with pure milk and natural flavors, a Lahori classic.", price: 'Rs. 300' },
    'dessert-2': { name: 'Local Sweets', image: 'gulab-jamun.jpg', desc: "Soft, melt-in-the-mouth Hot Gulab Jamuns soaked in a fragrant rose-water and cardamom syrup.", price: 'Rs. 400' },
    'dessert-3': { name: 'Khalifa', image: 'nan-khatai.jpg', desc: "Legendary almond Nan Khatai baked fresh, crumbly, and deeply satisfying.", price: 'Rs. 600' },
    'dessert-4': { name: 'Sweet End', image: 'molten-lava.jpg', desc: "Decadent Chocolate Molten Lava Cake with a gooey, warm center, served with vanilla bean ice cream.", price: 'Rs. 850' }
};

// Modal Elements
const cards = document.querySelectorAll('.card');
const modalOverlay = document.getElementById('itemModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');

// Open Modal Event
cards.forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const data = foodData[id];
        
        if(data) {
            // Populate Modal
            // If image is missing, we can use a fallback or keep it blank
            modalImg.src = data.image; 
            modalTitle.textContent = data.name;
            modalDesc.textContent = data.desc;
            modalPrice.textContent = data.price;
            
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close Modal Function
const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
};

closeModalBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
