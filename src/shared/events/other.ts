import { EventType, EventType2 } from "./types";

export interface OtherClientEvents {
	myEvent(event: EventType<{}, string, {}, string>): void;
	myOtherEvent(event: EventType2<{}, string>): void;
}
