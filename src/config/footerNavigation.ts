// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Apilio',
		aboutText:
			'Apilio is the logic layer for your smart home. Connect devices from any brand and build automations that go beyond simple if-then.',
		logo: {
			src: '/logo-full.png',
			alt: 'Apilio',
			text: 'Apilio'
		}
	},
	footerColumns: [
		{
			category: 'Product',
			subCategories: [
				{
					subCategory: 'Features',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Integrations',
					subCategoryLink: '/integrations'
				},
				{
					subCategory: 'Pricing',
					subCategoryLink: '/pricing'
				}
			]
		},
		{
			category: 'Resources',
			subCategories: [
				{
					subCategory: 'Community Forum',
					subCategoryLink: 'https://community.apilio.com'
				},
				{
					subCategory: 'Documentation',
					subCategoryLink: 'https://community.apilio.com/docs'
				},
				{
					subCategory: 'API Docs',
					subCategoryLink: 'https://documenter.getpostman.com/view/6470083/apilio-api/7TNfX9p'
				}
			]
		},
		{
			category: 'Connect',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/about'
				},
				{
					subCategory: 'LinkedIn',
					subCategoryLink: 'https://www.linkedin.com/company/apilio'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Apilio 2026'
	}
}
