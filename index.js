function distanceFromHqInBlocks(pickupLocation) {
    const blocksFromHq = Math.abs(42 - pickupLocation)
    return blocksFromHq 
}


function distanceFromHqInFeet(pickupLocation) {
    const result = distanceFromHqInBlocks(pickupLocation)
    return result * 264
}

function distanceTravelledInFeet(start,destination) { 
   const blocksTravelled =  Math.abs(start-destination)
   return blocksTravelled * 264
}

function calculatesFarePrice(start, destination) {
    const blocksInFeet = distanceTravelledInFeet(start, destination) 
    if (blocksInFeet <= 400) {
        return 0
    }
    if (blocksInFeet > 400 && blocksInFeet < 2000) {
        const blocksMinus = blocksInFeet - 400
        return blocksMinus * 0.02
    }
    if (blocksInFeet > 2000 && blocksInFeet < 2500) {
        return 25
    }
    if (blocksInFeet > 2500) {
        return("cannot travel that far")
    }
}

