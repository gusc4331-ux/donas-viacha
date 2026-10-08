// BASE DE DATOS DE PRODUCTOS
const products = [
    // --- CHOCOLATES ---
    { id: 101, name: "Corazón de Chocolate Relleno", category: "chocolates", price: 15.00, img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=500&q=80", desc: "Chocolate fino con relleno cremoso de manjar o frutilla." },
    { id: 102, name: "Ositos de Chocolate Especiales", category: "chocolates", price: 12.00, img: "https://images.unsplash.com/photo-1582176604856-e822b38f8303?auto=format&fit=crop&w=500&q=80", desc: "Tiernos ositos de chocolate con leche y detalles en blanco." },
    { id: 103, name: "Caja Personalizada con Nombre", category: "chocolates", price: 20.00, img: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=500&q=80", desc: "Bombones moldeados con letras para mensajes especiales." },
    { id: 104, name: "Trufas Gourmet Surtidas", category: "chocolates", price: 18.00, img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=500&q=80", desc: "Pack de trufas bañadas en cacao amargo y frutos secos." },
    { id: 105, name: "Chocotejas de Manjar Blanco", category: "chocolates", price: 8.00, img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=500&q=80", desc: "Chocotejas artesanales rellenas de manjar y nueces." },
    { id: 106, name: "Bombones de Chocolate Blanco", category: "chocolates", price: 10.00, img: "https://images.unsplash.com/photo-1526081347589-7fa3cb41b4b2?auto=format&fit=crop&w=500&q=80", desc: "Suaves bombones de chocolate blanco de alta calidad." },
    { id: 107, name: "Barra de Chocolate Artesanal 70%", category: "chocolates", price: 14.00, img: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=500&q=80", desc: "Chocolate semi amargo ideal para paladares exigentes." },
    { id: 108, name: "Figura de Chocolate 'Flores'", category: "chocolates", price: 16.00, img: "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?auto=format&fit=crop&w=500&q=80", desc: "Diseños florales en relieve de chocolate mixto." },
    { id: 109, name: "Choco-Paletas Temáticas", category: "chocolates", price: 5.00, img: "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=500&q=80", desc: "Divertidas paletas de chocolate ideales para los más pequeños." },
    { id: 110, name: "Monedas y Minis de Chocolate", category: "chocolates", price: 3.00, img: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=500&q=80", desc: "Bolsita de mini chocolates surtidos para degustar." },

    // --- DONAS ---
    { id: 201, name: "Dona Clásica Glaseada de Vainilla", category: "donas", price: 5.00, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80", desc: "Masa esponjosa con glaseado tradicional de vainilla." },
    { id: 202, name: "Dona Cobertura de Chocolate", category: "donas", price: 6.00, img: "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?auto=format&fit=crop&w=500&q=80", desc: "Bañada con espeso chocolate fundido y chispas." },
    { id: 203, name: "Dona Rellena de Manjar Blanco", category: "donas", price: 7.00, img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80", desc: "Abundante relleno de dulce de leche o manjar." },
    { id: 204, name: "Dona Frutilla con Grageas Colores", category: "donas", price: 6.00, img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80", desc: "Glaseado rosa de frutilla decorada con chispitas." },
    { id: 205, name: "Dona Especial Oreo", category: "donas", price: 8.00, img: "https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=500&q=80", desc: "Cobertura de crema de galleta y trozos de galleta Oreo." },
    { id: 206, name: "Dona Rellena de Nutella", category: "donas", price: 9.00, img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=500&q=80", desc: "Cremosa por dentro con auténtica Nutella." },
    { id: 207, name: "Dona de Coco Rallado", category: "donas", price: 6.00, img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80", desc: "Glaseado suave cubierto con finas hojuelas de coco." },
    { id: 208, name: "Dona Mermelada de Mora", category: "donas", price: 7.00, img: "https://images.unsplash.com/photo-1582716401301-82270327e4c4?auto=format&fit=crop&w=500&q=80", desc: "Relleno frutal ácido y dulce elaborado en casa." },
    { id: 209, name: "Mini Donas (Caja de 6 unidades)", category: "donas", price: 15.00, img: "https://images.unsplash.com/photo-1583338917451-ace27954e268?auto=format&fit=crop&w=500&q=80", desc: "Surtido de mini donas con varios glaseados." },
    { id: 210, name: "Dona Especial de Maracuyá", category: "donas", price: 8.00, img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80", desc: "Glaseado de fruta de la pasión cítrico y refrescante." },

    // --- BUÑUELOS ---
    { id: 301, name: "Buñuelo Tradicional Caliente", category: "bunuelos", price: 4.00, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80", desc: "Masa estirada frita al momento, bien crujiente con miel o azúcar." },
    { id: 302, name: "Combo: Buñuelo + Api Morado", category: "bunuelos", price: 10.00, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80", desc: "Buñuelo crujiente acompañado de vaso de Api Morado caliente." },
    { id: 303, name: "Combo: Buñuelo + Api Blanco", category: "bunuelos", price: 10.00, img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=500&q=80", desc: "Buñuelo recién hecho con api blanco espumoso." },
    { id: 304, name: "Combo Mixto (Api Dos Colores + Buñuelo)", category: "bunuelos", price: 12.00, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80", desc: "Api mezclado morado y blanco con un buñuelo grande." },

    // --- REFRESCOS ---
    { id: 401, name: "Refresco de Piña Hervido", category: "refrescos", subcategory: "hervidos", price: 3.00, img: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=500&q=80", desc: "Bebida natural hervida con cáscaras de piña, canela y clavo." },
    { id: 402, name: "Refresco de Quisa / Mocochinchi", category: "refrescos", subcategory: "hervidos", price: 3.50, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80", desc: "Tradicional refresco de durazno deshidratado hervido." },
    { id: 403, name: "Refresco Hervido de Linaza", category: "refrescos", subcategory: "hervidos", price: 3.00, img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80", desc: "Refresco nutritivo de linaza hervida con toque de limón." },
    { id: 404, name: "Refresco Tradicional Somó", category: "refrescos", subcategory: "hervidos", price: 4.00, img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80", desc: "Preparado a base de maíz frangollo cocido con leche y canela." },
    { id: 405, name: "Coca-Cola 500ml", category: "refrescos", subcategory: "gaseosas", price: 6.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Coca-Cola helada." },
    { id: 406, name: "Fanta Naranja 500ml", category: "refrescos", subcategory: "gaseosas", price: 6.00, img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Fanta sabor Naranja." },
    { id: 407, name: "Pepsi 500ml", category: "refrescos", subcategory: "gaseosas", price: 5.50, img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Pepsi refrescante." },
    { id: 408, name: "Sprite 500ml", category: "refrescos", subcategory: "gaseosas", price: 6.00, img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=500&q=80", desc: "Gaseosa Sprite sabor lima-limón." }
];

// VARIABLES DE ESTADO
let currentCategory = 'chocolates';
let currentSubCategory = 'todos';
let selectedProduct = null;

// RENDERIZADO DE PRODUCTOS
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const filtered = products.filter(p => {
        if (p.category !== currentCategory) return false;
        if (currentCategory === 'refrescos' && currentSubCategory !== 'todos') {
            return p.subcategory === currentSubCategory;
        }
        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-8 text-gray-500">No se encontraron productos en esta categoría.</div>`;
        return;
    }

    filtered.forEach(prod => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-amber-100 flex flex-col justify-between group";
        
        card.innerHTML = `
            <div>
                <div class="relative h-48 overflow-hidden bg-gray-100">
                    <img src="${prod.img}" alt="${prod.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                    <span class="absolute top-3 right-3 bg-brand-dark/90 text-amber-300 text-xs font-bold px-3 py-1 rounded-full shadow">
                        ${prod.price.toFixed(2)} Bs
                    </span>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-lg text-brand-dark mb-1 leading-snug">${prod.name}</h3>
                    <p class="text-xs text-gray-500 line-clamp-2 leading-relaxed">${prod.desc}</p>
                </div>
            </div>
            <div class="p-5 pt-0">
                <button onclick="openModal(${prod.id})" class="w-full bg-amber-500 hover:bg-amber-600 text-brand-dark font-bold py-2.5 rounded-xl shadow transition flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-cart-plus"></i>
                    <span>Comprar</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// CAMBIO DE CATEGORÍA
function filterCategory(cat) {
    currentCategory = cat;
    currentSubCategory = 'todos';

    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.className = "cat-btn bg-white text-brand-dark hover:bg-brand-primary hover:text-white font-semibold px-5 py-2.5 rounded-full shadow border border-amber-200 transition text-sm sm:text-base";
    });

    const activeBtn = document.getElementById(`btn-${cat}`);
    if (activeBtn) {
        activeBtn.className = "cat-btn bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-full shadow transition text-sm sm:text-base";
    }

    const subContainer = document.getElementById('subcat-refrescos-container');
    if (cat === 'refrescos') {
        subContainer.classList.remove('hidden');
        subContainer.classList.add('flex');
    } else {
        subContainer.classList.add('hidden');
        subContainer.classList.remove('flex');
    }

    renderProducts();
}

// CAMBIO DE SUBCATEGORÍA
function filterSubCategory(sub) {
    currentSubCategory = sub;
    document.querySelectorAll('.subcat-btn').forEach(btn => {
        btn.className = "subcat-btn bg-white text-brand-dark font-medium px-4 py-1.5 rounded-lg text-xs sm:text-sm hover:bg-amber-200";
    });
    const activeSub = document.getElementById(`sub-btn-${sub}`);
    if (activeSub) {
        activeSub.className = "subcat-btn bg-brand-accent text-white font-medium px-4 py-1.5 rounded-lg text-xs sm:text-sm";
    }
    renderProducts();
}

// LÓGICA DE MODAL
function openModal(productId) {
    selectedProduct = products.find(p => p.id === productId);
    if (!selectedProduct) return;

    document.getElementById('modal-product-id').value = selectedProduct.id;
    document.getElementById('modal-product-img').src = selectedProduct.img;
    document.getElementById('modal-product-name').innerText = selectedProduct.name;
    document.getElementById('modal-product-price').innerText = `${selectedProduct.price.toFixed(2)} Bs p/u`;
    document.getElementById('client-quantity').value = 1;
    document.getElementById('order-notes').value = '';
    
    updateTotal();
    document.getElementById('purchase-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('purchase-modal').classList.add('hidden');
}

function adjustQuantity(delta) {
    const input = document.getElementById('client-quantity');
    let val = parseInt(input.value) || 1;
    val = Math.max(1, val + delta);
    input.value = val;
    updateTotal();
}

function updateTotal() {
    if (!selectedProduct) return;
    const qty = parseInt(document.getElementById('client-quantity').value) || 1;
    const total = selectedProduct.price * qty;
    document.getElementById('modal-total-price').innerText = `${total.toFixed(2)} Bs`;
}

// ENVIAR A WHATSAPP
function sendWhatsAppOrder(e) {
    e.preventDefault();
    if (!selectedProduct) return;

    const name = document.getElementById('client-name').value.trim();
    const qty = document.getElementById('client-quantity').value;
    const delivery = document.getElementById('delivery-method').value;
    const notes = document.getElementById('order-notes').value.trim();
    const total = (selectedProduct.price * qty).toFixed(2);

    const phone = "59164118741";

    let text = `*¡NUEVO PEDIDO - REPOSTERÍA EVER POMA!*%0A%0A`;
    text += `👤 *Cliente:* ${name}%0A`;
    text += `🧁 *Producto:* ${selectedProduct.name}%0A`;
    text += `🔢 *Cantidad:* ${qty}%0A`;
    text += `💵 *Precio Total:* ${total} Bs%0A`;
    text += `🛵 *Entrega:* ${delivery}%0A`;
    if (notes) {
        text += `📝 *Nota Adicional:* ${notes}%0A`;
    }
    text += `%0A_Enviado desde el sitio web en Viacha_`;

    const whatsappUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    closeModal();
}

// CARRUSEL DE IMÁGENES
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    document.getElementById('next-slide').addEventListener('click', nextSlide);
    document.getElementById('prev-slide').addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);

    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.getElementById('purchase-modal').addEventListener('click', (e) => {
        if (e.target.id === 'purchase-modal') closeModal();
    });
});