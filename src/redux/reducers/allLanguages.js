import french from "../../data/lang/fr"
import english from "../../data/lang/eng"

const initialState = {
  language: french,
}

const allLanguages = (state = initialState, action, payload) => {
  if (action.type === "SWITCH_LANGUAGE_FRENCH") {
    return { language: french }
  } else if (action.type === "SWITCH_LANGUAGE_ENGLISH") {
    return { language: english }
  }
  return state
}

export default allLanguages
