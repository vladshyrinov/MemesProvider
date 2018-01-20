import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgurApiComponentComponent } from './imgur-api-component.component';

describe('ImgurApiComponentComponent', () => {
  let component: ImgurApiComponentComponent;
  let fixture: ComponentFixture<ImgurApiComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgurApiComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgurApiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
