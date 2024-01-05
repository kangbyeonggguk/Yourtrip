export const reduxlogin = (uid, token, expirationDate) => ({
  type: "REDUXLOGIN",
  payload: { uid, token, expirationDate },
});

export const reduxlogout = () => ({
  type: "REDUXLOGOUT",
});
