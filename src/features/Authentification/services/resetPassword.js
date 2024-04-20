import service from "./api";

async function resetPassword(data){
  try {
    const res =  await service.resetPassword(data);
    return res
  } catch (error) {
    throw new Error(error.message)
  }
}

export default resetPassword