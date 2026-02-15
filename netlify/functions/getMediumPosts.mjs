// This file is netlify/functions/getMediumPosts.mjs

import { XMLParser } from 'fast-xml-parser';

export const handler = async (event, context) => {
    const MEDIUM_RSS_URL = "https://medium.com/feed/@subhadipjana1409";

    try {
        const response = await fetch(MEDIUM_RSS_URL);
        if (!response.ok) {
            return { statusCode: response.status, body: response.statusText };
        }
        
        const xmlData = await response.text();
        const parser = new XMLParser({
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseAttributeValue: true,
        });
        
        const jsonData = parser.parse(xmlData);
        
        // Transform the data into the same format our website expects
        const items = jsonData.rss.channel.item.map((item, index) => {
            const descriptionHtml = item.description || item['content:encoded'] || '';
            const imageUrlMatch = descriptionHtml.match(/<img[^>]+src="([^">]+)"/);
            return {
                _id: `medium_${index}`,
                title: item.title,
                link: item.link,
                imageUrl: imageUrlMatch ? imageUrlMatch[1] : null,
                publishedAt: new Date(item.pubDate).toISOString(),
                categories: Array.isArray(item.category) ? item.category : [item.category],
                excerpt: descriptionHtml.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
                source: "medium"
            };
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(items),
        };
    } catch (error) {
        console.error('Error fetching Medium RSS:', error);
        return { statusCode: 500, body: JSON.stringify({ error: 'Failed to fetch RSS feed' }) };
    }
};