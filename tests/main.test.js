import main from '../lib/main';
import jsImage from '../javascript.svg'

import { expect, test } from 'vitest'

test('One element has ionJs will return true', () => {
  const example = document.createElement('div');
  const image = document.createElement('img');
  console.log(document);
  const app = document.querySelector('body');
  app.appendChild(example)

  image.src= jsImage
  example.classList.add('ionMd');
  example.classList.add('ionJs');
  expect(main()).toBe('jsIcon')
})

test('No elements has ionJs will return false', () => {
  const example = document.createElement('div');
  const image = document.createElement('img');
  console.log(document);
  const app = document.querySelector('body');
  app.appendChild(example)

  image.src= jsImage
  example.classList.add('ionMd');
  example.classList.add('ionJd');
  expect(main()).toBe('no jsIcon')
})

test('No elements has ionJs will return false', () => {
  const example = document.createElement('div');
  const example2 = document.createElement('div');
  const example3 = document.createElement('div');

  const app = document.querySelector('body');
  app.appendChild(example)
  app.appendChild(example2)
  app.appendChild(example3)
  example.classList.add('ionMd');
  example.classList.add('ionJs');
  example2.classList.add('ionJs');
  example3.classList.add('ionJs');
  expect(main()).toBe('jsIcon')
})

