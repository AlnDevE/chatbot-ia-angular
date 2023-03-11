import { TestBed } from '@angular/core/testing';

import { ChatiaService } from './chatia.service';

describe('ChatiaService', () => {
  let service: ChatiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
