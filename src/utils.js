const compare = (property, desc = false) => (a, b) => desc ? b[property] - a[property] : a[property] - b[property]
export { compare }