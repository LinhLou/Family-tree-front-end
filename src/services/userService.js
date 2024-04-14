import APIUser from "./api/api";
import mockAPISuccess from "./api/mockAPISuccess";
import mockAPIFail from "./api/mockAPIFailed";


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