export function knightMoves(startCoordinates, targetCoordinates) {
    if (
        startCoordinates[0] === targetCoordinates[0] &&
        startCoordinates[0] === targetCoordinates[0]
    ) {
        return `Reached ${startCoordinates} in 0 moves`;
    }
    return "failed";
    // const queue = [startCoordinates];
    // const visitedGraph = new Map();
}
