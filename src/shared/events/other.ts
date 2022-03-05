import { EventType } from "./types";

export interface OtherClientEvents {
	myEvent(event: EventType<any, any, any, any>): void;
}
