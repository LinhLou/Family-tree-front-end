import UserService from "../../../services/api/user/service";
import { resource } from "../../../data/constant";

const service = new UserService(resource); 

export default service;