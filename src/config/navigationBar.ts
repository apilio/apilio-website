// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Apilio',
		text: 'Apilio'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Features', link: '/features' },
		{ name: 'Integrations', link: '/integrations' },
		{ name: 'Pricing', link: '/pricing' },
		{ name: 'About', link: '/about' }
	],
	navActions: [{ name: 'Start free trial', link: 'https://app.apilio.com/signup', style: 'primary', size: 'lg' }]
}
