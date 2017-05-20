import { AtomicDawPage } from './app.po';

describe('atomic-daw App', () => {
  let page: AtomicDawPage;

  beforeEach(() => {
    page = new AtomicDawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
