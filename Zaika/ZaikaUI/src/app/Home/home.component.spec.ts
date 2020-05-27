import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomeComponent
      ]
    })
    .compileComponents()
    .catch();    // err => console.log(err)
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app)
    .toBeTruthy()
    .catch();    // err => console.log(err)
  });

  it("should have as title 'ZaikaUI'", () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app.title)
    .toEqual('ZaikaUI')
    .catch();    // err => console.log(err)
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent)
    .toContain('ZaikaUI app is running!')
    .catch();
    // err => console.log(err)
  });
});
