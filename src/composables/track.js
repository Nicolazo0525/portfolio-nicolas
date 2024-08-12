import { ref } from "vue";
import localAxios from "../localAxios";


export default function useTrack() {

    const album = ref([])
    const track = ref([])
    const image = ref([])
    const duration = ref([])
    const errorsAlbum = ref('')
    const tokenSong = ref('6Nws2NAPuxaHzB7MfD1lhg?si=A_f1rF8wRfuYtO5BPLCdNA')

    
    const getTrack = async () => {
        
        try{
            let response = await localAxios.get('albums/' + tokenSong.value);
            console.log(response)
            album.value = response.data;
            track.value = response.data.tracks.items[0];/* 
            duration.value = response.data.tracks.items[0].duration_ms; */
            image.value = response.data.images[0].url;
            /* 
            console.log(duration.value) */
           
        }catch (error){
            console.log(error)
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
