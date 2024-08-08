import localAxios from "../localAxios";
import { ref } from "vue";

export default function useTrack() {

    const apiToken = '52dd07aefe5147f7bed88258d1ad7af7';
    const apiTokenSong = '1Qa2k4UzzF1X7QVTViJpdG?si=236debcc3bd943ee';
    const trackUri = 'spotify:track:1Qa2k4UzzF1X7QVTViJpdG?si=748979638ea64231';

    const album = ref([])
    const track = ref([])
    const image = ref([])
    const duration = ref([])
    const errorsAlbum = ref('')

    const getTrack = async () => {
        // tracks
        /* let response = await localAxios.get('artists/1Qp56T7n950O3EGMsSl81D?si=s_5VsleJQFGhdRXMz7uBCA'); */
        // albums
        
        try{
            let response = await localAxios.get('albums/6Nws2NAPuxaHzB7MfD1lhg?si=A_f1rF8wRfuYtO5BPLCdNA');
            album.value = response.data;
            track.value = response.data.tracks.items[0];/* 
            duration.value = response.data.tracks.items[0].duration_ms; */
            image.value = response.data.images[0].url;
            /* 
            console.log(duration.value) */

        }catch (error){

            if(error.response.status != 200){
                errorsAlbum.value = error.response.data.errors
            }

        }

    }

    return{
        getTrack,
        album,
        track,
        image,
        errorsAlbum,
    }
}
