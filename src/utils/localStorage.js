export const loadInstallationList = () => {
  try {
    const data = localStorage.getItem("installation");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};
