export const fetchTest = async () => {
  try {
    const res = await fetch("api/test");
    const data = await res.text();
    return data;
  } catch (err) {
    console.error(err);
  }
};
