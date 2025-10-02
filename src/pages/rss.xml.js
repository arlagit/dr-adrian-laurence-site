import { getCollection } from 'astro:content';
import { siteConfig } from '../lib/site-config';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  const rssItems = posts.map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.data.summary}]]></description>
      <link>${context.site}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${context.site}/blog/${post.slug}/</guid>
      <pubDate>${post.data.publishedAt.toUTCString()}</pubDate>
      <author>Dr Adrian Laurence</author>
      ${post.data.tags ? post.data.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('') : ''}
    </item>
  `).join('');

  const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteConfig.title}]]></title>
    <description><![CDATA[${siteConfig.description}]]></description>
    <link>${context.site}</link>
    <atom:link href="${context.site}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
