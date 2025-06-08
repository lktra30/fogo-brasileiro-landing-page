
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cores brasileiras e rústicas
				'brand-red': '#D72638',
				'brand-dark-red': '#7A1E1E',
				'brand-cream': '#FAF8F5',
				'brand-beige': '#F5F5F0',
				'brand-black': '#000000',
				// Paleta de cores terrosas brasileiras
				'earth-brown': '#8B4513',
				'clay-red': '#B85450',
				'sand-beige': '#DEB887',
				'wood-brown': '#654321',
				'rust-orange': '#B7410E',
				'charcoal-gray': '#36454F',
				'ember-red': '#C21807',
				'smoke-white': '#F8F8F8',
				'leather-tan': '#D2B48C',
				'forest-green': '#355E3B'
			},
			fontFamily: {
				'serif': ['Rye', 'serif'],
				'slab': ['Cabin Sketch', 'serif'], 
				'sans': ['Special Elite', 'monospace'],
				'rustic': ['Fredoka One', 'sans-serif'],
				'bold': ['Bungee', 'sans-serif'],
				// Fontes mais rústicas e brasileiras
				'gaucho': ['Rye', 'serif'],
				'fazenda': ['Cabin Sketch', 'serif'],
				'churrasco': ['Special Elite', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'wood-grain': "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"/%3E%3Cg fill=\"%23654321\" fill-opacity=\"0.1\"/%3E%3Cpath d=\"M0 0h40v40H0V0z\"/%3E%3C/g%3E%3C/svg%3E')",
				'charcoal-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"/%3E%3Cg fill=\"%23222\" fill-opacity=\"0.05\"/%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"2\"/%3E%3C/g%3E%3C/svg%3E')"
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fire-dance': {
					'0%, 100%': {
						transform: 'translateY(0px) rotate(0deg)',
						filter: 'hue-rotate(0deg)'
					},
					'25%': {
						transform: 'translateY(-2px) rotate(1deg)',
						filter: 'hue-rotate(10deg)'
					},
					'50%': {
						transform: 'translateY(-1px) rotate(-1deg)',
						filter: 'hue-rotate(-5deg)'
					},
					'75%': {
						transform: 'translateY(-3px) rotate(0.5deg)',
						filter: 'hue-rotate(5deg)'
					}
				},
				'smoke-rise': {
					'0%': {
						opacity: '0.6',
						transform: 'translateY(0px) scale(1)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(-50px) scale(1.5)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fire-dance': 'fire-dance 3s ease-in-out infinite',
				'smoke-rise': 'smoke-rise 4s linear infinite'
			},
			boxShadow: {
				'rustic': '0 4px 8px rgba(139, 69, 19, 0.2), 0 2px 4px rgba(101, 67, 33, 0.1)',
				'ember': '0 0 20px rgba(215, 38, 56, 0.3), 0 0 40px rgba(215, 38, 56, 0.1)',
				'wood': '0 8px 16px rgba(101, 67, 33, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
