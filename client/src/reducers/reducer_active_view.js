export default function (state = 'INITIAL_STATE', action) {
  switch (action.type) {
    case 'PASSWORD_ACCEPTED':
      return action.payload;
    case 'PASSWORD_DECLINED':
      return action.payload;
    case 'INITIAL_STATE':
      return action.payload;
    default:
      return state;
  }
}
