import secret from './secret';
import Twit from 'twit';

const {consumer_key, consumer_secret, access_token, access_token_secret} = secret;

const bot = new Twit({
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret,
    timeout_ms: 60*1000
});