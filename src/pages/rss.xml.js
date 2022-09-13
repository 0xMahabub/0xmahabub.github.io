import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		articles: import.meta.glob('./blog/**/*.md'),
		projects: import.meta.glob('./project/**/*.md'),
	});
