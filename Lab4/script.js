function findTopLeft(pointList)
{
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat) {
                    maxLat = point.lat
                }
                if (point.lon < minLon) {
                    minLon = point.lon
                }
            }
        }
    )
    return {"pointID" : 1, "Lat": maxLat, "Lon": minLon}
}

function findTopRight(pointList)
{
    var maxLat = null;
    var maxLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat > maxLat) {
                    maxLat = point.lat
                }
                if (point.lon > maxLon) {
                    maxLon = point.lon
                }
            }
        }
    )
    return {"pointID" : 2, "Lat": maxLat, "Lon": maxLon}
}

function findBottomLeft(pointList)
{
    var minLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat < minLat) {
                    minLat = point.lat
                }
                if (point.lon < minLon) {
                    minLon = point.lon
                }
            }
        }
    )
    return {"pointID" : 3, "Lat": minLat, "Lon": minLon}
}

function findBottomRight(pointList)
{
    var minLat = null;
    var maxLon = null;

    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat < minLat) {
                    minLat = point.lat
                }
                if (point.lon > maxLon) {
                    maxLon = point.lon
                }
            }
        }
    )
    return {"pointID" : 4, "Lat": minLat, "Lon": maxLon}
}

function Run() {
    var topLeftPoint = findTopLeft(theJSON);
    var topRightPoint = findTopRight(theJSON);
    var bottomLeftPoint = findBottomLeft(theJSON);
    var bottomRightPoint = findBottomRight(theJSON);

    var boundingBox = {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight : bottomRightPoint
    }

    console.log("Bounding box computed for adh2023@tamu.edu: ");
    console.log(boundingBox)
}