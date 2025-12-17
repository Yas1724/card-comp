const API_URL = "http://localhost:5000/cards";

export async function getCards() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createCard(formData) {
  const res = await fetch(API_URL, {
    method: "POST",
    body: formData
  });
  return res.json();
}

export async function deleteCard(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      userId: localStorage.getItem("userId")
    }
  });
}
