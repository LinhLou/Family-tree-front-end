import UserAPI from "./api";
import mockSuccessAPI from "./mockAPISuccess";
import mockFailedAPI from "./mockAPIFailed";


class UserService{
  constructor(resource){
    this.resource = resource;
  }
  async loginUser(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockSuccessAPI.loginUser();
      case "mockApiFail":
        return await mockFailedAPI.loginUser();
      default:
        const user = new UserAPI();
        return await user.loginUser(data);
    }

  }
  async signupUser(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockSuccessAPI.signupUser();
      case "mockApiFail":
        return await mockFailedAPI.signupUser();
      default:
        const user = new UserAPI();
        return await user.signupUser(data);
    }
  }
}

export default UserService