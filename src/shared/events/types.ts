interface F {
	data: string;
}

type AType<B extends string> = {
	[groupId in B | "default"]: F;
};

export interface EventType<A extends AType<B>, B extends string, C extends AType<D>, D extends string> {
	a: A;
	c: C;
}

type AMapType<A extends AType<B>, B extends string> = Map<keyof A, number>;

export interface EventType2<A extends AType<B>, B extends string> {
	map: AMapType<A, B>;
}
