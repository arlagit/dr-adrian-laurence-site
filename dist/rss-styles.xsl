<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>RSS Feed - Dr Adrian Laurence</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #0D5C63; border-bottom: 2px solid #E6B800; padding-bottom: 10px; }
          .post { margin-bottom: 30px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; }
          .post h2 { margin-top: 0; color: #08474C; }
          .post-meta { color: #666; font-size: 0.9em; margin-bottom: 10px; }
          .post-description { color: #555; }
          a { color: #0D5C63; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>RSS Feed - Dr Adrian Laurence</h1>
        <p>Evidence-based lifestyle medicine for men 35+</p>
        <xsl:for-each select="rss/channel/item">
          <div class="post">
            <h2><xsl:value-of select="title"/></h2>
            <div class="post-meta">
              <xsl:value-of select="pubDate"/>
            </div>
            <div class="post-description">
              <xsl:value-of select="description"/>
            </div>
            <p><a href="{link}">Read more</a></p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
