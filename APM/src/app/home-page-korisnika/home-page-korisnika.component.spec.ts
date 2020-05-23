import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageKorisnikaComponent } from './home-page-korisnika.component';

describe('HomePageKorisnikaComponent', () => {
  let component: HomePageKorisnikaComponent;
  let fixture: ComponentFixture<HomePageKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
