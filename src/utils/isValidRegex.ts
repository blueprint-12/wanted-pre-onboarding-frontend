export function check_email(email: string) {
  const emailReg =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return emailReg.test(email);
}

export function check_password(password: string) {
  const isValidPassword = password.trim().length >= 8;
  return isValidPassword;
}
