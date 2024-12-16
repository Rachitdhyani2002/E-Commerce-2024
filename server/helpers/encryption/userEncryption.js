//Import Statement
import bcrypt from 'bcryptjs'

//Hashing Password Function
export const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword
    }
    catch (error) {
       console.error(`Error occurred while hashing password ${error}`)
    }
}

//Compare User's Password With Hashed Password Function
export const comparePassword =async(password,hashedPassword)=>{
      return await bcrypt.compare(password,hashedPassword)
}