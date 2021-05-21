import { mount, RouterLinkStub } from '@vue/test-utils'
import AProductListItem from './ProductListItem.vue'

describe('Product List Item', () => {
  const sampleRequiredData = {
    id: 'prod1',
    name: 'Some product name - very long name because that\'s important',
    qty: 2,
    options: [
      {
        id: 'size_id_1',
        label: 'Size',
        value: 'XXL'
      },
      {
        id: 'color_id_1',
        label: 'Color',
        value: 'Red'
      }
    ],
    price: {
      price: '',
      specialPrice: '$100,00',
      oldPrice: '$299,99'
    },
    url: '#',
    imageUrl: '/images/catalog-grid-item/product-1_320_312.jpg'
  }

  it('has default structure', () => {
    const wrapper = mount(AProductListItem, {
      propsData: sampleRequiredData,
      stubs: { 'router-link': RouterLinkStub }
    })

    expect(wrapper.classes()).toContain('a-product-list-item')
    expect(wrapper.classes().length).toBe(2)
  })

  it('renders slots content when passed', () => {
    const wrapper = mount(AProductListItem, {
      propsData: sampleRequiredData,
      slots: {
        name: '<h2 data-test="name">Sample name</h2>',
        image: '<img data-test="image" src="/images/catalog-grid-item/product-1_320_312.jpg">',
        prices: '<div data-test="prices">$100</div>',
        options: '<ul data-test="options"><li>option</li></ul>',
        removeAction: '<button type="button" data-test="remove">Remove</button>'
      }
    })

    const name = wrapper.find('h2[data-test="name"]')
    expect(name.exists()).toBe(true)
    expect(name.text()).toEqual('Sample name')

    const image = wrapper.find('.a-product-list-item__image img[data-test="image"]')
    expect(image.exists()).toBe(true)

    const prices = wrapper.find('div[data-test="prices"]')
    expect(prices.exists()).toBe(true)

    const options = wrapper.find('ul[data-test="options"]')
    expect(options.exists()).toBe(true)

    const remove = wrapper.find('.a-product-list-item__action-buttons-wrapper button[data-test="remove"]')
    expect(remove.exists()).toBe(true)
    expect(remove.text()).toEqual('Remove')
  })

  it('hidden action when no qty requested', () => {
    const wrapper = mount(AProductListItem, {
      propsData: Object.assign({ hideQty: true }, sampleRequiredData),
      stubs: { 'router-link': RouterLinkStub }
    })

    const qtyWrapper = wrapper.find('.a-product-list-item__qty-wrapper')
    expect(qtyWrapper.exists()).toBe(false)
  })

  it('render option list', () => {
    const wrapper = mount(AProductListItem, {
      propsData: sampleRequiredData,
      stubs: { 'router-link': RouterLinkStub }
    })

    const optionList = wrapper.find('.a-product-list-item__attributes')
    expect(optionList.exists()).toBe(true)
    expect(wrapper.findAll('dt').length).toBe(sampleRequiredData.options.length)
    expect(wrapper.findAll('dd').length).toBe(sampleRequiredData.options.length)
  })
})
