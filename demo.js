const multipleSeedPhraseGenerator = require('./multiple-seed-phrase-generator');

async function main() {
    try {
        // number of seed phrases
        const count = 3;

        const seedPhrases = await multipleSeedPhraseGenerator.generateMultipleSeedPhrases(count);

        console.log('Seed Phrases:');
        seedPhrases.forEach((seedPhrase, index) => {
            console.log(`${index + 1}. ${seedPhrase}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
