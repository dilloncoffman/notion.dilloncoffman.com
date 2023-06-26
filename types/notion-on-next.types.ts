import {
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface NotionOnNextPageObjectResponse extends PageObjectResponse {
  slug: string | undefined;
  title: string | undefined;
  coverImage: string | undefined;
  databaseName: string | undefined;
  databaseId: string | undefined;
}

export interface mediaMapInterface {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
    
export type BlogPageObjectResponse = NotionOnNextPageObjectResponse & {
	properties: {
		'Cover Credit Link': Extract<PageObjectResponse["properties"][string], { type:"url" }>
		'Date': Extract<PageObjectResponse["properties"][string], { type:"date" }>
		'Description': Extract<PageObjectResponse["properties"][string], { type:"rich_text" }>
		'Cover Credit': Extract<PageObjectResponse["properties"][string], { type:"rich_text" }>
		'Tags': Extract<PageObjectResponse["properties"][string], { type:"multi_select" }>
		'Estimated Reading Time': Extract<PageObjectResponse["properties"][string], { type:"rich_text" }>
		'Name': Extract<PageObjectResponse["properties"][string], { type:"title" }>
	}
}