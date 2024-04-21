import user from "../../../services/api/apiUser";

async function getUserProfile(token) {
  try {
    const res = await user.getUserProfile(token);
    return res;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default getUserProfile;