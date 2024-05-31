/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
const nftCollection = []
// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, dateCreated, description) {
    const nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        description: description
    };
    nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Artist: " + nft.artist);
        console.log("Date Created: " + nft.dateCreated);
        console.log("Description: " + nft.description);
        console.log("--------------------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// call your functions below this line

mintNFT("Mona Lisa", "Leonardo da Vinci", "1503", "A portrait of Lisa Gherardini");
mintNFT("Starry Night", "Vincent van Gogh", "1889", "A depiction of van Gogh's view from the asylum");
mintNFT("The Persistence of Memory", "Salvador Dalí", "1931", "A surreal painting with melting clocks");

listNFTs();

console.log("Total Supply: " + getTotalSupply());
