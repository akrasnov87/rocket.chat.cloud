var express = require("express");
var router = express.Router();

var fs = require('fs');
var pth = require('path');

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/**
 * registerPreIntentWorkspaceWizard
 */
router.post("/api/v2/register/workspace/pre-intent", function (req, res, next) {
  res.json({
    device_code: "",
    expires_in: 0,
    interval: 0,
    pre_intent: true,
    user_code: "",
  });
});

/**
 * startRegisterWorkspaceSetupWizard
 */
router.post("/api/v2/register/workspace/intent", function (req, res, next) {
  res.json({
    device_code: process.env.DEVICE_CODE,
    expires_in: 1800 * 100,
    interval: 5,
    user_code: "cloning woven negate basil overspend",
  });
});

/**
 * fetchWorkspaceSyncPayload
 */
router.post("/api/v2/workspaces/:device_code/sync", function (req, res, next) {
  var data = require('../utilits/change-license').getLicense();

  res.json({
    license: "KAG_" + Buffer.from(JSON.stringify(data)).toString('base64'),
    publicKey:
      "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA2ZDLOAwWRQWPjzQcH+pjwomJfuuRxXndJEpUM7uy9MONQK6BPaQN\n1fHp99wNZtTv/vSthUgXOOooMxAcgrBOZLcIZKtUYXjzs/u3enN4B8Wbv8/iaTKN\nuBuF6S+cE4kyRxTgbgk6fZPxmX9ufiA1jUE6bM6g26pFgA2j07El8kNYYTJNfNU1\n+PxGocNOwL6ZmU8a1mQUK0nBidQzLH/aa26tzu2hOBOgJ+7iTRPhfVyT2uDfKhcN\nBbLOZYMAZMzYDdQTAfspF8+91sMe4R1ycKip3tCqBE5Zm8HY6pUTK9wtP9PgkJms\np8ZEzyXXgSkQs5oAOjzgQmUVL+ExKtbmpQIDAQAB\n-----END RSA PUBLIC KEY-----\n",
    removeLicense: false,
    workspaceId: process.env.WORKSPACE_ID,
  });
});


router.get("/api/v2/workspaces/:device_code/license", function (req, res, next) {
  var data = require('../utilits/change-license').getLicense();
  res.json({
    version: 3,
    address: "",
    license: "KAG_" + Buffer.from(JSON.stringify(data)).toString('base64'),
    updatedAt: "0001-01-01T00:00:00Z",
    expireAt: "0001-01-01T00:00:00Z",
  });
});

router.post("/api/v2/workspaces/:device_code/client/downgrade", function (req, res, next) {
  console.get(`POST /api/v2/workspaces/:device_code/client/downgrade - is empty`);
  res.sendStatus(400).send('NOT OVERRIDE');
});

router.post("/api/v2/workspaces/:device_code/client", function (req, res, next) {
  res.json({
    workspaceId: process.env.WORKSPACE_ID,
    publicKey:
      "-----BEGIN RSA PUBLIC KEY-----\\nMIIBCgKCAQEAzdnuL7l7+3lH8m102zTzBy/BihetJCJI/IWMxD9FGCuDIJTzwxyN\\ngiiIYpbJx6BRyJh+k8DK+tp50wintUT0ibwZAboZvgp8QTo2cialR6eHIZaCj8D7\\n94Hm6TPg4+zWMiTUqVaLOaQV7pjQ8gyJKhy/De3evHnCerxc4Ne/JUBSNi+8bzRz\\nT2TuNhy1HwqZS+xySa444x87khrB6z7cmmBTA9hNfptcJ9hYTvCf3z4G7anomQWP\\nNeZRL1hD+WvHuFO1Kv2n8o15lDh8c/N653eD4aw9+zwI5++O1xsXQ8z1Imx6HrJF\\nBEWdlZHKP4pg1zR/5sKMlFZ+tjinwi7SrQIDAQAB\\n-----END RSA PUBLIC KEY-----\\n",
    trial: {
      trialing: false,
      trialID: "",
      startDate: "0001-01-01T00:00:00Z",
      endDate: "0001-01-01T00:00:00Z",
      marketing: {
        utmContent: "",
        utmMedium: "",
        utmSource: "",
        utmCampaign: "",
      },
      downgradesToPlan: { id: "000000000000000000000000" },
      trialRequested: false,
      upgradedEligible: true,
      optOutOfJourney: false,
      plan: { id: "000000000000000000000000" },
      claims: { maxSeats: 0, maxmac: 0 },
      source: "",
      lastEmailSentTag: "starterWelcome",
    },
  });
});

