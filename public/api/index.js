export const sendUrl = async url => {
  try {
    await axios.post('/link', { url })
  } catch(e) {
    throw new Error(e.message)
  }
}
