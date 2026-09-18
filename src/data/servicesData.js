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
      { id: 1, title: 'Icon Pack', type: 'image', src: '/svg1.jpg', price: '₹99' },
      { id: 2, title: 'Vector Art', type: 'image', src: '/svg2.jpg', price: '₹149' },
    ],
  },
};

// 🔥 Har category ke items + custom card (jo last mein aayega)
export const getItemsWithCustom = (category) => {
  return [...category.items, customCard(category.name)];
};