import { BaseModule } from '..';
import { WCNStateProvider } from '../../providers/chain-state/wcn/wcn';
import { BitcoinP2PWorker } from '../bitcoin/p2p';
import { VerificationPeer } from '../bitcoin/VerificationPeer';

export default class WCNModule extends BaseModule {
  constructor(services) {
    super(services);
    services.Libs.register('WCN', 'bitcore-lib-wcn', 'bitcore-p2p-wcn');
    services.P2P.register('WCN', BitcoinP2PWorker);
    services.CSP.registerService('WCN', new WCNStateProvider());
    services.Verification.register('WCN', VerificationPeer);
  }
}
