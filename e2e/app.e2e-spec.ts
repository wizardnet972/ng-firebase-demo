import { NgFirebaseDemoPage } from './app.po';

describe('ng-firebase-demo App', () => {
  let page: NgFirebaseDemoPage;

  beforeEach(() => {
    page = new NgFirebaseDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
