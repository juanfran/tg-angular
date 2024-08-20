import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WatchElementComponent } from './watch-element.component';

describe('WatchElementComponent', () => {
  let component: WatchElementComponent;
  let fixture: ComponentFixture<WatchElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WatchElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
