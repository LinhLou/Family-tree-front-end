import APIUser from "./api/user/api";
import mockAPISuccess from "./api/user/mockAPISuccess";
import mockAPIFail from "./api/user/mockAPIFailed";


const baseURL = "http://localhost:4000/api/v1/user";

class UserService{
  constructor(resource){
    this.resource = resource;
  }
  async loginUser(data){
    switch(this.resource){
      case "mockApiSuccess":
        return await mockAPISuccess.loginUser();
      case "mockApiFail":
        return await mockAPIFail.loginUser();
      default:
        const user = new APIUser(baseURL);
        return await user.loginUser(data);
    }

  }
}

export default UserService