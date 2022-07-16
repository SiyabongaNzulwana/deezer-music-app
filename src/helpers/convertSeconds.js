

const convertSecondsToMinutes = (seconds) => {
  const minute = Math.floor(seconds / 60)
  const rest_seconds = seconds % 60
  const secondsFormatting = rest_seconds.length > 1 ? rest_seconds : `${rest_seconds}${0}`
  const results = `${0}${minute}:${secondsFormatting}`
  return results
}

export default convertSecondsToMinutes
