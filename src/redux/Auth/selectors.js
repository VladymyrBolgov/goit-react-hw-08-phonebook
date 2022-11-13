//const getIsLoggedIn = state => state.userAuth.isLoggedIn;
//const getUserName = state => state.userAuth.user.name;
//const getUserEmail = state => state.userAuth.user.email; 

//const userAuthSelectors = {
  //  getIsLoggedIn,
  //  getUserName,
  //  getUserEmail
//};
//export default userAuthSelectors;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;