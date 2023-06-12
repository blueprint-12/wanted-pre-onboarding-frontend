export const check_email = (email: string): boolean => {
  const regex = /@/;
  return regex.test(email);
};

export const check_password = (password: string): boolean => {
  return password.length >= 8;
};
