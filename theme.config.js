export default {
  github: 'https://github.com/TopicBotList/apidocs',
  docsRepositoryBase: 'https://github.com/TopicBotList/apidocs/',
  titleSuffix: ' – topiclist',
  logo: (
    <>
      <img style={{ height: "45px" }} src="https://cdn.topiclist.xyz/images/png/TopicList5.png" />
      <strong>
        <span className="text-gray-600 font-normal hidden md:inline">
          TopicList!
        </span>
      </strong>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="topiclist docs." />
      <meta name="og:description" content="topiclist docs." />
      <meta name="og:title" content="topiclist docs." />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Want to help us? Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © topiclist.</>,
}
