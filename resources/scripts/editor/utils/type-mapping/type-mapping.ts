import { Post } from "@wordpress/core-data";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TypeMapping = {
  boolean: boolean;
  string: string;
  number: number;
  array: any[];
  object: Record<string, any>;
};

export type ConvertType<T extends keyof TypeMapping> = TypeMapping[T];

export type AttributeDefinition<T extends keyof TypeMapping> = {
  type: T;
  default: ConvertType<T>;
};

type EnumAttributeDefinition<E extends readonly string[]> = {
  type: "string";
  enum: E;
  default: E[number];
};

type ExtendedAttributeDefinition<
  T extends keyof TypeMapping,
  E extends readonly string[] = never,
> = E extends never ? AttributeDefinition<T> : EnumAttributeDefinition<E>;

export type GetBlockAttributeValues<
  Attr extends Record<
    string,
    ExtendedAttributeDefinition<keyof TypeMapping, any>
  >,
> = {
  [K in keyof Attr]: Attr[K] extends EnumAttributeDefinition<infer E>
    ? E[number]
    : ConvertType<Attr[K]["type"]>;
} & {
  className?: string;
};

export type GetSetAttributesFunction<
  Attr extends Record<string, AttributeDefinition<keyof TypeMapping>>,
> = (attributes: Partial<GetBlockAttributeValues<Attr>>) => void;

export type Image = {
  url: string;
  alt: string;
  id: string;
};
export type CardType = "primary" | "secondary";
export const cardTypes: CardType[] = ["primary", "secondary"];

export type Card = Image & {
  cardEyebrow?: string;
  cardTitle: string;
  cardText: string;
  cardType: CardType;
};

export type FetchedPost = {
  label: string;
  value: number;
  post: Post;
};
