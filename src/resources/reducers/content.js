const content = (state = '/', action) => {
  switch (action.type) {
    case 'LOAD_PATH':
      return action.path
    default: return state
  }
}

export default content
