var onRun = function (context) {
  const sketch = require("sketch");

  const document = context.document;

  const page = document.currentPage();

  context.selection.forEach((layer) => {
    let x = layer.frame().x();
    let y = layer.frame().y();

    let width = layer.frame().width();
    let height = layer.frame().height();

    var first = null;
    var previous = null;

    var xojo = "";

    layer.points().forEach((point) => {
      if (first == null) {
        xojo = xojo + "p.MoveToPoint( ";

        xojo = xojo + point.point().x * width + ", " + point.point().y * height;

        xojo = xojo + " )" + "\r" + "\r";

        first = point;
      } else {
        xojo = xojo + "p.AddCurveToPoint( ";

        xojo =
          xojo +
          previous.curveFrom().x * width +
          ", " +
          previous.curveFrom().y * height;

        xojo = xojo + ", ";

        xojo =
          xojo + point.curveTo().x * width + ", " + point.curveTo().y * height;

        xojo = xojo + ", ";

        xojo = xojo + point.point().x * width + ", " + point.point().y * height;

        xojo = xojo + " )" + "\r";
      }

      previous = point;
    });

    if (layer.isClosed()) {
      xojo = xojo + "p.AddCurveToPoint( ";

      xojo =
        xojo +
        previous.curveFrom().x * width +
        ", " +
        previous.curveFrom().y * height;

      xojo = xojo + ", ";

      xojo =
        xojo + first.curveTo().x * width + ", " + first.curveTo().y * height;

      xojo = xojo + ", ";

      xojo = xojo + first.point().x * width + ", " + first.point().y * height;

      xojo = xojo + " )" + "\r";
    }

    const output = new sketch.Text({
      parent: page,
      alignment: sketch.Text.Alignment.left,
      text: xojo,
    });

    output.frame.x = x;
    output.frame.y = y;

    output.adjustToFit();
  });
};
