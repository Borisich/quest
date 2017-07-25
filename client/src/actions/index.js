export function showForm() {
  return {
    type: 'INITIAL_STATE',
    payload: 'SHOW_FORM'
  }
}
export function showError() {
  return {
    type: 'PASSWORD_DECLINED',
    payload: 'SHOW_ERROR'
  }
}
export function showSite() {
  return {
    type: 'PASSWORD_ACCEPTED',
    payload: 'SHOW_SITE'
  }
}
