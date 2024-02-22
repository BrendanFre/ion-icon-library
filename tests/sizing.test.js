import sizing from '../lib/sizing';
import { expect, test } from 'vitest'

test('Element has ionMd as class, so should return medium', () => {
  const example = document.createElement('div');
  const image = document.createElement('img');
  example.classList.add('ionMd');
  expect(sizing(example, image)).toBe('medium')
})

test('Element has ionLg as class, so should return large', () => {
  const example = document.createElement('div');
  const image = document.createElement('img');
  example.classList.add('ionLg');
  expect(sizing(example, image)).toBe('large')
})

test('Element has no size class, so should return small', () => {
  const example = document.createElement('div');
  const image = document.createElement('img');
  expect(sizing(example, image)).toBe('small')
})

test('Element has ionLG as class, so should return small', () => {
  const example = document.createElement('div');
  const image = document.createElement('img');
  example.classList.add('ionLG');
  expect(sizing(example, image)).toBe('small')
})