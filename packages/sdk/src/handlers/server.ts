/**
 * Server handler
 */

import { ITransport } from '../transport';

export type ServerInfo = {
	data: {
		project: {
			project_name: string;
			project_logo: string | null;
			project_color: string;
			public_foreground: string | null;
			public_background: string | null;
			public_note: string;
			custom_css: string;
		};
		directus?: {
			version: string;
		};
		node?: {
			version: string;
			uptime: number;
		};
		os?: {
			type: string;
			version: string;
			uptime: number;
			totalmem: number;
		};
	};
};

export class ServerHandler {
	private transport: ITransport;

	constructor(transport: ITransport) {
		this.transport = transport;
	}

	async ping(): Promise<'pong'> {
		return (await this.transport.get<'pong'>('/server/ping')).data!;
	}

	async info(): Promise<ServerInfo> {
		return (await this.transport.get<ServerInfo>('/server/info')).data!;
	}
}