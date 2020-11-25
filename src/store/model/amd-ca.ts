import {Store} from './store';

export const AmdCa: Store = {
	labels: {
		inStock: {
			container: '.btn-shopping-cart',
			text: ['add to cart']
		},
		maxPrice: {
			container: '.product-page-description h4',
			euroFormat: false
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amd.com/en/direct-buy/5450881400/ca'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881400/ca?add-to-cart=true',
			model: '5950x',
			series: 'ryzen5950',
			url: 'https://www.amd.com/en/direct-buy/5450881400/ca'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881500/ca?add-to-cart=true',
			model: '5900x',
			series: 'ryzen5900',
			url: 'https://www.amd.com/en/direct-buy/5450881500/ca'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881600/ca?add-to-cart=true',
			model: '5800x',
			series: 'ryzen5800',
			url: 'https://www.amd.com/en/direct-buy/5450881600/ca'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5450881700/ca?add-to-cart=true',
			model: '5600x',
			series: 'ryzen5600',
			url: 'https://www.amd.com/en/direct-buy/5450881700/ca'
		},
		{
			brand: 'amd',
			cartUrl:
				'https://www.amd.com/en/direct-buy/5458372800/ca?add-to-cart=true',
			model: 'amd reference',
			series: 'rx6800xt',
			url: 'https://www.amd.com/en/direct-buy/5458372800/ca'
		}
	],
	name: 'amd-ca'
};
