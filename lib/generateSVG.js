const generateSVG = ( { text, text_color, shape, shape_color } ) =>
    `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="white" />

    <${shape} cx="150" cy="100" r="80" fill="${shape_color}" />

    <text x="150" y="110" font-size="40" text-anchor="middle" fill="${text_color}">${text}</text>
    </svg>`;

module.exports = {generateSVG};

