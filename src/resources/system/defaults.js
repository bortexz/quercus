// TODO: Not multiplatform for now!!
export function buildDefault (opts) {
  return {
    Sidebar: {
      Favorites: [{
        name: 'Home',
        path: opts.homedir
      }]
    }
  }
}
