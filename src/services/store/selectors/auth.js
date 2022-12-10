export const selectAuthInfo = (store) => store.auth.isAuth;
export const selectUserInfo = (store) => store.auth.user;
export const selectResetPasswordOnFirstStepStatus = (store) => store.auth.isResetPasswordOnFirstStepPassed;
export const selectResetPasswordOnSecondStepStatus = (store) => store.auth.isResetPasswordOnSecondStepPassed;
