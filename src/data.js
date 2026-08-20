// Heaader data

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Cart", path: "/cart" },
  { name: "Orders", path: "/order" },
];

// Home data
export const images = [
  "src/images/hero1-deae5a1f.webp",
  "src/images/hero2-2271e3ad.webp",
  "src/images/hero3-a83f0357.webp",
  "src/images/hero4-4b9de90e.webp",
];

export const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "March 15, 2024",
    comment:
      "Exceptional service and quality products! The delivery was fast and everything arrived in perfect condition.",
    avatar: "src/images/avatar.jpeg",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "March 12, 2024",
    comment:
      "Great selection of products and competitive prices. The website is easy to navigate.",
    avatar: "src/images/avatar.jpeg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    rating: 5,
    date: "March 10, 2024",
    comment:
      "Outstanding customer service! They helped me find exactly what I was looking for.",
    avatar: "src/images/avatar.jpeg",
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return.",
  },
  {
    id: 2,
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within the continental US. Express shipping options are available for 1-2 day delivery.",
  },
  {
    id: 3,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping times vary by location and typically take 7-14 business days.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website.",
  },
];

export const featuredProducts = [
  {
    id: 1,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 2,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 3,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "coffee table",
    price: "$150.00",
  },
];

export const socialLinks = ["Facebook", "Instagram", "Twitter", "GitHub"];

export const services = [
  "1on1 Coaching",
  "Company Review",
  "Accounts Review",
  "HR Consulting",
  "SEO Optimisation",
];

export const companyLinks = ["About", "Meet the Team", "Careers"];

export const footerLinks = ["Terms & Conditions", "Privacy Policy", "Cookies"];

// About Data
export const stats = [
  {
    icon: "Users",
    value: "10K+",
    label: "Happy Customers",
  },
  {
    icon: "Star",
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: "Award",
    value: "50+",
    label: "Awards Won",
  },
  {
    icon: "MessageSquare",
    value: "24/7",
    label: "Customer Support",
  },
];

export const values = [
  {
    title: "Quality First",
    description:
      "We never compromise on the quality of our products and services.",
  },
  {
    title: "Customer Focused",
    description:
      "Your satisfaction is our top priority. We're here to serve you.",
  },
  {
    title: "Innovation Driven",
    description:
      "Constantly evolving and improving to provide the best experience.",
  },
];

// Cart Data

// src/data.js

export const fetchCartItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Basic Tee 6-Pack",
          size: "XXS",
          color: "White",
          quantity: 1,
          price: 250,
          image: "src/images/pexels-photo-943150.webp",
        },
      ]);
    }, 2000); // Simulating a 2-second loading time
  });
};

// Products Data
export const products = [
  {
    id: 1,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 2,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 3,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "coffee table",
    price: "$150.00",
  },
  {
    id: 4,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 5,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 6,
    image: "src/images/hero2-2271e3ad.webp",
    title: "coffee table",
    price: "$150.00",
  },
  {
    id: 7,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "modern chair",
    price: "$75.00",
  },
  {
    id: 8,
    image: "src/images/pexels-photo-943150.webp",
    title: "desk lamp",
    price: "$45.00",
  },
  {
    id: 9,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "bookshelf",
    price: "$200.00",
  },

  {
    id: 10,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 11,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 12,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "coffee table",
    price: "$150.00",
  },
  {
    id: 13,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 14,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 15,
    image: "src/images/hero2-2271e3ad.webp",
    title: "coffee table",
    price: "$150.00",
  },
  {
    id: 16,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "modern chair",
    price: "$75.00",
  },
  {
    id: 17,
    image: "src/images/pexels-photo-943150.webp",
    title: "desk lamp",
    price: "$45.00",
  },
  {
    id: 18,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "bookshelf",
    price: "$200.00",
  },
  {
    id: 19,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 20,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 21,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "coffee table",
    price: "$150.00",
  },
  {
    id: 22,
    image: "src/images/pexels-photo-943150.webp",
    title: "avant-garde lamp",
    price: "$50.00",
  },
  {
    id: 23,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "comfy bed",
    price: "$100.00",
  },
  {
    id: 24,
    image: "src/images/hero2-2271e3ad.webp",
    title: "coffee table",
    price: "$150.00",
  },
  {
    id: 25,
    image: "src/images/pexels-photo-3679601.jpeg",
    title: "modern chair",
    price: "$75.00",
  },
  {
    id: 26,
    image: "src/images/pexels-photo-943150.webp",
    title: "desk lamp",
    price: "$45.00",
  },
  {
    id: 27,
    image: "src/images/pexels-photo-1034584.jpeg",
    title: "bookshelf",
    price: "$200.00",
  },
];
// Orders Data
// Sample order data
export const allOrders = [
  {
    id: "ORD001",
    date: "2024-10-25",
    total: 299.99,
    status: "Delivered",
    items: ["Gaming Headphones", "Wireless Mouse"],
    trackingNo: "TRK123456789",
  },
  {
    id: "ORD002",
    date: "2024-10-24",
    total: 199.5,
    status: "Processing",
    items: ["Mechanical Keyboard"],
    trackingNo: "TRK987654321",
  },
  {
    id: "ORD003",
    date: "2024-10-23",
    total: 499.99,
    status: "Shipped",
    items: ["Monitor", "USB Hub", "Webcam"],
    trackingNo: "TRK456789123",
  },
  {
    id: "ORD004",
    date: "2024-10-22",
    total: 149.99,
    status: "Cancelled",
    items: ["Gaming Mouse"],
    trackingNo: "TRK789123456",
  },
  {
    id: "ORD005",
    date: "2024-10-21",
    total: 899.99,
    status: "Delivered",
    items: ["Gaming Laptop", "Laptop Stand"],
    trackingNo: "TRK321654987",
  },
  {
    id: "ORD006",
    date: "2024-10-20",
    total: 79.99,
    status: "Processing",
    items: ["Wireless Earbuds"],
    trackingNo: "TRK654987321",
  },
];
// SingleProductDetail Data

// Product data
export const product = {
  name: "avant-garde lamp",
  brand: "Modenza",
  price: 179.99,
  description:
    "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  colors: [
    { name: "Black", value: "#000000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Red", value: "#FF0000" },
    { name: "Yellow", value: "#FFFF00" },
  ],
  image: ["../../src/images/pexels-photo-943150.webp"],
};
