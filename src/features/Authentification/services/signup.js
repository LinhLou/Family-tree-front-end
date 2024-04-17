import UserService from "../../../services/api/user/service";

const user = new UserService('');

async function signup(data){
  try {
    const res = await user.signupUser(data);
    return res
  } catch (error) {
    console.log(error)
    throw new Error(error.message)
  }
}

export default signup