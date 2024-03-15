const seedPhraseGenerator = require('seed-phrase-generator');

async function generateMultipleSeedPhrases(count) {
    const seedPhrases = [];
    for (let i = 0; i < count; i++) {
        const seedPhrase = await seedPhraseGenerator.generateSeedPhrase();
        seedPhrases.push(seedPhrase);
    }
    return seedPhrases;
}

module.exports = {
    generateMultipleSeedPhrases: generateMultipleSeedPhrases
};
