import { useState } from "react";
import { createCard } from "../api.js";

function CreateCardForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    bio: "",
    interests: "",
    twitter: "",
    github: "",
    linkedin: "",
    image: null,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setForm({ ...form, image: e.target.files[0] });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 🔥 FormData yahan banta hai
    const data = new FormData();

    data.append("name", form.name);
    data.append("bio", form.bio);
    data.append(
      "interests",
      JSON.stringify(
        form.interests.split(",").map((i) => i.trim())
      )
    );

    data.append(
      "socials",
      JSON.stringify({
        twitter: form.twitter,
        github: form.github,
        linkedin: form.linkedin,
      })
    );

    if (form.image) {
      data.append("image", form.image);
    }

    // 🔐 OWNER ID (IMPORTANT)
    data.append("createdBy", localStorage.getItem("userId"));

    const newCard = await createCard(data);
    onAdd(newCard);

    // reset form
    setForm({
      name: "",
      bio: "",
      interests: "",
      twitter: "",
      github: "",
      linkedin: "",
      image: null,
    });
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="bio"
        placeholder="Bio"
        value={form.bio}
        onChange={handleChange}
      />

      <input
        name="interests"
        placeholder="Interests (comma separated)"
        value={form.interests}
        onChange={handleChange}
      />

      <input
        name="twitter"
        placeholder="Twitter URL"
        value={form.twitter}
        onChange={handleChange}
      />

      <input
        name="github"
        placeholder="GitHub URL"
        value={form.github}
        onChange={handleChange}
      />

      <input
        name="linkedin"
        placeholder="LinkedIn URL"
        value={form.linkedin}
        onChange={handleChange}
      />

      <input type="file" onChange={handleImage} />

      <button type="submit">Add Card</button>
    </form>
  );
}

export default CreateCardForm;
