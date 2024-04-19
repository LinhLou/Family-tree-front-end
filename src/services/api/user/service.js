import UserApi from "./api";
import mockApiSuccess from "./mockAPISuccess";
import mockApiFail from "./mockAPIFailed";


class UserService{
  constructor(resource){
    this.resource = resource;
  }
  async loginUser(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockApiSuccess.loginUser();
      case "mockApiFail":
        return await mockApiFail.loginUser();
      default:
        const user = new UserApi();
        return await user.loginUser(data);
    }

  }
  async signupUser(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockApiSuccess.signupUser();
      case "mockApiFail":
        return await mockApiFail.signupUser();
      default:
        const user = new UserApi();
        return await user.signupUser(data);
    }
  }

  async getUserProfile(token){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockApiSuccess.signupUser();
      case "mockApiFail":
        return await mockApiFail.signupUser();
      default:
        const user = new UserApi();
        return await user.getUserProfile(token);
    }
  }
}

export default UserService