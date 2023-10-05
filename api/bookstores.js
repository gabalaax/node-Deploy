import express from 'express';
import prisma from './lib/index.js';
import authenticate from './middleware/authenticate.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const bookstores = await prisma.bookstore.findMany();
    if (bookstores.length === 0) {
      return res.status(404).json({ error: 'Bookstores not found' });
    }
    res.json(bookstores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const { name, location } = req.body;

    const bookstore = await prisma.bookstore.create({
      data: {
        name,
        location,
      },
    });

    res.status(201).json({ bookstore, message: "Bookstore created" });
  } catch (error) {
    console.error('Error creating bookstore:', error);
    res.status(500).json({ error: 'Failed to create bookstore' });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;

    const bookstore = await prisma.bookstore.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        location,
      },
    });

    if (!bookstore) {
      return res.status(404).json({ error: 'Bookstore not found' });
    }

    res.json(bookstore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    const bookstore = await prisma.bookstore.delete({
      where: {
        id: Number(id),
      },
    });

    if (!bookstore) {
      return res.status(404).json({ error: 'Bookstore not found' });
    }

    res.json(bookstore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;