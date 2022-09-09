import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  seed() {
    return ({
      ok: true,
      msg: 'Endpoint actualizado'
    })
  }
}
