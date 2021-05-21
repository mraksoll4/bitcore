import { BaseModule } from '..';
import { BTCStateProvider } from '../../providers/chain-state/btc/btc';
import { BitcoinP2PWorker } from './p2p';
import { VerificationPeer } from './VerificationPeer';

export default class BitcoinModule extends BaseModule {
  constructor(services: BaseModule['bitcoreServices']) {
    super(services);
    services.Libs.register('WCN', 'bitcore-lib', 'bitcore-p2p');
    services.P2P.register('WCN', BitcoinP2PWorker);
    services.CSP.registerService('WCN', new BTCStateProvider());
    services.Verification.register('WCN', VerificationPeer);
  }
}
