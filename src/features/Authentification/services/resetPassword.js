import user from "../../../services/api/apiUser";

async function resetPassword(data) {
  try {
    const res = await user.resetPassword(data);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default resetPassword;