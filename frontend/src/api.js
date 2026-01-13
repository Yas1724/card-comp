export const BASE_URL = import.meta.env.VITE_API_URL;

// GET all cards
export async function getCards() {
  const res = await fetch(`${BASE_URL}/cards`);
  if (!res.ok) throw new Error("Failed to fetch cards");
  return res.json();
}

// CREATE card
export async function createCard(formData) {
  const res = await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to create card");
  return res.json();
}

// DELETE card (frontend-only delete logic)
export async function deleteCard(id) {
  await fetch(`${BASE_URL}/cards/${id}`, {
    method: "DELETE",
    headers: {
      userId: localStorage.getItem("userId"),
    },
  });
}

