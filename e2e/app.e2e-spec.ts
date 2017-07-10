import { SeedForRoutingPage } from './app.po';

describe('seed-for-routing App', () => {
  let page: SeedForRoutingPage;

  beforeEach(() => {
    page = new SeedForRoutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
