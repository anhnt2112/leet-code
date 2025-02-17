var numTilePossibilities = function(tiles) {
    let counts = Array(26).fill(0);
    let fac = Array(tiles.length + 1).fill(1);
    for (let i = 1; i <= tiles.length; i++) {
        fac[i] = i * fac[i - 1];
    }
    for (let c of tiles) {
        counts[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    let lengthcounts = Array(tiles.length + 1).fill(0);
    lengthcounts[0] = 1;
    for (let i = 0; i < 26; i++) {
        if (counts[i] > 0) {
            let temp = Array(tiles.length + 1).fill(0);
            for (let j = 0; j <= tiles.length && lengthcounts[j] > 0; j++) {
                for (let k = 1; k <= counts[i]; k++) {
                    let totallength = j + k;
                    temp[totallength] += lengthcounts[j] * fac[totallength] / (fac[k] * fac[j]);
                }
            }
            for (let j = 0; j <= tiles.length; j++) {
                lengthcounts[j] += temp[j];
            }
        }
    }
    return lengthcounts.reduce((acc, val, idx) => acc + (idx > 0 ? val : 0), 0);
};
