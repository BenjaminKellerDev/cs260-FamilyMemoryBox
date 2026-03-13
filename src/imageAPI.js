//https://api.artic.edu/api/v1/artworks?query[term][is_public_domain]=true&fields=id,title,image_id
//https://api.artic.edu/api/v1/artworks/search?query[term][artist_ids]=35809&fields=id,title,image_id
// Jean Baptiste Armand Guillaumin = 34767
// Johan Barthold Jongkind = 40642
// Claude Monet = 35809

export async function getImageFromAPI() {
    const url = "https://api.artic.edu/api/v1/artworks/search?query[term][artist_ids]=35809&fields=id,title,image_id";
    const params = {
        method: 'get',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({

        })
    }
    const response = await fetch(url, params);
    console.log(response);
    const array = [{
        img: 'https://www.artic.edu/iiif/2/f8fd76e9-c396-5678-36ed-6a348c904d27/full/1686,/0/default.jpg',
        info: 'https://www.artic.edu/artworks/20684/paris-street-rainy-day',
        imageName: 'painting of paris street rainy day'
    }, {
        img: 'https://www.artic.edu/iiif/2/d1549113-7586-2193-de9f-80c1ce58ed64/full/1686,/0/default.jpg',
        info: 'https://www.artic.edu/artworks/30361/entrance-to-the-port-of-honfleur',
        imageName: 'painting of Entrance to the Port of Honfleur'
    }, {
        img: 'https://www.artic.edu/iiif/2/f38d16d0-7fa8-d6db-7922-3d0d057604c1/full/1686,/0/default.jpg',
        info: 'https://www.artic.edu/artworks/33212/the-arcueil-aqueduct-at-sceaux-railroad-crossing',
        imageName: 'painting of The Arcueil Aqueduct at Sceaux Railroad Crossing'
    }
    ]
    return array[Math.floor(Math.random() * array.length)];
}