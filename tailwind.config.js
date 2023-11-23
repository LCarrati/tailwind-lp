/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  // content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      // Custom configuration (custom colors) [na documentação do TW tem tudo que eu posso persinalizar como cor, fonte, etc]
      // Aqui eu chamo a cor da seguinte forma nas classes: 'text-minhacor', 'text-minhacor-dark' ou 'text-minhacor-clara'. Pode ser usada em 'bg' ou qualquer lugar que aceite cor.
      // Isso é pra cores que vou usar em muitos lugares, se for usar uma única vez posso fazer da forma text-[#fee5bc] ou bg-[#fee5bc]
      colors: {
        minhacor: {
          clara: '#fef4e4',
          DEFAULT: '#ffrfd5',
          dark: '#fee5bc'
        }
      },
      // End of Custom configuration (custom colors)

      // Custom configuration (custom media queries)
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
      },
      // End of Custom configuration (custom media queries)
      
      // Custom configuration (animation)
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
      // End of Custom configuration (animation)

    },
  },
  plugins: [],
}

