const mockAPI = {
  loginUser: async function(){
    return await Promise.resolve("token")
  }
}

export default mockAPI