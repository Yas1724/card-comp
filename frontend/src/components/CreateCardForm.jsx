import { useState } from "react";
import { motion } from "framer-motion";
import { createCard } from "../api.js";

export default function CreateCardForm({ onAdd }) {
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

    const data = new FormData();
    data.append("name", form.name);
    data.append("bio", form.bio);
    data.append(
      "interests",
      JSON.stringify(form.interests.split(",").map((i) => i.trim()))
    );

    data.append(
      "socials",
      JSON.stringify({
        twitter: form.twitter,
        github: form.github,
        linkedin: form.linkedin,
      })
    );

    if (form.image) data.append("image", form.image);
    data.append("createdBy", localStorage.getItem("userId"));

    // const newCard = await createCard(data);
    // onAdd(newCard);

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#0b0f2f] via-[#1a1f6b] to-[#2b2f9e] flex items-center justify-center overflow-hidden">

      {/* FLOATING OBJECTS */}

      {/* Aircraft */}
      <motion.div
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], rotateZ: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute left-10 top-1/3 opacity-70 pointer-events-none"
      >
        <div className="w-32 h-10 bg-gradient-to-r from-blue-300 to-purple-400 rounded-full blur-sm" />
      </motion.div>

      {/* Orb 1 */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-20 left-1/4 opacity-40"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-xl" />
      </motion.div>

      {/* Orb 2 */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-20 right-20 opacity-30"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 blur-2xl" />
      </motion.div>

      {/* Cube */}
      <motion.div
        animate={{ rotate: [0, 180, 360], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14 }}
        className="absolute right-10 top-1/4 opacity-40"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-lg blur-sm" />
      </motion.div>

      {/* Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute left-20 bottom-20 opacity-30"
      >
        <div className="w-28 h-28 border-2 border-blue-300 rounded-full blur-sm" />
      </motion.div>

      {/* Small particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 4 + i }}
          className={`absolute w-2 h-2 bg-white rounded-full opacity-40`} 
          style={{
            top: `${10 + i * 12}%`,
            left: `${5 + i * 15}%`,
          }}
        />
      ))}

      {/* FORM */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl w-[400px] shadow-2xl space-y-4 z-10"
      >
        <h2 className="text-white text-2xl font-semibold text-center mb-4 tracking-wide">
          Create Profile
        </h2>

        {[
          { name: "name", placeholder: "Name" },
          { name: "bio", placeholder: "Bio" },
          { name: "interests", placeholder: "Interests (comma separated)" },
          { name: "twitter", placeholder: "Twitter URL" },
          { name: "github", placeholder: "GitHub URL" },
          { name: "linkedin", placeholder: "LinkedIn URL" },
        ].map((field) => (
          <input
            key={field.name}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        ))}

        <label className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 cursor-pointer hover:bg-white/20 transition">
          <span className="text-sm opacity-80">
            {form.image ? form.image.name : "Upload Image"}
          </span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-md">Browse</span>
          <input
            type="file"
            onChange={handleImage}
            className="hidden"
          />
        </label>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg"
        >
          Add Card
        </motion.button>
      </motion.form>
    </div>
  );
}
