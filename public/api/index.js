export const sendUrl = async url => {
  try {
    const { data } = await axios.post('/link', { url })
    return data
  } catch(e) {
    throw new Error(e.message)
  }
}
