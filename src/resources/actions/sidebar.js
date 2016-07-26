export const LOAD_SIDEBAR_ITEMS = 'LOAD_SIDEBAR_ITEMS'
export const LOAD_SIDEBAR_ITEMS_OK = 'LOAD_SIDEBAR_ITEMS_OK'
export const LOAD_SIDEBAR_ITEMS_ERR = 'LOAD_SIDEBAR_ITEMS_ERR'

export function loadItems () {
  return {type: LOAD_SIDEBAR_ITEMS}
}

export function loadItemsOk (sidebarItems) {
  return {type: LOAD_SIDEBAR_ITEMS_OK, sidebarItems}
}

export function loadItemsErr (error) {
  return {
    type: LOAD_SIDEBAR_ITEMS_ERR, error}
}
