let apiRoutes = require('./api');

let initServer = (app) => {
    app.use('/api', apiRoutes);
};

module.exports = {
    initServer : initServer
};