const getToken = () => {
  const token = localStorage.getItem("access_token");
  return token || undefined;
};

export default getToken;
