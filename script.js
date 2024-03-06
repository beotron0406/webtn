function survey() {
  return {
    step: 1,
    userData: {
      name: '',
      dob: '',
      id: '',
      addr: '',
    },
    yesNoQuestions: [
      { text: 'Do you have any allergies?', answer: null },
      { text: 'Have you ever had a surgery?', answer: null },
      { text: 'Do you smoke?', answer: null },
      { text: 'Do you exercise regularly?', answer: null },
      { text: 'Have you ever been convicted of a crime?', answer: null },
      { text: 'Do you have a valid driver\'s license?', answer: null },
      { text: 'Are you currently taking any medications?', answer: null },
      { text: 'Have you ever been to a different country?', answer: null },
      { text: 'Do you have any pets?', answer: null },
      { text: 'Do you have any children?', answer: null },
    ],
    multipleChoiceQuestions: [
      {
        text: 'What is your current employment status?',
        options: ['Employed', 'Self-employed', 'Unemployed', 'Retired'],
        answer: null,
      },
      {
        text: 'What is your highest level of education?',
        options: ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctoral Degree'],
        answer: null,
      },
      {
        text: 'What is your marital status?',
        options: ['Single', 'Married', 'Divorced', 'Widowed'],
        answer: null,
      },
      {
        text: 'What is your preferred mode of transportation?',
        options: ['Car', 'Public Transit', 'Bicycle', 'Walking'],
        answer: null,
      },
      {
        text: 'What is your favorite type of cuisine?',
        options: ['Italian', 'Mexican', 'Chinese', 'Indian'],
        answer: null,
      },
      {
        text: 'What is your preferred way to spend your free time?',
        options: ['Reading', 'Watching TV/Movies', 'Outdoor Activities', 'Social Activities'],
        answer: null,
      },
      {
        text: 'What is your preferred way to shop?',
        options: ['In-store', 'Online', 'Catalog', 'Phone'],
        answer: null,
      },
      {
        text: 'What is your preferred way to communicate?',
        options: ['Phone', 'Email', 'Text', 'Social Media'],
        answer: null,
      },
      {
        text: 'What is your preferred type of vacation?',
        options: ['Beach', 'City', 'Nature', 'Adventure'],
        answer: null,
      },
      {
        text: 'What is your preferred way to learn new things?',
        options: ['Books', 'Online Courses', 'Workshops', 'Hands-on Experience'],
        answer: null,
      },
    ],
    multipleSelectionQuestions: [
      {
        text: 'What are your hobbies? (Select all that apply)',
        options: ['Reading', 'Hiking', 'Cooking', 'Gardening', 'Traveling', 'Photography', 'Painting', 'Music', 'Sports', 'Crafts'],
        answer: [],
      },
      {
        text: 'What types of music do you enjoy? (Select all that apply)',
        options: ['Rock', 'Pop', 'Classical', 'Hip-hop', 'Country', 'Jazz', 'Blues', 'Electronic', 'Folk', 'Metal'],
        answer: [],
      },
      {
        text: 'What types of movies do you enjoy? (Select all that apply)',
        options: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Documentary', 'Animation', 'Thriller', 'Mystery'],
        answer: [],
      },
      {
        text: 'What types of books do you enjoy? (Select all that apply)',
        options: ['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Sci-Fi', 'Fantasy', 'Biography', 'History', 'Self-Help', 'Poetry'],
        answer: [],
      },
      {
        text: 'What types of outdoor activities do you enjoy? (Select all that apply)',
        options: ['Hiking', 'Camping', 'Fishing', 'Hunting', 'Cycling', 'Swimming', 'Kayaking', 'Rock Climbing', 'Skiing', 'Snowboarding'],
        answer: [],
      },
      {
        text: 'What types of indoor activities do you enjoy? (Select all that apply)',
        options: ['Reading', 'Watching TV/Movies', 'Playing Video Games', 'Cooking', 'Baking', 'Crafting', 'Puzzles', 'Board Games', 'Card Games', 'Meditation'],
        answer: [],
      },
      {
        text: 'What types of social activities do you enjoy? (Select all that apply)',
        options: ['Parties', 'Concerts', 'Sporting Events', 'Clubs', 'Volunteering', 'Book Clubs', 'Wine Tasting', 'Networking Events', 'Game Nights', 'Trivia Nights'],
        answer: [],
      },
      {
        text: 'What types of foods do you enjoy? (Select all that apply)',
        options: ['Italian', 'Mexican', 'Chinese', 'Indian', 'Thai', 'Japanese', 'American', 'French', 'Mediterranean', 'Vegetarian/Vegan'],
        answer: [],
      },
      {
        text: 'What types of beverages do you enjoy? (Select all that apply)',
        options: ['Coffee', 'Tea', 'Wine', 'Beer', 'Cocktails', 'Juice', 'Soda', 'Milk', 'Water', 'Smoothies'],
        answer: [],
      },
      {
        text: 'What types of technology do you use regularly? (Select all that apply)',
        options: ['Smartphone', 'Laptop', 'Desktop', 'Tablet', 'Smart TV', 'Smart Speaker', 'Wearable Tech', 'Gaming Console', 'Virtual Reality', 'Augmented Reality'],
        answer: [],
      },
    ],
    openEndedQuestions: [
      { text: 'What is your favorite book or movie, and why?', answer: '' },
      { text: 'If you could travel anywhere in the world, where would you go and why?', answer: '' },
      { text: 'What is your dream job or career, and why?', answer: '' },
      { text: 'What is the most important lesson you have learned in life?', answer: '' },
      { text: 'What is your proudest accomplishment?', answer: '' },
      { text: 'If you could have one superpower, what would it be and why?', answer: '' },
      { text: 'What is your favorite quote or saying, and why does it resonate with you?', answer: '' },
      { text: 'If you could meet any historical figure, who would it be and why?', answer: '' },
      { text: 'What is your biggest fear or phobia, and why?', answer: '' },
      { text: 'If you could change one thing about the world, what would it be and why?', answer: '' },
    ],
    get allQuestions() {
      return [
        ...this.yesNoQuestions,
        ...this.multipleChoiceQuestions,
        ...this.multipleSelectionQuestions,
        ...this.openEndedQuestions,
      ];
    },
    nextStep() {
      this.step++;
    },
    submitSurvey() {
      // Here, you can add code to submit the survey data to a server or process it locally
      console.log('Survey data:', {
        userData: this.userData,
        yesNoQuestions: this.yesNoQuestions,
        multipleChoiceQuestions: this.multipleChoiceQuestions,
        multipleSelectionQuestions: this.multipleSelectionQuestions,
        openEndedQuestions: this.openEndedQuestions,
      });
      this.step = 7;
    },
    restart() {
      this.step = 1;
      this.userData = {
        name: '',
        dob: '',
        id: '',
        addr: '',
      };
      this.yesNoQuestions.forEach(q => q.answer = null);
      this.multipleChoiceQuestions.forEach(q => q.answer = null);
      this.multipleSelectionQuestions.forEach(q => q.answer = []);
      this.openEndedQuestions.forEach(q => q.answer = '');
    },
  };
}