export const selectAuthInfo = (store) => store.auth.isAuth;
export const selectUserInfo = (store) => store.auth.user;
export const selectIsAuthRequestEnded = (store) => store.auth.isAuthRequestEnded;
export const selectIsUserInfoLoading = (store) => store.auth.userInfoRequest;
export const selectResetPasswordOnFirstStepStatus = (store) => store.auth.isResetPasswordOnFirstStepPassed;
export const selectResetPasswordOnSecondStepStatus = (store) => store.auth.isResetPasswordOnSecondStepPassed;
