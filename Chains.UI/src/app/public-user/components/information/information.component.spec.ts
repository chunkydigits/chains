import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicUserInformationComponent } from './information.component';

describe('InformationComponent', () => {
  let component: PublicUserInformationComponent;
  let fixture: ComponentFixture<PublicUserInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicUserInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
