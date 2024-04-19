import store from "../../services/redux/store";

export default function loaderProfile (){
  const state = store.getState();
  if(state.user.profile){
    return state.user.profile
  }
  throw new Error('You are disconnected! Please connect again!')
}