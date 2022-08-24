export default function getRandomN(from, to) {
    return Math.round(Math.random() * (to - from)) + from;
}