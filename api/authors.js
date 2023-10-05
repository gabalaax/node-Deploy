import express from 'express';
import prisma from './lib/index.js';
import authenticate from './middleware/authenticate.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    if (authors.length === 0) {
      return res.status(404).json({ error: 'Authors not found' });
    }
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const author = await prisma.author.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', authenticate, async (req, res) => {
  try {
    const { name } = req.body;

    const author = await prisma.author.create({
      data: {
        name,
      },
    });

    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const author = await prisma.author.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    if (!author) {
      return res.status(404).json({ error: 'Failed to update author' });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', authenticate, async (req, res) => {
  try {
    const { id } = req.params;

    const author = await prisma.author.delete({
      where: {
        id: Number(id),
      },
    });

    if (!author) {
      return res.status(404).json({ error: 'Failed to delete author' });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;