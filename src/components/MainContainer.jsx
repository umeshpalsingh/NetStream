import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies);
    if(movies === null) return;

    // We are going to show the very first movie video in  the background
    const mainMovie = movies[0];
    const {title, id, overview} = mainMovie
    
    return (
        <div className="main-container">
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer

// {
//   "id": 1061474,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "James Gunn on why Superman needs to be seen on the biggest screen possible",
//       "key": "CGDvmZ1imfQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-18T19:30:01.000Z",
//       "id": "687b7f9765f0807e59d985c5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Who's 'Most Likely' to Talk During a Movie & Be Class Clown",
//       "key": "PwNDnLOyudQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-18T16:23:56.000Z",
//       "id": "687a828e2b930fb6d552826a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Interview with Director James Gunn",
//       "key": "kiQ2b9qk7FM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-18T15:01:23.000Z",
//       "id": "687bd7c2126c47dd65169a5c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "How James Gunn's dog inspired Superman's best friend, Krypto",
//       "key": "7vdNu-R17xE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-11T19:30:01.000Z",
//       "id": "687a4221fbcc2b691738cc0c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Exclusive Interview",
//       "key": "UFmuXlvrX0M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-08T16:19:10.000Z",
//       "id": "687042462e4f1002429a5838"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "World Premiere Live",
//       "key": "9h68zmVrdSE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-08T01:35:12.000Z",
//       "id": "686cdde52150c1dcde6e88a7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Behind the Scenes Featurette | Filmed For IMAX®",
//       "key": "suLX45FvGmQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2025-07-07T16:01:41.000Z",
//       "id": "686cde65dd25edf633703425"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "London Fan Event",
//       "key": "jM5rIlULr7k",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-07-03T19:42:08.000Z",
//       "id": "6866f7fac2b5e735d8f7c29a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Now that's a SuperMAN!",
//       "key": "LLnAWM-4WTI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-07-03T12:00:43.000Z",
//       "id": "686ddea6787b8e0829ed63fa"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Superman flying into cinemas 11 July - Get tickets now!",
//       "key": "9fFJ601gsXQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-07-03T08:05:04.000Z",
//       "id": "687ad838889cf9581e243d0a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Strength",
//       "key": "edONI3oR8CM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-06-20T18:16:08.000Z",
//       "id": "6855ad8978ec0324f54bc921"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Superman in cinemas 11 July - Get tickets now",
//       "key": "P3RDmJnyPuY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-06-18T16:29:45.000Z",
//       "id": "687ad86450eaf66252243cf4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Amazon Prime Early Screening",
//       "key": "2FE_qe149_w",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-06-14T01:12:17.000Z",
//       "id": "684e2ba62c399022f01ec3f7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Tickets on Sale Now",
//       "key": "nZTgJy8ym34",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-06-11T16:05:01.000Z",
//       "id": "6849bc7dc8bf37e3a43e0ac3"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Rivalry",
//       "key": "p7AeDsEtDXc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-06-06T20:01:35.000Z",
//       "id": "68434a13b0a8b4b3db073c95"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A hero for ALL.",
//       "key": "k3GqT5ufY4k",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-06-02T16:52:15.000Z",
//       "id": "683dde4614531dc838289068"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "Ox8ZLF6cGM0",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-05-14T15:45:45.000Z",
//       "id": "6824befc11d6d7ec9d2d2488"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Eyes up here. Trailer Tomorrow",
//       "key": "him2lhOPgtc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-13T16:01:14.000Z",
//       "id": "6823ac40bf87fc43702d2349"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Look Up Metropolis",
//       "key": "lbbU9HG6q60",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-05-12T15:59:51.000Z",
//       "id": "68226b8a0c4b2afc048643cf"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "For Honor - Milk-Bone x SUPERMAN",
//       "key": "muHLplSn4Eg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": false,
//       "published_at": "2025-05-12T13:02:00.000Z",
//       "id": "6823c1c571e3023ff1a16b73"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Superman Day - Behind The Scenes Look",
//       "key": "Rq5LyXG8m2U",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2025-04-18T16:01:23.000Z",
//       "id": "680283dee506a8e3a0ad46ea"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Sneak Peek",
//       "key": "xFU8U4UVUBs",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-04-03T21:00:06.000Z",
//       "id": "67eefadc0c791beb57ace5dc"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "See the Superman Extended Preview in Theaters on @AMinecraftMovie",
//       "key": "gFNOrz-xGKc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-04-01T16:05:19.000Z",
//       "id": "67f1ecdaede8d82f3bad95f2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Shaq Was Shook When He Met the REAL Superman",
//       "key": "fVrVyLGdLe4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": false,
//       "published_at": "2025-02-16T01:31:46.000Z",
//       "id": "67e31067d4052f4793dc8466"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "“Icon” TV Spot",
//       "key": "VvLvSuLISqI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-01-26T20:00:04.000Z",
//       "id": "6796f04ba6e41283f12b2294"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Teaser Trailer Tomorrow",
//       "key": "KbE8n146umc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-12-18T14:09:48.000Z",
//       "id": "6762ddb0713e9ff45bab03ca"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser Trailer",
//       "key": "uhUht6vAsMY",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2024-12-18T06:06:30.000Z",
//       "id": "6763518167c96321804a3920"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Teaser Trailer Thursday",
//       "key": "lNYZWznDjp0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-12-16T14:00:39.000Z",
//       "id": "6760de29669675c5afbaff9a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Look Up",
//       "key": "Z9Z6Jv1xQT8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2024-12-16T13:57:19.000Z",
//       "id": "6760de00849914f36ebb0064"
//     }
//   ]
// }