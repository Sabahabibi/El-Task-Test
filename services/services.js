const BASE_URL = "https://67607fab6be7889dc35e25cb.mockapi.io";

export async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/Users`);
    const data = await response.json();
    return data;
  } catch (error) {
    alert("getUsersApi error", error);
  }
}
