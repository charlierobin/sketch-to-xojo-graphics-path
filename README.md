# Convert Sketch paths/shapes to Xojo GraphicsPath methods

Only works on simple ungrouped paths at the moment, with each shape/path normalised to 0,0.

If there is a rotation applied to the shape, it needs to be flattened .

All the above shortcomings will hopefully be addressed (and quickly), but single simple paths were enough for what I was trying to achieve, so that’s all I bothered implementing.

Download and install the plugin into your local Sketch plugins directory.

Mine is:

`/Users/charlie/Library/Application Support/com.bohemiancoding.sketch3/Plugins`

If Sketch is running, you will likely have to quit and relaunch.

Select one or more shapes/paths in Sketch, then select `XojoGraphicsPath` ▸ `Generate` from the `Plugins` menu, or use the keyboard shortcut, `shift command X`.

A text frame with the generated Xojo code is placed at the 0,0 of each object. This is the code which can be copied and pasted into the Xojo IDE.

(It’s done this way because I can’t figure out how to put the code directly onto the clipboard. As with the Illustrator version of this.)

