import { DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}
