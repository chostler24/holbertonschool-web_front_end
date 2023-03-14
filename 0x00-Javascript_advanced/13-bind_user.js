const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer'
};

function logWelcomeUser(welcomeString) {
    console.log(welcomeString + ', ' + firstName + '. Your occupation is: ' + occupation);
}

const bindLogWelcomeUser = logWelcomeUser.user.bind(logWelcomeUser());

logWelcomeUser('Welcome');
