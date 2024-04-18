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
  }
};

export default mockAPI;