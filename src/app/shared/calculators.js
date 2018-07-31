const utils = require('./utils');

const platoToGravity = function (plato) {
    var sg = (plato / (258.6 - ((plato / 258.2) * 227.1))) + 1;
    return utils.roundDecimal(sg, 3);
}

const gravityToPlato = function (sg) {
    var plato = (-1 * 616.868) + (1111.14 * sg) - (630.272 * Math.pow(sg, 2)) + (135.997 * Math.pow(sg, 3));
    return utils.roundDecimal(plato, 2)
}

const alcoholByVolume = function (data) {

    let ret = {};

    let ogInSg = data.og;
    let fgInSg = data.fg;
    let ogInPlato = data.og;
    let fgInPlato = data.fg;

    if (data.gravityUnit == "plato") {
        ogInSg = platoToGravity(data.og);
        fgInSg = platoToGravity(data.fg);
    } else {
        ogInPlato = gravityToPlato(data.og);
        fgInPlato = gravityToPlato(data.fg);
    }

    if (data.equation == "basic") {
        const abv_basic = (ogInSg - fgInSg) * 131.25;
        ret.abv = utils.roundDecimal(abv_basic, 2);
    } else {
        const abw = 76.08 * (ogInSg - fgInSg) / (1.775 - ogInSg);
        const abv = abw * (fgInSg / 0.794);
        ret.abv = utils.roundDecimal(abv, 2);
    }

    ret.attenuation = utils.roundDecimal((1 - (fgInPlato / ogInPlato)) * 100, 2);
    ret.calories = utils.roundDecimal(computeCaloriesPerLiter(ogInPlato, fgInPlato), 2);

    return ret;
}

const hydrometerCorrection = function (hydro, temp) {
    const difference = calculateHydrometerCorrection(temp, 20);
    const result = utils.roundDecimal(difference + hydro, 3);
    return result;
}

function computeCaloriesPerLiter(ogPlato, fgPlato) {
    if (!utils.isNumber(ogPlato)) {
        return 0
    }
    if (ogPlato <= 0) {
        return 0
    }
    if (!utils.isNumber(fgPlato)) {
        return 0
    }
    if (fgPlato <= -12) {
        return 0
    }
    var realExtract = (0.1808 * ogPlato) + (0.8192 * fgPlato);
    var abw = (ogPlato - realExtract) / (2.0665 - (0.010665 * ogPlato));
    var fgInSg = platoToGravity(fgPlato);
    var calories = ((6.9 * abw) + 4.0 * (realExtract - 0.1)) * fgInSg * 3.55;
    return (calories * 1000) / 354.882;
}

function calculateHydrometerCorrection(temp, calibration) {
    temp = parseFloat(temp);
    calibration = parseFloat(calibration);
    if (temp < 0 || temp > 71) {
        return 0
    }
    if (calibration < 10 || calibration > 24) {
        return 0
    }
    var C = [];
    var delta = [];
    for (var i = 0; i <= 71; i++) {
        C[i] = i
    }
    var calibrationOffset = 15 - Math.round(calibration);
    var difference = 0;
    delta[0] = -0.0009;
    delta[1] = -0.0009;
    delta[2] = -0.0009;
    delta[3] = -0.0009;
    delta[4] = -0.0009;
    delta[5] = -0.0009;
    delta[6] = -0.0008;
    delta[7] = -0.0008;
    delta[8] = -0.0007;
    delta[9] = -0.0007;
    delta[10] = -0.0006;
    delta[11] = -0.0005;
    delta[12] = -0.0004;
    delta[13] = -0.0003;
    delta[14] = -0.0001;
    delta[15] = 0;
    delta[16] = 0.0002;
    delta[17] = 0.0003;
    delta[18] = 0.0005;
    delta[19] = 0.0007;
    delta[20] = 0.0009;
    delta[21] = 0.0011;
    delta[22] = 0.0013;
    delta[23] = 0.0016;
    delta[24] = 0.0018;
    delta[25] = 0.0021;
    delta[26] = 0.0023;
    delta[27] = 0.0026;
    delta[28] = 0.0029;
    delta[29] = 0.0032;
    delta[30] = 0.0035;
    delta[31] = 0.0038;
    delta[32] = 0.0041;
    delta[33] = 0.0044;
    delta[34] = 0.0047;
    delta[35] = 0.0051;
    delta[36] = 0.0054;
    delta[37] = 0.0058;
    delta[38] = 0.0061;
    delta[39] = 0.0065;
    delta[40] = 0.0069;
    delta[41] = 0.0073;
    delta[42] = 0.0077;
    delta[43] = 0.0081;
    delta[44] = 0.0085;
    delta[45] = 0.0089;
    delta[46] = 0.0093;
    delta[47] = 0.0097;
    delta[48] = 0.0102;
    delta[49] = 0.0106;
    delta[50] = 0.0110;
    delta[51] = 0.0114;
    delta[52] = 0.0118;
    delta[53] = 0.0122;
    delta[54] = 0.0126;
    delta[55] = 0.0130;
    delta[56] = 0.0135;
    delta[57] = 0.0140;
    delta[58] = 0.0145;
    delta[59] = 0.0150;
    delta[60] = 0.0155;
    delta[61] = 0.0160;
    delta[62] = 0.0165;
    delta[63] = 0.0171;
    delta[64] = 0.0177;
    delta[65] = 0.0183;
    delta[66] = 0.0189;
    delta[67] = 0.0195;
    delta[68] = 0.0201;
    delta[69] = 0.0207;
    delta[70] = 0.0213;
    delta[71] = 0.0219;
    delta[72] = 0.0225;
    delta[73] = 0.0231;
    delta[74] = 0.0237;
    delta[75] = 0.0243;
    delta[76] = 0.0249;
    delta[77] = 0.0255;
    delta[78] = 0.0261;
    delta[79] = 0.0267;
    delta[80] = 0.0273;
    for (i = 0; i < C.length; i++) {
        if (C[i] == temp) {
            var calibrationOffsetBounded = calibrationOffset;
            if ((i + calibrationOffsetBounded) < 0) {
                calibrationOffsetBounded = 0
            }
            difference = delta[i + calibrationOffsetBounded];
            break
        }
        if (temp >= C[i] && temp < C[i + 1]) {
            var calibrationOffsetBounded = calibrationOffset;
            if ((i + calibrationOffsetBounded) < 0) {
                calibrationOffsetBounded = 0
            }
            difference = (delta[i + calibrationOffsetBounded] + delta[i + calibrationOffsetBounded + 1]) / 2;
            break
        }
    }
    return difference
}

module.exports = {
    platoToGravity: platoToGravity,
    gravityToPlato: gravityToPlato,
    alcoholByVolume: alcoholByVolume,
    hydrometerCorrection: hydrometerCorrection
}