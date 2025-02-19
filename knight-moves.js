export function exploreKnightMoves(coordinates) {
    const possibleNewCoordinates = [];
    const newCoordinates1 = [coordinates[0] + 1, coordinates[1] + 2];
    const newCoordinates2 = [coordinates[0] + 2, coordinates[1] + 1];
    const newCoordinates3 = [coordinates[0] + 2, coordinates[1] - 1];
    const newCoordinates4 = [coordinates[0] + 1, coordinates[1] - 2];
    const newCoordinates5 = [coordinates[0] - 1, coordinates[1] - 2];
    const newCoordinates6 = [coordinates[0] - 2, coordinates[1] - 1];
    const newCoordinates7 = [coordinates[0] - 2, coordinates[1] + 1];
    const newCoordinates8 = [coordinates[0] - 1, coordinates[1] + 2];

    console.log(newCoordinates1);
    console.log(newCoordinates2);
    console.log(newCoordinates3);
    console.log(newCoordinates4);
    console.log(newCoordinates5);
    console.log(newCoordinates6);
    console.log(newCoordinates7);
    console.log(newCoordinates8);
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
