import { Controller, Get } from '@nestjs/common';

const CONTAINER_JOKES = [
  {
    type: 'joke',
    content:
      'Why did the container break up with the VM? It needed more space but less commitment.',
  },
  {
    type: 'joke',
    content:
      "Why don't containers ever get lost? Because they always know their namespace.",
  },
  {
    type: 'joke',
    content:
      'Why did the Docker container go to therapy? It had too many layers of issues.',
  },
  {
    type: 'joke',
    content:
      'What do you call a container that sings? Docker Schmocker. It works on my machine... and yours.',
  },
  {
    type: 'joke',
    content:
      'Why did the developer bring a container to the party? Because it said it works everywhere.',
  },
  {
    type: 'fact',
    content:
      'Docker was first released in 2013 and was originally built on top of LXC (Linux Containers).',
  },
  {
    type: 'fact',
    content:
      'Containers share the host OS kernel, making them far more lightweight than virtual machines.',
  },
  {
    type: 'fact',
    content:
      'A Docker image is made of read-only layers. Each instruction in a Dockerfile creates a new layer.',
  },
  {
    type: 'fact',
    content:
      'The name "Docker" is a reference to dock workers who load and unload shipping containers.',
  },
  {
    type: 'fact',
    content:
      'Containers can start in milliseconds because there is no OS to boot — just a process to launch.',
  },
];

const CONTAINER_FACTS = [
  {
    type: 'fact',
    content:
      'Docker was first released in 2013 and was originally built on top of LXC (Linux Containers).',
  },
  {
    type: 'fact',
    content:
      'Containers share the host OS kernel, making them far more lightweight than virtual machines.',
  },
  {
    type: 'fact',
    content:
      'A Docker image is made of read-only layers. Each instruction in a Dockerfile creates a new layer.',
  },
  {
    type: 'fact',
    content:
      'The name "Docker" is a reference to dock workers who load and unload shipping containers.',
  },
  {
    type: 'fact',
    content:
      'Containers can start in milliseconds because there is no OS to boot — just a process to launch.',
  },
];

@Controller()
export class JokesController {
  @Get('jokes')
  getRandom() {
    const item =
      CONTAINER_JOKES[Math.floor(Math.random() * CONTAINER_JOKES.length)];
    return item;
  }

  @Get('facts')
  getAll() {
    const item =
      CONTAINER_FACTS[Math.floor(Math.random() * CONTAINER_FACTS.length)];
    return item;
  }
}
