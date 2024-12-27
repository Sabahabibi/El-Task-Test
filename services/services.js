const BASE_URL = "https://67607fab6be7889dc35e25cb.mockapi.io";

async function getUsers() {
  try {
    const response = await fetch(`${BASE_URL}/Users`);
    const data = await response.json();
    // console.log("getUsersApi:", data);
    return data;
  } catch (error) {
    alert("getUsersApi error", error);
  }
}

async function addUser(user) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("addUserApi:", data);
    return data;
  } catch (error) {
    alert("addUserApi error", error);
  }
}

export { getUsers, addUser };
