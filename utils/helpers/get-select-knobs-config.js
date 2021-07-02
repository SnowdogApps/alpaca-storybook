export default (items) => {
  items = items.map((item) => item.name.replace('.', ''))
  return items.reduce((obj, item) => {
    obj[item] = item
    return obj
  }, {})
}
