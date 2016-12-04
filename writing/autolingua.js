/* Render a string in Autolingua writing */
var CHAR_SIZE = 75;
var SPACE_SIZE = 0.1;
var LINE_WIDTH = 0.2;
var DOT_RADIUS = 0.1;
var LINE_DIST = 0.2;
var CHAR_HEIGHT = CHAR_SIZE + (2 * CHAR_SIZE * (LINE_WIDTH + LINE_DIST));

/* Options */
var DRAW_LINES = true;
var DRAW_DOTS = false;

var text = "oitupyslmnabkdef0123456789ABCDEF";
var c = document.getElementById("canvas");

/* Use full screen */
c.width = document.body.clientWidth;
c.height = document.body.clientHeight;

var ctx = c.getContext("2d");
ctx.lineWidth = LINE_WIDTH * CHAR_SIZE;
ctx.fillStyle = "black";

document.onkeypress = function(keyEvent) {
    if (keyEvent.keyCode === 8 || keyEvent.keyCode == 46) {
       keyEvent.preventDefault();

       if (text.length > 0)
       {
           text = text.substring(0, text.length - 1);
       }
    } else if (keyEvent.charCode != 0 && !keyEvent.ctrlKey &&
               !keyEvent.metaKey) {
        keyEvent.preventDefault();
        text = text + String.fromCharCode(keyEvent.charCode);
    }

    console.log(text);
    render(text);
};

/* Maps letters to their id */
var letterDict = {
    'o': 32,
    'i': 1,
    't': 2,
    'u': 3,
    'p': 4,
    'y': 5,
    's': 6,
    'l': 7,
    'm': 8,
    'n': 9,
    'a': 10,
    'b': 11,
    'k': 12,
    'd': 13,
    'e': 14,
    'f': 15,
    '0': 48,
    '1': 17,
    '2': 18,
    '3': 19,
    '4': 20,
    '5': 21,
    '6': 22,
    '7': 23,
    '8': 24,
    '9': 25,
    'A': 26,
    'B': 27,
    'C': 28,
    'D': 29,
    'E': 30,
    'F': 31,
    '.': 33,
    '?': 34
};

/* Map bit indices to regions */
var indexDict = {
    0: {
        start: {
            x: 0.0 + (DOT_RADIUS),
            y: 0.5
        },
        corner: {
            x: 0.0 + (DOT_RADIUS),
            y: 0.0 + (DOT_RADIUS),
        },
        end: {
            x: 0.5,
            y: 0.0 + (DOT_RADIUS)
        }
    },
    1: {
        start: {
            x: 0.5,
            y: 0.0 + (DOT_RADIUS)
        },
        corner: {
            x: 1.0 - (DOT_RADIUS),
            y: 0.0 + (DOT_RADIUS),
        },
        end: {
            x: 1.0 - (DOT_RADIUS),
            y: 0.5
        }
    },
    2: {
        start: {
            x: 0.0 + (DOT_RADIUS),
            y: 0.5
        },
        corner: {
            x: 0.0 + (DOT_RADIUS),
            y: 1.0 - (DOT_RADIUS),
        },
        end: {
            x: 0.5,
            y: 1.0 - (DOT_RADIUS)
        }
    },
    3: {
        start: {
            x: 0.5,
            y: 1.0 - (DOT_RADIUS)
        },
        corner: {
            x: 1.0 - (DOT_RADIUS),
            y: 1.0 - (DOT_RADIUS),
        },
        end: {
            x: 1.0 - (DOT_RADIUS),
            y: 0.5
        }
    }
};

function render(text) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var len = text.length;
    var arr = text.split("");
    var maxLineLen = Math.floor((canvas.width - (2 * CHAR_SIZE)) /
                                (CHAR_SIZE + (CHAR_SIZE * SPACE_SIZE)));
    var numLines = 1 + Math.floor(text.length / maxLineLen);

    /* Compute bounds */
    var totalWidth = (len * CHAR_SIZE) + ((len - 1) * CHAR_SIZE * SPACE_SIZE);

    var startX = CHAR_SIZE;
    var startY = (c.height -
                  (numLines * (CHAR_HEIGHT + (CHAR_SIZE * SPACE_SIZE)))) / 2;

    var x = startX;
    var y = startY;

    for (var i = 0; i < len; i++) {
        renderChar(arr[i], x, y);
        x += CHAR_SIZE + (CHAR_SIZE * SPACE_SIZE);

        if ((i + 1) % maxLineLen == 0) {
            y += CHAR_HEIGHT + (CHAR_SIZE * SPACE_SIZE);
            x = CHAR_SIZE;
        }
    }
}

function renderChar(letter, x, y) {
    var code = letterDict[letter];

    if ((code >>> 4) & 1) {
        /* Numeral */
        ctx.beginPath();
        ctx.moveTo(x, y - (LINE_DIST * CHAR_SIZE));
        ctx.lineTo(x + CHAR_SIZE, y - (LINE_DIST * CHAR_SIZE));
        ctx.stroke();
        ctx.closePath();
    }

    if ((code >>> 5) & 1) {
        /* Numeral */
        ctx.beginPath();
        ctx.moveTo(x, y + CHAR_SIZE + (LINE_DIST * CHAR_SIZE));
        ctx.lineTo(x + CHAR_SIZE, y + CHAR_SIZE + (LINE_DIST * CHAR_SIZE));
        ctx.stroke();
        ctx.closePath();
    }

    code = code & 0xF;

    for (var i = 0; i < 4; i++) {
        var bit = (code >> i) & 1;
        var info = indexDict[i];

        if (bit && DRAW_LINES) {
            ctx.beginPath();
            ctx.moveTo(x + (CHAR_SIZE * info.start.x),
                       y + (CHAR_SIZE * info.start.y));
            ctx.lineTo(x + (CHAR_SIZE * info.corner.x),
                       y + (CHAR_SIZE * info.corner.y));
            ctx.lineTo(x + (CHAR_SIZE * info.end.x),
                       y + (CHAR_SIZE * info.end.y));
            ctx.stroke();
            ctx.closePath();
        } else if (DRAW_DOTS) {
            ctx.beginPath();
            ctx.arc(x + (CHAR_SIZE * info.corner.x),
                    y + (CHAR_SIZE * info.corner.y),
                    CHAR_SIZE * DOT_RADIUS, 0, 2 * Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
}


render(text);