router.get("/api/v2/register/workspace/poll", function (req, res, next) {
  res.json({
    successful: true,
    payload: {
      workspaceId: process.env.WORKSPACE_ID,
      client_name: "I'love Russia",
      client_id: "6711da97dc274666798e1105",
      client_secret: "3l14dZkm4RkeXcAY_X-r",
      redirect_uris: ["http://localhost:3000/admin/cloud/oauth-callback"],
      publicKey:
        "-----BEGIN RSA PUBLIC KEY-----\\nMIIBCgKCAQEA1qZ0QSq49x6KUXQ/ZFv3lPdYhYU1BZUqjlVmDvwZ82aE3jx8nQmA\\nfhReFTH6VGqiaevCqZ3Fc2mBOQOHFP9/Wfcx09k28exAseyHfNFRNU+g+vTCFlED\\nOIC7mzUwXSzWMNL00QQiAIOCOT1w5E3xuoGARPjIcSv3YzEwGpC0eGyNKqtFkWSs\\neFl/fR8l8O9/RDzWNEuDC/b9ZT8YtEp8HZMdpqGDSycwrcd4zcwG045XegLrsjrq\\ntBmoimmvNkNGAi3ifi9vo63wrtIiPWBVup273wtjqp6RgPDudoTbnSxc0/y3jrF+\\nPs0H1TOPbPd7FUcCjpD0DEgqDuetOq54YwIDAQAB\\n-----END RSA PUBLIC KEY-----\\n",
      client_secret_expires_at: 0,
      registration_client_uri:
        `http://localhost:${process.env.PORT}/api/v2/workspaces/${process.env.DEVICE_CODE}`,
      licenseData: {
        version: 0,
        address: "",
        license: "",
        updatedAt: "0001-01-01T00:00:00Z",
        expireAt: "0001-01-01T00:00:00Z",
      },
    },
  });
});

router.post("/api/oauth/token", function (req, res, next) {
  res.json({
    access_token: "/bz6cAGjTeeIRtIJzCw/CIvGJZyqIhKZ474GbKH0pFwfU2QAAA3QhNc2elm1VQt3M24hUybJzK/K9eS55V1hn4JifWm6i5yHe1PB12K8BQc=",
    expires_in: 7200,
    scope:"workspace:license:read workspace:client:write workspace:stats:write workspace:push:send marketplace:read marketplace:download fedhub:register",
    token_type: "Bearer"
  });
});

router.get("/api/v3/comms/workspace", function (req, res, next) {
  res.json({ announcements: { create: [], delete: [] } });
});

router.post('/api/v2/register/workspace', function (req, res, next) {
  console.debug(`POST /api/v2/register/workspace - is empty`);
  res.sendStatus(400).send('NOT OVERRIDE');
});

router.post('/api/oauth/clients', function (req, res, next) { 
  console.debug(`POST /api/oauth/clients - is empty`);
  res.sendStatus(400).send('NOT OVERRIDE');
});

router.post('/api/oauth/revoke', function (req, res, next) { 
  console.debug(`POST /api/oauth/revoke - is empty`);
  res.sendStatus(400).send('NOT OVERRIDE');
});

module.exports = router;
