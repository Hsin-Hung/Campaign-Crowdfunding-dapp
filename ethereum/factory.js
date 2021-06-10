import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x8C14AECf694E8E79c79DbA6D6D8424eC1e3AbD2d'
);

export default instance;