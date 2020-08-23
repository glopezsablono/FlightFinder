// swaggerDescriptions
// ---------------------------
// standard info and port config for the documentation
// the version of openapi used is 3.0.0. THIS SHOULD NOT CHANGE.

export const descriptions = {
  info: {
      title: "Flight REST API",
      version: "1.0.0",
      description: "REST API for all the endpoints",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 4000}`,
    },
  ],
  openapi: "3.0.0",
  paths: {},
};

// swaggerResponses
// ---------------------------
// Define the responses for your API endpoints and setup the requestBody object.

export const responses = {
    "responses": {
        "200": {
            "description": "OK",
            "content": {
                "application/json": {
                    "schema": {
                        "type": "object",
                        "required": [
                            "flights"
                        ],
                        "additionalProperties": false,
                        "properties": {
                            "flights": {
                                "description": "Collection of flights.",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "required": [
                                        "price",
                                        "slices"
                                    ],
                                    "additionalProperties": false,
                                    "properties": {
                                        "price": {
                                            "description": "Price of the flight",
                                            "type": "number"
                                        },
                                        "slices": {
                                            "description": "Collection of flight journeys.",
                                            "type": "array",
                                            "items": {
                                                "type": "object",
                                                "required": [
                                                    "origin_name",
                                                    "destination_name",
                                                    "duration",
                                                    "flight_number",
                                                    "departure_date_time_utc",
                                                    "arrival_date_time_utc"
                                                ],
                                                "additionalProperties": false,
                                                "properties": {
                                                    "origin_name": {
                                                        "description": "Flight's departure location.",
                                                        "type": "string"
                                                    },
                                                    "destination_name": {
                                                        "description": "Flight's landing location.",
                                                        "type": "string"
                                                    },
                                                    "duration": {
                                                        "description": "Duration of the flight.",
                                                        "type": "number"
                                                    },
                                                    "flight_number": {
                                                        "description": "Flight identifier.",
                                                        "type": "number"
                                                    },
                                                    "departure_date_time_utc": {
                                                        "description": "Departure date time in UTC.",
                                                        "type": "string"
                                                    },
                                                    "arrival_date_time_utc": {
                                                        "description": "Arrival date time in UTC.",
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
        },
        "400": {
            "description": "Error: Bad Request",
        },
    },
    "requestBody": {
        "required": true,
        "content": {
            "application/json": {
                "schema": {},
            },
        },
        "description": "",
    },
};
