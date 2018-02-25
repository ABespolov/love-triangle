/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {

    var count = 0;
    for(var i = 0; i < preferences.length; i++){
        if(preferences[i] - 1 == i ||
            preferences[preferences[i] - 1] - 1 == preferences.indexOf(preferences[preferences[i] - 1]))
            continue;
        if(preferences[preferences[preferences[i] - 1] - 1] - 1 ==  i){
            count++;
            preferences[i] = null;
            preferences[preferences[i] - 1] = null;
            preferences[preferences[preferences[i] - 1] - 1] = null;

        }

    }
    return count;
};

