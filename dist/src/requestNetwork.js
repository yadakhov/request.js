"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Core -------------------------------------
var requestCore_service_1 = require("../src/servicesCore/requestCore-service");
// Contract ---------------------------------
var requestEthereum_service_1 = require("../src/servicesContracts/requestEthereum-service");
// Synchrone Extension ----------------------
var requestSynchroneExtensionEscrow_service_1 = require("../src/servicesExtensions/requestSynchroneExtensionEscrow-service");
// const config = require('./config.json');
var RequestNetwork = /** @class */ (function () {
    function RequestNetwork(provider) {
        this.requestCoreService = new requestCore_service_1.default(provider);
        this.requestEthereumService = new requestEthereum_service_1.default(provider);
        this.requestSynchroneExtensionEscrowService = new requestSynchroneExtensionEscrow_service_1.default(provider);
    }
    return RequestNetwork;
}());
exports.default = RequestNetwork;
//# sourceMappingURL=requestNetwork.js.map