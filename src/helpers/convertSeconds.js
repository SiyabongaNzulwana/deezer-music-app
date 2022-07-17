

const convertSecondsToMinutes = (seconds) => {
  const minute = Math.floor(seconds / 60)
  const rest_seconds = seconds % 60
  let newSeconds = rest_seconds.toString()
  if (newSeconds.length === 1) {
    newSeconds = `${0}${newSeconds}`
  } 
  const results = `${0}${minute}:${newSeconds}`
  return results
}

export default convertSecondsToMinutes
