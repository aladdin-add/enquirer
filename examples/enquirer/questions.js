'use strict';

const colors = [
  { message: 'Aqua', name: 'aqua', value: '#00ffff' },
  { message: 'Black', name: 'black', value: '#000000' },
  { message: 'Blue', name: 'blue', value: '#0000ff' },
  { message: 'Fuchsia', name: 'fuchsia', value: '#ff00ff' },
  { message: 'Gray', name: 'gray', value: '#808080' },
  { message: 'Green', name: 'green', value: '#008000' },
  { message: 'Lime', name: 'lime', value: '#00ff00' },
  { message: 'Maroon', name: 'maroon', value: '#800000' },
  { message: 'Navy', name: 'navy', value: '#000080' },
  { message: 'Olive', name: 'olive', value: '#808000' },
  { message: 'Purple', name: 'purple', value: '#800080' },
  { message: 'Red', name: 'red', value: '#ff0000' },
  { message: 'Silver', name: 'silver', value: '#c0c0c0' },
  { message: 'Teal', name: 'teal', value: '#008080' },
  { message: 'White', name: 'white', value: '#ffffff' },
  { message: 'Yellow', name: 'yellow', value: '#ffff00' }
];

module.exports = [
  {
    type: 'multiselect',
    name: 'multicolor',
    message: 'Pick colors',
    choices: colors.map(color => ({ ...color }))
  },
  {
    type: 'multiselect',
    name: 'multicolorx',
    message: 'Pick colors',
    choices: colors.map(color => ({ ...color })),
    skip: () => true,
  },
  {
    type: 'numeral',
    name: 'age',
    message: 'How old are you?',
    float: true
  },
  {
    type: 'password',
    name: 'password',
    message: 'What is your password?'
  },
  {
    type: 'select',
    name: 'color',
    message: 'Pick a color',
    choices: colors.map(color => ({ ...color }))
  }
];
