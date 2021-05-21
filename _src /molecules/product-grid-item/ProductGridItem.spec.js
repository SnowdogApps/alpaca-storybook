import { mount, RouterLinkStub } from '@vue/test-utils'
import AProductGridItem from './ProductGridItem.vue'
import ARating from '../../molecules/rating/Rating.vue'

describe('Product Grid Item', () => {
  const sampleRequiredData = {
    id: 'prod1',
    name: 'Some product name - very long name because that\'s important',
    prices: {
      price: '',
      specialPrice: '$100,00',
      oldPrice: '$299,99'
    },
    url: '#',
    imageUrl: '/images/catalog-grid-item/product-1_320_312.jpg',
    badgeText: 'Sale!'
  }

  it('has default structure', () => {
    const wrapper = mount(AProductGridItem, {
      propsData: sampleRequiredData,
      stubs: { 'router-link': RouterLinkStub }
    })

    expect(wrapper.classes()).toContain('a-product-grid-item')
    expect(wrapper.classes().length).toBe(2)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AProductGridItem, {
      propsData: sampleRequiredData,
      slots: {
        badge: '<span data-test="badge">New</span>',
        image: '<img data-test="image" src="/images/catalog-grid-item/product-1_320_312.jpg">',
        name: '<h2 data-test="name">Sample name</h2>',
        prices: '<div data-test="prices">$100</div>',
        addToCart: '<button type="button" data-test="addToCart">Add to cart</button>',
        addToWishList: '<button type="button" data-test="addToWishList">Add to wishlist</button>',
        addToCompare: '<button type="button" data-test="addToCompare">Add to compare</button>',
        rating: ARating
      }
    })

    expect(wrapper.contains(ARating)).toBe(true)

    const badge = wrapper.find('span[data-test="badge"]')
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toEqual('New')

    const image = wrapper.find('img[data-test="image"]')
    expect(image.exists()).toBe(true)

    const name = wrapper.find('h2[data-test="name"]')
    expect(name.exists()).toBe(true)
    expect(name.text()).toEqual('Sample name')

    const prices = wrapper.find('div[data-test="prices"]')
    expect(prices.exists()).toBe(true)

    const actions = wrapper.find('.a-product-grid-item__actions')

    const addToCart = actions.find('button[data-test="addToCart"]')
    expect(addToCart.exists()).toBe(true)
    expect(addToCart.text()).toEqual('Add to cart')

    const addToWishList = actions.find('button[data-test="addToWishList"]')
    expect(addToWishList.exists()).toBe(true)
    expect(addToWishList.text()).toEqual('Add to wishlist')

    const addToCompare = actions.find('button[data-test="addToCompare"]')
    expect(addToCompare.exists()).toBe(true)
    expect(addToCompare.text()).toEqual('Add to compare')
  })
})
