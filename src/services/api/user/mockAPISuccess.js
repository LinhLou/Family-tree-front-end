const mockAPI = {
  loginUser: async function(){
    return await Promise.resolve("token")
  },
  signupUser: async function(){
    return await Promise.resolve("Account successfully created")
  },
  getUserProfile: async function(){
    return await Promise.resolve({
      "id": "string",
      "username": "string",
      "password": "string",
      "email": "user@example.com",
      "phoneNumber": "string",
      "photo": "string",
      "createdAt": "2024-04-01T12:15:10.716Z",
      "updatedAt": "2024-04-01T12:15:10.716Z"
    })
  },
  verifyEmail: async function(){
    return await Promise.resolve({
      "status": 200,
      "message": "send mail problem"
    })
  }
}

export default mockAPI