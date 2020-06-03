import api from "@/api";

class MusicService {
  static searchArtist({ artist }) {
    return api.get(`/search/artist?q=${artist}`);
  }
}

export default MusicService;
