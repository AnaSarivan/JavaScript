// IN: our script reads the child content width, padding, border,
//     margin in pixels; also the script reads the parent content 
//     width
// FACT: we know the mode of the box-sizing (content/border) and the
//       formula
// OUT: print the total width of the child, print if it fits, print
//      the overflow offset

//   <div> - parent
//      <div></div> - child
//   </div>

// unit - px


// print HOW MUCH OVERFLOW in px?

childWiddth   = 100
childPadding  = 10
childBorder   = 1
childMargin   = 20

parentWidth   = 110

childSize     = childWiddth + ( childPadding + childBorder + childMargin ) * 2
overflow      = childSize > parentWidth // Boolean

hmChildOverflow  = childSize - parentWidth

alert( "Horizontal child size " + childSize + "px" )
alert( "child overflow? " + overflow )
alert( "How much child overflow? " + hmChildOverflow + "px")

