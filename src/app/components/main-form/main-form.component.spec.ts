import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { MainFormComponent } from './main-form.component';

describe('MainFormComponent', () => {
  let component: MainFormComponent;
  let fixture: ComponentFixture<MainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [MainFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tampoco es que haya mucho mas que probar
  it('should call checkSendButton function when clicked', (async () => {
    spyOn(component, 'checkSendButton');
    fixture.detectChanges();
    let button = fixture.debugElement.query(By.css('#send-btn')).nativeElement; // modify here
    button.click();
    fixture.detectChanges();
    expect(component.checkSendButton).toHaveBeenCalled();
  }));

});
