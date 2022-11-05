/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838',
        },
        'dark': {
          50: '#1d1f2e',
        },
        'reddark': {
          50: '#a25f4b',
        },
      },

      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 }, to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown 4s ease-in-out ',
        fadeIn: 'fadeIn .5s ease-in-out'
      },
      backgroundImage: theme => ({
        'bg-slider': "url('/src/img/slider/slider.jpg')",
        'bg-banner1': "url('/src/img/banner/5be96251aaba7a512bece011_liana-mikah-698524-unsplash.jpg')",
        'bg-banner2': "url('/src/img/banner/5be96251aaba7a512bece011_liana-mikah-698524-unsplash2.jpg')",
        'product-1': "url('/src/img/products/pr1.jpg')",
        'magazine-1': "url('/src/img/magazine/magazine.jpg')",
        'magazine-2': "url('/src/img/magazine/magazine-image-02.jpeg')",
        'magazine-3': "url('/src/img/magazine/magazine-image-03.jpeg')",
        'magazine-4': "url('/src/img/story/story.jpg')",
        'blog1': "url('/src/img/blog/lifestyle-story-01.jpeg')",
      })
    },
  },
  plugins: [],
}
