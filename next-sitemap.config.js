const siteUrl = process.env.SITE_URL

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/signin',
      },
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    additionalSitemaps: [
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
  exclude: ['/signin', '/server-sitemap.xml'],
  
}
  