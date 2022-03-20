class ClientResponse {
    constructor(status, response, message) {
        this.status = status;
        this.response = response;
        this.messsage = message;
    }
}

module.exports = ClientResponse;