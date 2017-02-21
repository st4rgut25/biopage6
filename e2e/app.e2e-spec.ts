import { MybiographyPage } from './app.po';

describe('mybiography App', function() {
  let page: MybiographyPage;

  beforeEach(() => {
    page = new MybiographyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
