
async function jsonOrThrowError(res){
  if(!res.ok){
    throw new Error((await res.json()).message)
  }
  return await res.json();
}

const baseURL = "http://localhost:4000/api/v1/user";


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

}

export default UserAPI