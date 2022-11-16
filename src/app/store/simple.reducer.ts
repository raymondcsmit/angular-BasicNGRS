import { Action } from '@ngrx/store';

export function SimpleReducer(
  state: String = 'Hello in English',
  action: Action
) {
  console.log(action.type, state);
  switch (action.type) {
    case 'English':
      return (state = 'Hello in English');
    case 'Spanish':
      return (state = 'Hello in Spanish');
    default:
      return state;
  }
}
