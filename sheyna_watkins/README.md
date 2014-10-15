#Build a Page
###A Project for Code Fellows Foundations 2: UX/UI

I opted to use Reset for this assignment; I’ll try Normalize in the future. Reset wipes out all built-in browser styling while Normalize aims to make browser styling consistent across browsers.  As I understand it, it often depends on what you are building as to which base css works best or allows you to write less code. Most of the reviews I read online were from people who preferred Normalize over Reset. I’m going to need more experience using both.

Even though this is a one-page project, I thought of my site as if it had more (at least a link to the rest of the story). So I broke my styles into blocks that could be combined in different ways on different pages. For example the article on this page is put in a style class called “contentBox” which provides most of the boxes base formats: padding, width, position etc … but I added addition styles using the class “contentBox--Right” which alters the box’s placement on the page. The class “backgroundBlock” is the main background framework. But it can be altered with additional classes that can add either color or an image to the block.

I wasn’t quite sure how to name the styles I used to apply background-color to various blocks. I used BEM naming conventions for most of the style names but didn’t know how to name these as I used one to alter “backgroundBlock” and another to alter “contentBox.” My intention was that on a larger site those colors could be applied to several different blocks and not be dependent on one base block that they would style exclusively.

I had more trouble distinguishing between CSS that should go in the layout.css file or the module.css file. I’m going to need to see examples of this to see where the designer is drawing the line between the different styles. Most of this page is built using the class “backgroundBlock” (I used it for the header and the footer as well). Because I reused it so much it would seem to fit under the category of Module, but because it is managing the core of the layout should it go under Layout?

###Image note
All the graphics used in this project are free images from [Morguefile.com](http://www.morguefile.com/).
