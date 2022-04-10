import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect(new Quotes(Text, author,upvote, downvote,writtenby,datePosted )).toBeTruthy();
  });
});
// Text, author,upvote, downvote,writtenby,datePosted