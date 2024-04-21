import user from "../../../services/api/apiUser";

async function signup(data) {
  try {
    const res = await user.signupUser(data);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default signup;