const quotes = [
  {
    text: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    author: 'Joshua J. Marine'
  },
  {
    text: 'Too many of us are not living our dreams because we are living our fears.',
    author: 'Les Brown'
  },
  {
    text: 'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
    author: 'Dalai Lama'
  },
  {
    text: 'If you do what you’ve always done, you’ll get what you’ve always gotten.',
    author: 'Tony Robbins'
  },
  {
    text: 'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily.',
    author: 'Zig Ziglar'
  },
  {
    text: 'Definiteness of purpose is the starting point of all achievement.',
    author: 'W. Clement Stone'
  },
  {
    text: 'You can never cross the ocean until you have the courage to lose sight of the shore.',
    author: 'Christopher Columbus'
  },
  {
    text: 'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
    author: 'Bob Dylan'
  },
  {
    text: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
    author: 'Erma Bombeck'
  },
  {
    text: 'A truly rich man is one whose children run into his arms when his hands are empty.',
    author: 'Unknown'
  },
  {
    text: 'Everything you’ve ever wanted is on the other side of fear.',
    author: 'George Addair'
  },
  {
    text: 'Happiness is not something readymade. It comes from your own actions.',
    author: 'Dalai Lama'
  },
  {
    text: 'There are no traffic jams along the extra mile.',
    author: 'Roger Staubach'
  },
  {
    text: 'Everything has beauty, but not everyone can see.',
    author: 'Confucius'
  },
  {
    text: 'Either write something worth reading or do something worth writing.',
    author: 'Benjamin Franklin'
  },
  {
    text: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    author: 'Henry Ford'
  },
  {
    text: 'Build your own dreams, or someone else will hire you to build theirs.',
    author: 'Farrah Gray'
  },
  {
    text: 'You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.',
    author: 'Unknown'
  },
  {
    text: 'Fall seven times and stand up eight.',
    author: 'Japanese Proverb'
  },
  {
    text: 'Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.',
    author: 'Jamie Paolinetti'
  },
  {
    text: 'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
    author: 'Jesse Owens'
  },
  {
    text: 'The most common way people give up their power is by thinking they don’t have any.',
    author: 'Alice Walker'
  },
  {
    text: 'Too many of us are not living our dreams because we are living our fears.',
    author: 'Les Brown'
  },
  {
    text: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: 'Benjamin Franklin'
  },
  {
    text: 'Nothing is impossible, the word itself says, “I’m possible!”',
    author: 'Audrey Hepburn'
  },
  {
    text: 'Life is 10% what happens to me and 90% of how I react to it.',
    author: 'Charles Swindoll'
  },
  {
    text: 'A person who never made a mistake never tried anything new.',
    author: 'Albert Einstein'
  },
  {
    text: 'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
    author: 'Marie Curie'
  },
  {
    text: 'Education costs money. But then so does ignorance.',
    author: 'Sir Claus Moser'
  },
  {
    text: 'Whether you think you can or you think you can’t, you’re right.',
    author: 'Henry Ford'
  },
  {
    text: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
    author: 'Aristotle'
  },
  {
    text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
    author: 'Maya Angelou'
  },
  {
    text: 'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs'
  },
  {
    text: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
    author: 'Johann Wolfgang von Goethe'
  },
  {
    text: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale'
  },
  {
    text: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse'
  },
  {
    text: 'Life is what happens to you while you’re busy making other plans.',
    author: 'John Lennon'
  },
  {
    text: 'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
    author: 'Ann Landers'
  },
  {
    text: 'You can’t use up creativity. The more you use, the more you have.',
    author: 'Maya Angelou'
  },
  {
    text: 'Do what you can, where you are, with what you have.',
    author: 'Teddy Roosevelt'
  },
  {
    text: 'Life shrinks or expands in proportion to one’s courage.',
    author: 'Anais Nin'
  },
  {
    text: 'The person who says it cannot be done should not interrupt the person who is doing it.',
    author: 'Chinese Proverb'
  },
  {
    text: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.',
    author: 'Mark Twain'
  },
  {
    text: 'You take your life in your own hands, and what happens? A terrible thing, no one to blame.',
    author: 'Erica Jong'
  },
  {
    text: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale'
  },
  {
    text: 'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'Mark Twain'
  },
  {
    text: 'When I let go of what I am, I become what I might be.',
    author: 'Lao Tzu'
  },
  {
    text: 'We must balance conspicuous consumption with conscious capitalism.',
    author: 'Kevin Kruse'
  },
  {
    text: 'Go confidently in the direction of your dreams. Live the life you have imagined.',
    author: 'Henry David Thoreau'
  },
  {
    text: 'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
    author: 'Abigail Van Buren'
  },
  {
    text: 'We become what we think about.',
    author: 'Earl Nightingale'
  },
  {
    text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart'
  },
  {
    text: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
    author: 'Oprah Winfrey'
  },
  {
    text: 'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb'
  },
  {
    text: 'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    author: 'Anne Frank'
  },
  {
    text: 'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
    author: 'Leonardo da Vinci'
  },
  {
    text: 'The question isn’t who is going to let me; it’s who is going to stop me.',
    author: 'Ayn Rand'
  }
]

export default quotes;