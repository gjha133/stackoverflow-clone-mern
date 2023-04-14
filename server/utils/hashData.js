import bcrypt from 'bcrypt'

const hashData = async (data, salt = 10) => {
  try {
    const hashedData = await bcrypt.hash(data, salt)
    return hashedData;
  } catch (error) {
    throw Error
  }
}

const verifyHashedData = async (unhashed, hashed) => {
  try {
    const match = await bcrypt.compare(unhashed, hashed)
    return match
  } catch (error) {
    throw error
  }
}

export { hashData, verifyHashedData }