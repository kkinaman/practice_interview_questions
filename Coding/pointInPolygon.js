/* 
Points will be represented as [x,y] arrays.

The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

You can assume:

The polygon will be a valid simple polygon. That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.
In the tests, the point will never fall exactly on an edge of the polygon.
*/

//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
  var numIntersections = 0;
  poly.forEach((p, i) => {
    let next = i + 1 >= poly.length ? 0 : i + 1;
    if (isIntersecting(p, poly[next], point)) {
      numIntersections++;
    }
  });
  if (numIntersections % 2 !== 0) {
    return true;
  } else { 
    return false;
  }
}

function isIntersecting(a, b, point) {
  if (point[1] > Math.min(a[1], b[1]) && point[1] <= Math.max(a[1], b[1])) { 
    if (a[0] - b[0] === 0) {
      if (a[0] > point[0]) {
        return true;
      } else {
        return false;
      }
    }
    //calculate equation of line between a and b
    let slope = (a[1] - b[1]) / (a[0] - b[0]);
    let bOfLine = a[1] - (slope * a[0]);
    //plug in y-coord of point
    let x = (point[1] - bOfLine) / slope;
    if (x > point[0]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

var poly = [
  [-5, -5], [5, -5],
  [5, 5], [-5, 5]
];

console.log(pointInPoly(poly, [1, 1])); //true