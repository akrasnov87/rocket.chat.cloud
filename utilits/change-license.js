var fs = require('fs');
var pth = require('path');

exports.getLicense = function() {
    var licensePath = process.env.LICENSE_PATH || pth.join(__dirname, '../', 'license.json');
    var data = JSON.parse(fs.readFileSync(licensePath).toString('utf-8'));

    data.information.id = process.env.WORKSPACE_ID;
    data.validation.cloudWorkspaceId = process.env.WORKSPACE_ID;

    return data;
}