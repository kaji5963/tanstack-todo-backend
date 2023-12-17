const express = require('express');

const cors = require('cors');

const { PrismaClient } = require('@prisma/client');

const app = express();

const port = 3001;

app.use(cors());

const prisma = new PrismaClient();

app.get('/', (req, res) => res.send('Hello World'));

app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany();

  return res.json(todos);
});

app.listen(port, () => console.log(`Server Listen on Port ${port}`));
