const mockAPI = {
  loginUser: async function () {
    return await Promise.reject({
      "status": 400,
      "message": "password is invalid!"
    })
  },
  signupUser: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "password is invalid!"
    })
  },
  getUserProfile: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "string"
    })
  },
  verifyEmail: async function(){
    return await Promise.reject({
      "status": 400,
      "message": "send mail problem"
    })
  }
};

export default mockAPI;