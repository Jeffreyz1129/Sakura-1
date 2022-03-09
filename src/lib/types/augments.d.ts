import type { Database } from '#structures'
import type PQueue from 'p-queue'

declare module '@sapphire/framework' {
	interface Preconditions {
		ClientdPermissions: never
		UserPermissions: never
	}

	interface ScheduledTasks {
		checkUncheckedCodes: never
		updateCheckedCodes: never
	}
}
declare module '@sapphire/pieces' {
	interface Container {
		database: Database
		queue: PQueue
	}
}