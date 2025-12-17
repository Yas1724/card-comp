import express from "express";
import multer from "multer";
import Card from "../models/Card.js";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// CREATE card with image
router.post("/", upload.single("image"), async (req, res) => {
  const { name, bio, interests, socials, createdBy } = req.body;
  const card = new Card({
    name,
    bio,
    interests: JSON.parse(interests),
    socials: JSON.parse(socials),
    imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
  });

  await card.save();
  res.json(card);
});

// READ all cards
router.get("/", async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const card = await Card.findById(req.params.id);

  if (!card) {
    return res.status(404).json({ message: "Card not found" });
  }

  if (card.createdBy !== req.headers.userid) {
    return res.status(403).json({ message: "Not allowed" });
  }

  await Card.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});


export default router;
