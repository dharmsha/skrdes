// 📁 data/servicesData.js

export const WHATSAPP_NUMBER = '919528794938';

// 🔥 Custom card (jisme image nahi hoti, sirf white text)
const customCard = (categoryName) => ({
  id: 'custom',
  title: 'Apna Custom Banwao',
  type: 'custom',
  src: '',
  price: 'Apne hisab se',
  note: 'Aap order de sakte hain aur apne hisab se banwa sakte hain',
  whatsappMsg: `Mujhe ${categoryName} ka custom order karna hai`,
});

// 🎨 Copyright-free placeholder images (Unsplash CDN)
export const PLACEHOLDERS = {
  banner:  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
  logo:    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
  theme:   'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
  frame:   'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
  gif:     'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80',
  svg:     'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&q=80',
  default: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
};

export const servicesData = {
  banner: {
    id: 'banner',
    name: 'Banner',
    emoji: '🖼️',
    tagline: 'Premium banners for your channel, business or event',
    items: [
      { id: 1, title: 'Gaming Banner', type: 'image', src: '/banner1.jpg', price: '₹199' },
      { id: 2, title: 'Business Banner', type: 'image', src: '/banner2.jpg', price: '₹249' },
      { id: 3, title: 'YouTube Banner', type: 'image', src: '/banner3.jpg', price: '₹299' },
    ],
  },

  logo: {
    id: 'logo',
    name: 'Logo',
    emoji: '🎨',
    tagline: 'Custom logos designed for your brand identity',
    items: [
      { id: 1, title: 'Modern Logo', type: 'image', src: '/logo1.jpg', price: '₹100-150' },
      { id: 2, title: 'Minimal Logo', type: 'image', src: '/logo2.jpg', price: '₹150-200' },
      { id: 3, title: 'Mascot Logo', type: 'image', src: '/logo3.jpg', price: '₹200-500' },
    ],
  },

  theme: {
    id: 'theme',
    name: 'Theme',
    emoji: '✨',
    tagline: 'Exclusive premium themes for apps and profiles',
    items: [
      { id: 1, title: 'Dark Theme', type: 'image', src: '/theme1.jpg', price: '₹399' },
      { id: 2, title: 'Neon Theme', type: 'image', src: '/theme2.jpg', price: '₹499' },
      { id: 3, title: 'Glass Theme', type: 'image', src: '/theme3.jpg', price: '₹449' },
      { id: 4, title: 'Neon Theme', type: 'image', src: '/theme4.jpg', price: '₹499' },
      { id: 5, title: 'Glass Theme', type: 'image', src: '/theme5.jpg', price: '₹449' },
      { id: 6, title: 'Neon Theme', type: 'image', src: '/theme6.jpg', price: '₹499' },
    ],
  },

  frame: {
    id: 'frame',
    name: 'Frame',
    emoji: '🖼️',
    tagline: 'Stylish frames for photos, DP and gifts',
    items: [
      { id: 1, title: 'Gold Frame', type: 'image', src: '/frame1.jpg', price: '₹600' },
      { id: 2, title: 'Neon Frame', type: 'image', src: '/frame2.jpg', price: '₹600-800' },
    ],
  },

  gif: {
    id: 'gif',
    name: 'Customised GIF',
    emoji: '🎁',
    tagline: 'Personalised GIFs for greetings and special moments',
    items: [
      { id: 1, title: 'Birthday GIF', type: 'video', src: '/gif1.mp4', price: '₹149' },
      { id: 2, title: 'Anniversary GIF', type: 'video', src: '/gif2.mp4', price: '₹199' },
    ],
  },

  svg: {
    id: 'svg',
    name: 'SVG Files',
    emoji: '📁',
    tagline: 'High-quality SVG files for designers and creators',
    items: [
      { id: 1, title: 'Icon Pack', type: 'image', src: '/svg1.png', price: '₹99' },
      { id: 2, title: 'Vector Art', type: 'image', src: '/svg2.jpg', price: '₹149' },
    ],
  },

  // ===== 🆕 NEW CATEGORIES =====

  // 💬 Chat Bubble Frame
  chatbubbleframe: {
    id: 'chatbubbleframe',
    name: 'Chat Bubble Frame',
    emoji: '💬',
    tagline: 'Stylish chat bubble frames for voice chat app profiles',
    items: [
      { id: 1, title: 'Bubble Frame 1', type: 'image', src: '/bubble1.jpg', price: '₹149' },
      { id: 2, title: 'Bubble Frame 2', type: 'image', src: '/bubble2.jpg', price: '₹149' },
      { id: 3, title: 'Bubble Frame 3', type: 'image', src: '/bubble3.jpg', price: '₹199' },
      { id: 4, title: 'Bubble Frame 4', type: 'image', src: '/bubble4.jpg', price: '₹199' },
    ],
  },

  // 🏅 Medals
  medals: {
    id: 'medals',
    name: 'Medals',
    emoji: '🏅',
    tagline: 'Premium medal designs for events, hosts and ranking rewards',
    items: [
      { id: 1, title: 'Medal 1', type: 'image', src: '/medals1.jpg', price: '₹99' },
      { id: 2, title: 'Medal 2', type: 'image', src: '/medals2.jpg', price: '₹99' },
      { id: 3, title: 'Medal 3', type: 'image', src: '/medals3.jpg', price: '₹129' },
      { id: 4, title: 'Medal 4', type: 'image', src: '/medals4.jpg', price: '₹129' },
      { id: 5, title: 'Medal 5', type: 'image', src: '/medals5.jpg', price: '₹149' },
      { id: 6, title: 'Medal 6', type: 'image', src: '/medals.jpg', price: '₹149' },
    ],
  },

  // 👑 VIPs Medals
  vipsmedals: {
    id: 'vipsmedals',
    name: 'VIPs Medals',
    emoji: '👑',
    tagline: 'Exclusive VIP medal designs for premium users and top hosts',
    items: [
      { id: 1, title: 'VIP Medal 1', type: 'image', src: '/vip1.jpg', price: '₹199' },
      { id: 2, title: 'VIP Medal 2', type: 'image', src: '/vip2.jpg', price: '₹199' },
      { id: 3, title: 'VIP Medal 3', type: 'image', src: '/vip3.jpg', price: '₹249' },
      { id: 4, title: 'VIP Medal 4', type: 'image', src: '/vip4.jpg', price: '₹249' },
      { id: 5, title: 'VIP Medal 5', type: 'image', src: '/vip5.jpg', price: '₹299' },
      { id: 6, title: 'VIP Medal 6', type: 'image', src: '/vip6.jpg', price: '₹299' },
      { id: 7, title: 'VIP Medal 7', type: 'image', src: '/vip7.jpg', price: '₹349' },
      { id: 8, title: 'VIP Medal 8', type: 'image', src: '/vip8.jpg', price: '₹349' },
    ],
  },
};

// 🔥 Har category ke items + custom card (jo last mein aayega)
export const getItemsWithCustom = (category) => {
  return [...category.items, customCard(category.name)];
};