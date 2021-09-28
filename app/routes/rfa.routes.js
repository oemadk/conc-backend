const controller = require("../controllers/rfa.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/rfa",
        controller.rfaAdmission
    );
    app.get(
        "/api/rfa/pending",
        controller.pendingRfa
    );
    app.get(
        "/api/rfa/declined",
        controller.declinedRfa
    );
    app.get(
        "/api/rfa/accepted",
        controller.acceptedRfa
    );
    app.get(
        "/api/rfa/:id",
        controller.rfaFilled
    );
    app.post(
        "/api/rfa/accept",
        controller.rfaAccept
    );
    app.post(
        "/api/rfa/:id/decline",
        controller.rfaDecline
    );

};
