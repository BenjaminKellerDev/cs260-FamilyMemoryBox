//selected impressionist artist with reasonable art
// Jean Baptiste Armand Guillaumin = 34767
// Johan Barthold Jongkind = 40642
// Claude Monet = 35809

export async function getImageFromAPI() {
    const artistIDArray = [34767, 40642, 35809]
    const selection = artistIDArray[Math.floor(Math.random() * artistIDArray.length)]

    //call Art Institute of Chicago API for image metadata of all collected art from selected artist 
    const url = 'https://api.artic.edu/api/v1/artworks/search?query[term][artist_ids]=' + selection + '&fields=id,title,image_id';
    const response = await fetch(url, {
        method: 'get'
    })
    const rJSON = await response.json();
    const selectedPainting = rJSON.data[Math.floor(Math.random() * rJSON.data.length)];


    const imgObj = {
        img: 'https://www.artic.edu/iiif/2/' + selectedPainting.image_id + '/full/843,/0/default.jpg',
        info: 'https://www.artic.edu/artworks/' + selectedPainting.id,
        imageName: selectedPainting.title
    }
    return imgObj;
}