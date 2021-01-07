---
title: Convert Between Inches and Meters
date: 2021-01-06
tags:
  - inches
  - meters
  - distance
---

Sometimes you will come across different measuring systems: Internation System of Units (SI) or the Metric system. This conversion converts between inches and meters. 

For context, 1 meter is approximately 39.37 inches. Therefore, 1 inch is roughly `1 / 39.37` (0.0254) meters.

<div class="inch-to-meter">
  <label for="input">Convert between inches and meters below: (Check the box that your input corresponds with)</label>
  <div class="flex">
    <input id="input" type="number" placeholder="Enter a value...">
    <input class="radio" type="radio" id="inches" value="inches" name="option" checked>
    <label for="inches">Inches</label>
    <input class="radio" type="radio" id="meters" value="meters" name="option">
    <label for="meters">Meters</label>
  </div>
  <button type="submit" id="calc-im">Calculate</button>
</div>

<div class="im-result"></div>