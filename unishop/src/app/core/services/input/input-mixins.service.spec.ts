import { TestBed } from '@angular/core/testing';

import { InputMixinsService } from './input-mixins.service';

describe('InputMixinsService', () => {
  let service: InputMixinsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputMixinsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
