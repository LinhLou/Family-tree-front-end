
async function jsonOrThrowError(res){
  if(!res.ok){
    throw new Error((await res.json()).message)
  }
  return await res.json();
}

const baseURL = process.env.API_URL || "http://localhost:4000/api/v1/user";


class UserAPI{
  async loginUser(data){
    try {
      const res = await jsonOrThrowError(await fetch(`${baseURL}/login`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      }))

      const token = await res.body.token;
      return token
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async signupUser(data){
    try {
      const res = await jsonOrThrowError(await fetch(`${baseURL}`,{
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }))

      const message = await res.message
      return message
      
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getUserProfile(token){
    try {
      const res = await jsonOrThrowError(await fetch(`${baseURL}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${token}`
        }
      }));
      const profile = await res.body
      return profile
    } catch (error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  async verifyEmail(data){
    try {
      const res = await jsonOrThrowError(await fetch(`${baseURL}/verify-email`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
      }))
      return res
    } catch (error) {
      throw new Error(error.message)
    } 
  } 

  async resetPassword(data){
    try {
      const res = await jsonOrThrowError(await fetch(`${baseURL}/reset-password`,{
        method: "PUT",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${data.token}`
        },
        body: JSON.stringify(data)
      }))
      return res
    } catch (error) {
      throw new Error(error.message)
    }
  }

}

export default new UserAPI()