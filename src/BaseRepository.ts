import Util from "./Util";

class BaseRepository {
  util: Util;
  constructor(util: Util) {
    this.util = util;
  }
}

export default BaseRepository;
