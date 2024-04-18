import service from "./api";

async function signup(data){
  try {
    const res = await service.signupUser(data);
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

export default signup