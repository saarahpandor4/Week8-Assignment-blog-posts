CREATE TABLE IF NOT EXISTS posts (
id SERIAL PRIMARY KEY,
guest_name VARCHAR(255) NOT NULL,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL
);

-- Comments Table
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  comment_text TEXT NOT NULL,
  commenter_name VARCHAR(255) NOT NULL
);

INSERT INTO posts (guest_name, title, description, location)
VALUES (
    'Saarah',
    'Paris',
    'The City is known for its iconic Eiffel Tower, rich culture, art museums, and historic sites, when you are there you MUST try their patisseries! If anyone has any great hidden gems they discovered in Paris please share in the comments!',
    'France'
  ),
  (
    'Joe',
    'New York',
    'The Big Apple offers towering skyscrapers, bustling streets which have a variety of food stalls including their classics; The New York slice pizza and cheesecake! Also must see attractions like Times Square.',
    'United States'  
  ),
  (
    'Manny',
    'Tokyo',
    'A futuristic metropolis known for its neon-lit skyline, historic temples, and world-class cuisine. I remember visiting Tokyo many years ago as a day trip and alot has changed since then. Has anyone travelled recently? I would love to know which areas best to stay, things to do and nice food places please!',
    'Japan' 
  ),
  (
    'Tom',
    'Indian ocean',
    'Mauritius; The Pearl of the Indian Ocean, known for its breathtaking beaches Belle Mare, Flic-en-Flac, and Trou aux Biches, offering an idyllic setting for relaxation and water sports. Mauritius is a melting pot of cultures with influences from Indian, African, Chinese, and European traditions.',
    'Mauritius'
  ),
  (
    'Mary',
    'Spain',
    'A coastal city known for vibrant culture, Mediterranean beaches and indeed, Barcelona is the home of the Sagrada Família, a masterpiece of Catalan modernism architecture and the most famous work of Antoni Gaudí',
  'Barcelona'
  );

  INSERT INTO comments (post_id, comment_text, commenter_name)
VALUES
  (1, 'Paris is amazing! I love the food and art.', 'Steph'),
  (2, 'I visited New York last summer, and it was unforgettable.', 'Sam'),
  (3, 'Tokyo is a great blend of tradition and modernity!', 'Jordan');