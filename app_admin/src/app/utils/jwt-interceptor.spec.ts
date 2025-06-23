import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpInterceptorFn } from '@angular/common/http';

import { JwtInterceptor } from './jwt-interceptor';
import { AuthenticationService } from '../services/authentication';

describe('JwtInterceptor', () => {
  let jwt: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        { provide: AuthenticationService, useValue: { isLoggedIn: () => false, getToken: () => '' } }
      ]
    });
    jwt = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    expect(jwt).toBeTruthy();
  });

  it('should call intercept method', () => {
    const dummyRequest = {} as HttpRequest<any>;
    const dummyHandler = {
      handle: jasmine.createSpy('handle')
    } as any as HttpHandler;

    jwt.intercept(dummyRequest, dummyHandler).subscribe(() => {
      expect(dummyHandler.handle).toHaveBeenCalled();
    });
  });
});
