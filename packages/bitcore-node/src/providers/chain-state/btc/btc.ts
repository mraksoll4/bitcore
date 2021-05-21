import { InternalStateProvider } from '../internal/internal';

export class BTCStateProvider extends InternalStateProvider {
  constructor(chain: string = 'WCN') {
    super(chain);
  }
}
