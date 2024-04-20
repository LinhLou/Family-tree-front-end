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

  async verifyEmail(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockApiSuccess.verifyEmail();
      case "mockApiFail":
        return await mockApiFail.verifyEmail();
      default:
        const user = new UserApi();
        return await user.verifyEmail(data);
    }
  }

  async resetPassword(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockApiSuccess.resetPassword();
      case "mockApiFail":
        return await mockApiFail.resetPassword();
      default:
        const user = new UserApi();
        return await user.resetPassword(data);
    }
  }
}

export default UserService