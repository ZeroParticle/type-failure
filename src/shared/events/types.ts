interface F {
	data: string;
}

type AType<B extends string> = {
	[groupId in B | "default"]: F;
};

export interface EventType<A extends AType<B>, B extends string, C extends AType<D>, D extends string> {
	a: keyof A;
	c: keyof C;
}
