//https://api.artic.edu/api/v1/artworks?query[term][is_public_domain]=true&fields=id,title,image_id
//https://api.artic.edu/api/v1/artworks/search?query[term][artist_ids]=35809&fields=id,title,image_id
// Jean Baptiste Armand Guillaumin = 34767
// Johan Barthold Jongkind = 40642
// Claude Monet = 35809

export async function getImageFromAPI() {
    const artistIDArray = [34767, 40642, 35809]
    const selection = artistIDArray[Math.floor(Math.random() * artistIDArray.length)]

    const array = {
        img: 'https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/1686,/0/default.jpg',
        info: 'https://www.artic.edu/artworks/20684/paris-street-rainy-day',
        imageName: 'painting of paris street rainy day'
    }
    return;
}