import { LoginProcessService } from "./login-process.service";
import { TestBed } from "@angular/core/testing";

describe("LoginProcessService", () => {

  let service: LoginProcessService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginProcessService
      ]
    });
    service = TestBed.get(LoginProcessService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
