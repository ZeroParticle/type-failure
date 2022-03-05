import { Networking } from "@flamework/networking";
import { OtherClientEvents } from "./events/other";

interface ServerEvents {}

interface ClientEvents extends OtherClientEvents {}

export const GlobalEvents = Networking.createEvent<ServerEvents, ClientEvents>();
