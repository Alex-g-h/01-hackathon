export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

const GAP = 5; // small gap from side for visibility, [pixels]

/**
 * Calculate correct X position for context menu that fit to screen totally
 * @param {*} clickLeft Position X of mouse click
 * @param {*} parentWidth Parent element width
 * @param {*} menuWidth Context menu width
 * @returns X coordinate of context menu in integer
 */
export function getContextMenuLeftPosition(clickLeft, parentWidth, menuWidth) {
  let left = clickLeft;

  // prevent menu overlap outside the screen
  if (clickLeft + menuWidth > parentWidth)
    left = parentWidth - menuWidth - GAP;

  // for visibility
  if (clickLeft < GAP)
    left = GAP;
  return left;
}


/**
 * Calculate correct Y position for context menu that fit to screen totally
 * @param {*} clickLeft Position Y of mouse click
 * @param {*} parentWidth Parent element height
 * @param {*} menuWidth Context menu height
 * @returns Y coordinate of context menu in integer
 */
 export function getContextMenuTopPosition(clickTop, parentHeight, menuHeight) {
  let top = clickTop;

  // prevent menu overlap outside the screen
  if (clickTop + menuHeight > parentHeight)
    top = parentHeight - menuHeight - GAP;

  // for visibility
  if (clickTop < GAP)
   top = GAP;
  return top;
}