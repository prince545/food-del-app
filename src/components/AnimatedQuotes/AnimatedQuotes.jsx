import React, { useState, useEffect } from 'react';
import './AnimatedQuotes.css';

const AnimatedQuotes = ({ variant = 'default' }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const quotes = [
    {
      text: "Life is uncertain. Eat dessert first.",
      author: "Ernestine Ulmer",
      emoji: "🍰"
    },
    {
      text: "Food brings people together on many different levels.",
      author: "Giada De Laurentiis",
      emoji: "👥"
    },
    {
      text: "Cooking is all about people. Food is maybe the only universal thing.",
      author: "Guy Fieri",
      emoji: "🌍"
    },
    {
      text: "The only time to eat diet food is while you're waiting for the steak to cook.",
      author: "Julia Child",
      emoji: "🥩"
    },
    {
      text: "Good food is the foundation of genuine happiness.",
      author: "Auguste Escoffier",
      emoji: "😊"
    },
    {
      text: "Food is not just eating energy. It's an experience.",
      author: "Guy Fieri",
      emoji: "✨"
    },
    {
      text: "The secret of success in life is to eat what you like.",
      author: "Mark Twain",
      emoji: "❤️"
    },
    {
      text: "Food is symbolic of love when words are inadequate.",
      author: "Alan D. Wolfelt",
      emoji: "💕"
    },
    {
      text: "There is no sincerer love than the love of food.",
      author: "George Bernard Shaw",
      emoji: "🥘"
    },
    {
      text: "Food is not rational. Food is culture, habit, craving, and identity.",
      author: "Jonathan Safran Foer",
      emoji: "🏛️"
    },
    {
      text: "The only thing I like better than talking about food is eating.",
      author: "John Walters",
      emoji: "🍽️"
    },
    {
      text: "Food is the most primitive form of comfort.",
      author: "Sheilah Graham",
      emoji: "🫂"
    },
    {
      text: "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
      author: "Thomas Keller",
      emoji: "👨‍🍳"
    },
    {
      text: "Food is not just fuel. Food is about family, food is about community.",
      author: "Marcus Samuelsson",
      emoji: "🏠"
    },
    {
      text: "The best comfort food will always be greens, cornbread, and fried chicken.",
      author: "Maya Angelou",
      emoji: "🍗"
    }
  ];

  const emptyCartQuotes = [
    {
      text: "Your cart is empty, but your appetite doesn't have to be!",
      author: "Food Lover",
      emoji: "🛒"
    },
    {
      text: "Hungry? Let's fill that cart with deliciousness!",
      author: "Chef's Wisdom",
      emoji: "🍕"
    },
    {
      text: "Empty cart, full potential for amazing food!",
      author: "Culinary Expert",
      emoji: "🌟"
    },
    {
      text: "Time to add some flavor to your cart!",
      author: "Food Enthusiast",
      emoji: "🌮"
    },
    {
      text: "Your cart is waiting for some tasty treats!",
      author: "Gourmet Guide",
      emoji: "🍰"
    }
  ];

  const displayQuotes = variant === 'empty-cart' ? emptyCartQuotes : quotes;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % displayQuotes.length);
    }, variant === 'floating' ? 8000 : 4000); // Slower for floating quotes

    return () => clearInterval(interval);
  }, [displayQuotes.length, variant]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), variant === 'floating' ? 7000 : 3500); // Longer visibility for floating
    return () => clearTimeout(timer);
  }, [currentQuote, variant]);

  const quote = displayQuotes[currentQuote];

  if (variant === 'minimal') {
    return (
      <div className={`animated-quotes minimal ${isVisible ? 'visible' : ''}`}>
        <div className="quote-content">
          <span className="quote-emoji">{quote.emoji}</span>
          <p className="quote-text">{quote.text}</p>
        </div>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`animated-quotes floating ${isVisible ? 'visible' : ''}`}>
        <div className="quote-bubble">
          <span className="quote-emoji">{quote.emoji}</span>
          <p className="quote-text">{quote.text}</p>
          <span className="quote-author">— {quote.author}</span>
        </div>
      </div>
    );
  }

  if (variant === 'empty-cart') {
    return (
      <div className={`animated-quotes empty-cart ${isVisible ? 'visible' : ''}`}>
        <div className="quote-container">
          <div className="quote-icon">🛒</div>
          <div className="quote-content">
            <span className="quote-emoji">{quote.emoji}</span>
            <p className="quote-text">{quote.text}</p>
            <span className="quote-author">— {quote.author}</span>
          </div>
          <div className="quote-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-dot"></span>
            <span className="decoration-dot"></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`animated-quotes ${isVisible ? 'visible' : ''}`}>
      <div className="quote-container">
        <div className="quote-icon">💬</div>
        <div className="quote-content">
          <span className="quote-emoji">{quote.emoji}</span>
          <p className="quote-text">{quote.text}</p>
          <span className="quote-author">— {quote.author}</span>
        </div>
        <div className="quote-decoration">
          <span className="decoration-dot"></span>
          <span className="decoration-dot"></span>
          <span className="decoration-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedQuotes; 