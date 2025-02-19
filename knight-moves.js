export function exploreKnightMoves(coordinates) {
    const possibleNewCoordinates = [];
    const newCoordinates1 = [coordinates[0] + 1, coordinates[1] + 2];
    console.log(newCoordinates1);
}

export function knightMoves(startCoordinates, targetCoordinates) {
    if (
        startCoordinates[0] === targetCoordinates[0] &&
        startCoordinates[1] === targetCoordinates[1]
    ) {
        return `Reached ${startCoordinates} in 0 moves`;
    }
    const queue = [startCoordinates];
    const visitedGraph = new Map();
    return "failed";
}
