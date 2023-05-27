interface videokeys {
    [id: string]: any
}
let vid: {
    id: string,
    episode: string,
    link: string,
    topic: string,
    description: string,
    duration: number,
    difficulty: string,
    ratingsAverages: number,
    creator: string,
    creationDate: string,
    price: number,
    summary: string,
    imageCover: string,
    images: object,
};
const videoData = (data: object) => {
    //const video : Record<string, string> = {}
    //if(data.hasOwnProperty('id'))
        //video.id = data['id']
}