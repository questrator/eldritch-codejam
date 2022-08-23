const ancientsConfig = [
    {
        id: 'azathoth',
        name: 'Azathoth',
        cardFace: "./assets/Ancients/azathoth.png",
        stages: [
            {green: 1, blue: 1, brown: 2},
            {green: 2, blue: 1, brown: 3},
            {green: 2, blue: 0, brown: 4},
        ],
        spread: {
            green: [1, 2, 2],
            blue: [1, 1, 0],
            brown: [2, 3, 4],
        }
    },
    {
        id: 'cthulhu',
        name: 'Cthulhu',
        cardFace: "./assets/Ancients/cthulhu.png",
        spread: {
            green: [0, 1, 3],
            blue: [2, 0, 0],
            brown: [2, 3, 4],
        }
    },
    {
        id: 'iogSothoth',
        name: 'Yog-Sothoth',
        cardFace: "./assets/Ancients/iogSothoth.png",
        spread: {
            green: [0, 2, 3],
            blue: [1, 1, 0],
            brown: [2, 3, 4],
        }
    },
    {
        id: 'shubNiggurath',
        name: 'Shub-Niggurath',
        cardFace: "./assets/Ancients/shubNiggurath.png",
        spread: {
            green: [1, 3, 2],
            blue: [1, 1, 0],
            brown: [2, 2, 4],
        }
    },
];

export default ancientsConfig;