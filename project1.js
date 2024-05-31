const nftCollection = []

function mintNFT(name, artist, dateCreated, description) {
    const nft = {
        name: name,
        artist: artist,
        dateCreated: dateCreated,
        description: description
    };
    nftCollection.push(nft);
}
function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Artist: " + nft.artist);
        console.log("Date Created: " + nft.dateCreated);
        console.log("Description: " + nft.description);
        console.log("--------------------------");
    });
}
function getTotalSupply() {
    return nftCollection.length;
}
mintNFT("Mona Lisa", "Leonardo da Vinci", "1503", "A portrait of Lisa Gherardini");
mintNFT("Starry Night", "Vincent van Gogh", "1889", "A depiction of van Gogh's view from the asylum");
mintNFT("The Persistence of Memory", "Salvador Dalí", "1931", "A surreal painting with melting clocks");

listNFTs();

console.log("Total Supply: " + getTotalSupply());