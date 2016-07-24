let defaultSidebarItems = [
  {
    path: '/Applications/',
    name: 'Applications'
  }, {
    path: '/Music/',
    name: 'Music'
  }
]

const sidebarItems = (state = defaultSidebarItems, action) => {
  switch (action.type) {
    case 'ADD_ITEM': return state
    case 'REMOVE_ITEM': return state
    default: return state
  }
}

export default sidebarItems
