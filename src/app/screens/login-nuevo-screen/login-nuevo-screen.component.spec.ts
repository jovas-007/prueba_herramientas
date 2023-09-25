import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNuevoScreenComponent } from './login-nuevo-screen.component';

describe('LoginNuevoScreenComponent', () => {
  let component: LoginNuevoScreenComponent;
  let fixture: ComponentFixture<LoginNuevoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginNuevoScreenComponent]
    });
    fixture = TestBed.createComponent(LoginNuevoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
