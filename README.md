# Multiple Seed Phrase Generator

## Introduction
Multiple Seed Phrase Generator is a JavaScript library that allows you to generate multiple seed phrases using the `seed-phrase-generator` library. It provides a simple and convenient way to create multiple seed phrases for various purposes such as wallet creation, testing, and more.

## Installation
You can install the library via npm:

```
npm install seed-phrase-generator multiple-seed-phrase-generator
```

## Usage
Here's how to use the library to generate multiple seed phrases:

```
const multipleSeedPhraseGenerator = require('multiple-seed-phrase-generator');

async function main() {
    try {
        // Number of seed phrases you want to generate
        const count = 3;

        // Generate multiple seed phrases
        const seedPhrases = await multipleSeedPhraseGenerator.generateMultipleSeedPhrases(count);

        // Print the generated seed phrases
        console.log('Seed Phrases:');
        seedPhrases.forEach((seedPhrase, index) => {
            console.log(`${index + 1}. ${seedPhrase}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
```

In this example, we use the `generateMultipleSeedPhrases` function from the library to generate a specified number of seed phrases. We then print out the generated seed phrases to the console.

## License
This library is released under the MIT License.