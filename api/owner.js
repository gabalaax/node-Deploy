import express from 'express';
import prisma from './lib/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingOwner = await prisma.owner.findUnique({
      where: {
        email: email,
      },
    });

    if (existingOwner) {
      return res.status(409).json({ message: "Owner already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newOwner = await prisma.owner.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      message: "Owner successfully created.",
      owner: newOwner,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create owner." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingOwner = await prisma.owner.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingOwner) {
      return res.status(404).json({ message: "Owner not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingOwner.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password." });
    }

    const token = jwt.sign(
      { id: existingOwner.id, email: existingOwner.email },
      PRIVATE_KEY,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Login successful.", token: token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error." });
  }
});

export default router;