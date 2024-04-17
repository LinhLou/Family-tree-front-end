const mockAPI = {
  loginUser: async function(){
    return await Promise.resolve("token")
  },
  signupUser: async function(){
    return await Promise.resolve("Account successfully created")
  }
}

export default mockAPI