import { TicketListPage } from './app.po';

describe('ticket-list App', () => {
  let page: TicketListPage;

  beforeEach(() => {
    page = new TicketListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
