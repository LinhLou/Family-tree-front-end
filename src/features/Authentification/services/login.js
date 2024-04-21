import user from "../../../services/api/apiUser";

async function login(data) {
  try {
    const token = await user.loginUser(data);
    return token;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default login;