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
  //leftX will be the max of the two left sides of the rects
  let leftX = Math.max(rect1.leftX, rect2.leftX);
  //width will be the difference between the min of the two rights and leftX
  let width = Math.min(rect1.leftX + rect1.width, rect2.leftX + rect2.width) - leftX;
  //bottomY will be the max of the two bottoms
  let bottomY = Math.max(rect1.bottomY, rect2.bottomY);
  //height will be the difference between the min of the two tops and bottomY
  let height = Math.min(rect1.bottomY + rect1.height, rect2.bottomY + rect2.height) - bottomY;
  //if maxL > minR or maxB > minT they do not overlap
  return width > 0 && height > 0 ? {
    leftX: leftX,
    bottomY: bottomY,
    width: width,
    height: height,
  } : null;
}

/*Overlapping rectangles*/
// var rect1 = {
//   leftX: 1,
//   bottomY: 2,
//   width: 3,
//   height: 1
// };

// var rect2 = {
//   leftX: 2,
//   bottomY: 1,
//   width: 1,
//   height: 3
// };

/*Non-overlapping rectangles*/
// var rect1 = {
//   leftX: 1,
//   bottomY: 3,
//   width: 1,
//   height: 1
// };

// var rect2 = {
//   leftX: 2,
//   bottomY: 1,
//   width: 2,
//   height: 2
// };

/*Containing rectangles*/
var rect1 = {
  leftX: 1,
  bottomY: 2,
  width: 4,
  height: 3
};

var rect2 = {
  leftX: 2,
  bottomY: 3,
  width: 2,
  height: 1
};

/*Rectangles sharing an edge*/
var rect1 = {
  leftX: 1,
  bottomY: 1,
  width: 1,
  height: 1
};

var rect2 = {
  leftX: 2,
  bottomY: 1,
  width: 1,
  height: 1
};


console.log(findOverlap(rect1, rect2));