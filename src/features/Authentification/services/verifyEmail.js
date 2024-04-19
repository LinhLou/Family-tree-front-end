import service from "./api";

async function verifyEmail(data){
  try {
    const res = await service.verifyEmail(data);
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

export default verifyEmail