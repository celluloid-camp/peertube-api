import { createClient } from '@celluloid/peertube-api/client';
import { getConfig, getVideoCaptions } from '@celluloid/peertube-api';

const client = createClient({
	baseUrl: "https://celluloid.cloud",
});

async function testImports() {
	try {
		const { data: config } = await getConfig({
			client,
		});
		console.log('✅ getConfig works!');
		console.log('Server version:', config?.serverVersion);

		const { data: captions } = await getVideoCaptions({
			client,
			path: {
				id: "44ue5wyhSCv7w1tPGTxrtt",
			},
		});
		console.log('✅ getVideoCaptions works!');
		console.log('Captions:', captions);
	} catch (error) {
		console.error('❌ Test failed:', error);
		process.exit(1);
	}
}

testImports();
