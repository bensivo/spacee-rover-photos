import 'jest';
import { InMemoryCache } from './in-memory-cache.service';

describe('In Memory Cache', () => {
    it('Returns undefined on a Cache Miss', async () => {
        const cache = new InMemoryCache();
        const data = await cache.get('KEY');
        expect(data).toBeUndefined();
    });

    it('Returns data on a Cache Hit', async () => {
        const cache = new InMemoryCache();
        await cache.set('KEY', 'VALUE');
        const data = await cache.get('KEY');
        expect(data).toEqual('VALUE');
    });
});
