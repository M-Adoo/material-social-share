import { MaterialSocialSharePage } from './app.po';

describe('material-social-share App', () => {
  let page: MaterialSocialSharePage;

  beforeEach(() => {
    page = new MaterialSocialSharePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
