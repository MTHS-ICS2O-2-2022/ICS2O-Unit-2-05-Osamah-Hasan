// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of Triangle.
 */
function calculate () {
  // input
  const hours = parseInt(document.getElementById('Hours').value)
  const rate = parseInt(document.getElementById('Rate').value)

  // process
  const pay =(hours * rate) * (1.00 - 0.18)
  const taxes =(hours * rate) * 0.18

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: CAD $ ${pay.toFixed(2)}`
  document.getElementById('tax').innerHTML = 'Your pay will be: CAD $'+ taxes.toFixed(2)
}
