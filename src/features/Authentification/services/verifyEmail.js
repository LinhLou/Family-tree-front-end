import user from "../../../services/api/apiUser";

async function verifyEmail(data) {
  try {
    const res = await user.verifyEmail(data);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default verifyEmail;