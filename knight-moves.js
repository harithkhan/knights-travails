// exploreKnightMoves(coordinates) {

// }

export function knightMoves(startCoordinates, targetCoordinates) {
    if (
        startCoordinates[0] === targetCoordinates[0] &&
        startCoordinates[1] === targetCoordinates[1]
    ) {
        return `Reached ${startCoordinates} in 0 moves`;
    }
    const queue = [startCoordinates];
    const visitedGraph = new Map();
    console.log(visitedGraph);
}
