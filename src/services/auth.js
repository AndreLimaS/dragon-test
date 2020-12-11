export function isAuthenticated() {
  return window.localStorage.getItem("email");
}

export function setUser(username) {
  return window.localStorage.setItem("email", username);
}
