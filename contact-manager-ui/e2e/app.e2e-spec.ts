import { AppPage } from './app.po';

describe('contact-manager App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should application title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Contact Manager');
  });
});
