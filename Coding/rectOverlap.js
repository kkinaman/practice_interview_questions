/*
Given two rectangles, as described below, output the rectangle of their overlap.

Format:
var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};
*/

function findOverlap(rect1, rect2) {
  let leftX = Math.max(rect1.leftX, rect2.leftX);
  let bottomY = Math.max(rect1.bottomY, rect2.bottomY);
  return {
  //leftX will be the max of the two left sides of the rects
    leftX: leftX,
  //bottomY will be the max of the two bottoms
    bottomY: bottomY,
  //width will be the difference between the min of the two rights and leftX
    width: Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width) - leftX,
  //height will be the difference between the min of the two tops and bottomY
    height: Math.min(rect1.bottomY + rect1.height, rect2.bottomY + rect2.height) - bottomY,
  };
}

var rect1 = {
  leftX: 1,
  bottomY: 2,
  width: 3,
  height: 1
};

var rect2 = {
  leftX: 2,
  bottomY: 1,
  width: 1,
  height: 3
};
console.log(findOverlap(rect1, rect2));