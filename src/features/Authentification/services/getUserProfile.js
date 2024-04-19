import service from "./api";

async function getUserProfile(token) {
  try {
    const res = await service.getUserProfile(token);
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getUserProfile