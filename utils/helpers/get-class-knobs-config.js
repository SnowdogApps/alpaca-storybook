export default (items) => {
  items = items.map(item => item.name.replace('.', ''))
  items.unshift(null)
  return items
}
