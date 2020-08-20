import * as sinon from "sinon";
import { expect } from "chai";
import { Request, Response, NextFunction } from "express";
import { FlightController } from "./Flight.controller";

describe("src/controllers/Flight/Flight.controller.ts", () => {
  let sandbox: sinon.SinonSandbox;
  const req: Partial<Request> = {};
  let responseStub: Partial<Response>;
  let next: Partial<NextFunction>;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    responseStub = {
      send: sandbox.stub(),
    };
  });

  it("should send a message", () => {
    FlightController(
      req as Request,
      responseStub as Response,
      next as NextFunction,
    );
    expect(responseStub.send).to.be.calledWith("Lift off!");
  });
});
