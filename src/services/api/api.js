async function jsonOrThrowError(res){
  if(!res.ok){
    throw new Error((await res.json()).message)
  }
  return await res.json();
}


class APIUser{
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  async loginUser(data){

    try {
      const res = await jsonOrThrowError(await fetch(`${this.baseURL}/login`,{
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

}

export default APIUser