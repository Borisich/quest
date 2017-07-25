export function showForm() {
  return {
    type: 'INITIAL_STATE',
    payload: {
        name: 'SHOW_FORM',
        text: ""
    }
  }
}
export function showError(text) {
    console.log("ACTION's text: "+ text);
  return {
    type: 'PASSWORD_DECLINED',
    payload: {
        name: 'SHOW_ERROR',
        text: text
    }
  }
}
export function showSite() {
  return {
    type: 'PASSWORD_ACCEPTED',
    payload: {
        name: 'SHOW_SITE',
        text: ""
    }
  }
}
