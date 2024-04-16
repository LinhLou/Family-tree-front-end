const mockAPI = {
  loginUser: async function () {
    return await Promise.reject({
      "status": 400,
      "message": "Password is invalid!"
    });
  }
};

export default mockAPI;