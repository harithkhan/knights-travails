function findNewCoordinates(coordinates) {
    const possibleNewCoordinates = [];
    const newCoordinates1 = [coordinates[0] + 1, coordinates[1] + 2];
    const newCoordinates2 = [coordinates[0] + 2, coordinates[1] + 1];
    const newCoordinates3 = [coordinates[0] + 2, coordinates[1] - 1];
    const newCoordinates4 = [coordinates[0] + 1, coordinates[1] - 2];
    const newCoordinates5 = [coordinates[0] - 1, coordinates[1] - 2];
    const newCoordinates6 = [coordinates[0] - 2, coordinates[1] - 1];
    const newCoordinates7 = [coordinates[0] - 2, coordinates[1] + 1];
    const newCoordinates8 = [coordinates[0] - 1, coordinates[1] + 2];
    if (
        newCoordinates1[0] >= 0 &&
        newCoordinates1[0] <= 7 &&
        newCoordinates1[1] >= 0 &&
        newCoordinates1[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates1);
    }
    if (
        newCoordinates2[0] >= 0 &&
        newCoordinates2[0] <= 7 &&
        newCoordinates2[1] >= 0 &&
        newCoordinates2[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates2);
    }
    if (
        newCoordinates3[0] >= 0 &&
        newCoordinates3[0] <= 7 &&
        newCoordinates3[1] >= 0 &&
        newCoordinates3[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates3);
    }
    if (
        newCoordinates4[0] >= 0 &&
        newCoordinates4[0] <= 7 &&
        newCoordinates4[1] >= 0 &&
        newCoordinates4[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates4);
    }
    if (
        newCoordinates5[0] >= 0 &&
        newCoordinates5[0] <= 7 &&
        newCoordinates5[1] >= 0 &&
        newCoordinates5[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates5);
    }
    if (
        newCoordinates6[0] >= 0 &&
        newCoordinates6[0] <= 7 &&
        newCoordinates6[1] >= 0 &&
        newCoordinates6[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates6);
    }
    if (
        newCoordinates7[0] >= 0 &&
        newCoordinates7[0] <= 7 &&
        newCoordinates7[1] >= 0 &&
        newCoordinates7[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates7);
    }
    if (
        newCoordinates8[0] >= 0 &&
        newCoordinates8[0] <= 7 &&
        newCoordinates8[1] >= 0 &&
        newCoordinates8[1] <= 7
    ) {
        possibleNewCoordinates.push(newCoordinates8);
    }
    return possibleNewCoordinates;
}

function reconstructPath(visitedGraph, targetCoordinates) {
    const path = [];
    let current = targetCoordinates.toString();
    while (current !== null) {
        path.push(current.split(",").map(Number));
        current = visitedGraph.get(current)
            ? visitedGraph.get(current).toString()
            : null;
    }
    return path.reverse();
}

export function knightMoves(startCoordinates, targetCoordinates) {
    const queue = [startCoordinates];
    const visitedGraph = new Map();
    visitedGraph.set(startCoordinates.toString(), null);
    while (queue.length > 0) {
        const parentCoordinates = queue.shift();
        if (
            parentCoordinates[0] === targetCoordinates[0] &&
            parentCoordinates[1] === targetCoordinates[1]
        ) {
            const finalPath = reconstructPath(visitedGraph, targetCoordinates);
            const pathLength = finalPath.length - 1;
            let output = `You made it in ${pathLength} moves! Here's your path:\n`;
            finalPath.forEach((step) => {
                output += `    [${step}]\n`;
            });
            return output.trim();
        }
        const possibleNewCoordinates = findNewCoordinates(parentCoordinates);
        possibleNewCoordinates.forEach((coordinates) => {
            const coordinatesKey = coordinates.toString();
            if (!visitedGraph.has(coordinatesKey)) {
                visitedGraph.set(coordinatesKey, parentCoordinates);
                queue.push(coordinates);
            }
        });
    }
    return [];
}
