var fs = require('fs');
var pth = require('path');

exports.getLicense = function(req) {
    var licensePath = process.env.LICENSE_PATH || pth.join(__dirname, '../data', 'license.json');
    var data = JSON.parse(fs.readFileSync(licensePath).toString('utf-8'));

    data.information.id = process.env.WORKSPACE_ID;
    data.validation.cloudWorkspaceId = process.env.WORKSPACE_ID;
    if(process.env.ROOT_URL) {
        data.validation.serverUrls[0].value = `${normalUrl(process.env.ROOT_URL)}`;
    }

    return data;
}

function normalUrl(url) {
    return url.replace('http://', '').replace('https://', '');
}