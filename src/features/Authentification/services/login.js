import service from "./api";

async function login(data) {
  try {
    const token = await service.loginUser(data);
    return token
  } catch (error) {
    throw new Error(error.message);
  }
}

export default login