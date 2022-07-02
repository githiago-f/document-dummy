import { createWriteStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

export class LocalStorageProvider {
  #localStorage = resolve(__dirname, '../../../../storage');

  fileName(id) {
    return join(this.#localStorage, id);
  }

  getWriter(id) {
    const path = this.fileName(id);
    return {
      writer: createWriteStream(path),
      path: path
    };
  }

  async fileExists(id) {
    const stats = await stat(this.fileName(id));
    if (stats && stats.isFile()) {
      return true;
    }
    return false;
  }

  readFile() {}

  updateFile() {}
}
