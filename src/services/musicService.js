import api from "@/api";

class MusicService {
  static searchArtist({ artist }) {
    return api.get(`/search?q=artist:"${artist}"`);
  }
}

export default MusicService;
