// TODO: Make more extensive and useful
export function buildDefault (opts) {
  return {
    Sidebar: {
      Favorites: [{
        name: 'Home',
        path: opts.homedir
      }]
    },
    Startpath: opts.homedir
  }
}
