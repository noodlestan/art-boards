import { describe, expect, it } from 'vitest';

import { CLI_NAME } from '../src/index.ts';

describe('switchboard-cli entry point', () => {
	it('FOR the package entry point — exposes the CLI name', () => {
		expect(CLI_NAME).toBe('@art-boards/switchboard-cli');
	});
});
