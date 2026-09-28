type SeoType = 'website' | 'article'

type RouteSeoConfig = {
  title: string
  description: string
  image: string
  imageAlt: string
  keywords: string
  type?: SeoType
  structuredData?: Record<string, any>[]
}

const SITE_NAME = 'EISHI Partners'
const DEFAULT_DESCRIPTION =
  'EISHI Partners is a Filipino-Japanese holdings group focused on real estate, agriculture, transport, and strategic business partnerships in the Philippines.'
const DEFAULT_IMAGE = '/eishi/stock_images/8.webp'
const DEFAULT_KEYWORDS =
  'EISHI Partners, Eishi Holdings, Philippines real estate, agriculture investments, poultry farm, feed mill, Cebu condominium, Kalinga residential land'

function joinUrl(base: string, path: string) {
  const normalizedBase = base.replace(/\/+$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${normalizedBase}${normalizedPath}`
}

function getBaseUrl(siteUrl: string) {
  if (siteUrl) {
    return siteUrl.replace(/\/+$/, '')
  }

  if (import.meta.client && window.location?.origin) {
    return window.location.origin.replace(/\/+$/, '')
  }

  return ''
}

function buildOrganizationSchema(baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: baseUrl || undefined,
    logo: baseUrl ? joinUrl(baseUrl, '/favicon.ico') : undefined,
    email: 'mailto:eishiproperties@gmail.com',
    telephone: '+63-917-575-5044',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'JC 81 KM5, Pico',
      addressLocality: 'La Trinidad',
      addressRegion: 'Benguet',
      addressCountry: 'PH',
    },
    sameAs: [
      'https://epartners-offshore.com/',
      'https://meishin-group.co.jp/',
    ],
  }
}

function buildRouteSeo(path: string, baseUrl: string): RouteSeoConfig {
  const organizationSchema = buildOrganizationSchema(baseUrl)

  const routeMap: Record<string, RouteSeoConfig> = {
    '/': {
      title: 'Filipino-Japanese Holdings and Investment Partnerships',
      description:
        'Explore EISHI Partners, a Filipino-Japanese group building long-term value through real estate, agriculture, transport, and cross-border partnerships in the Philippines.',
      image: '/eishi/stock_images/8.webp',
      imageAlt: 'EISHI Partners overview',
      keywords:
        'Filipino Japanese investment company, Philippines holdings group, EISHI Partners, agriculture and real estate Philippines',
      structuredData: [
        organizationSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: baseUrl || undefined,
        },
      ],
    },
    '/about': {
      title: 'About EISHI Partners',
      description:
        'Learn about EISHI Partners, our Filipino-Japanese leadership, long-term business vision, and the sectors we develop across the Philippines.',
      image: '/eishi/pexels-rickyrecap-1662159.webp',
      imageAlt: 'About EISHI Partners',
      keywords:
        'about EISHI Partners, Filipino Japanese company, Eishi business profile, Philippines investment group',
      structuredData: [organizationSchema],
    },
    '/contact': {
      title: 'Contact EISHI Partners',
      description:
        'Contact EISHI Partners for property inquiries, investment opportunities, partnerships, and business development discussions in the Philippines.',
      image: '/eishi/stock_images/2.avif',
      imageAlt: 'Contact EISHI Partners office',
      keywords:
        'contact EISHI Partners, property inquiry Philippines, investment partnership contact, Eishi office Benguet',
      structuredData: [
        organizationSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact EISHI Partners',
          url: baseUrl ? joinUrl(baseUrl, '/contact') : undefined,
        },
      ],
    },
    '/property': {
      title: 'Business Holdings and Properties',
      description:
        'Browse EISHI Partners business holdings, including agricultural assets, transport operations, residential land, and condominium investments in the Philippines.',
      image: '/eishi/pangasinan_farm/images/Gemini_Generated_Image_cs6b9xcs6b9xcs6b.png',
      imageAlt: 'EISHI Partners holdings and properties',
      keywords:
        'Philippines properties, business holdings Philippines, agricultural assets, Cebu condominium, Kalinga residential lands',
      structuredData: [
        organizationSchema,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'EISHI Partners Business Holdings',
          url: baseUrl ? joinUrl(baseUrl, '/property') : undefined,
        },
      ],
    },
    '/partnership_opportunities': {
      title: 'Partnership Opportunities',
      description:
        'Discover partnership opportunities with EISHI Partners for business ventures, government collaboration, and long-term development projects.',
      image: '/images/1732160491688.webp',
      imageAlt: 'Partnership opportunities with EISHI Partners',
      keywords:
        'partnership opportunities Philippines, business collaboration, EISHI Partners partnership, government collaboration',
      structuredData: [organizationSchema],
    },
    '/business_holdings': {
      title: 'Business Holdings Portfolio',
      description:
        'Review the EISHI Partners portfolio across poultry farming, feed production, land development, condominiums, and transport services.',
      image: '/images/25101.webp',
      imageAlt: 'EISHI Partners business holdings portfolio',
      keywords:
        'business holdings portfolio, Eishi assets, poultry farm Philippines, feed mill Philippines, Philippine property portfolio',
      structuredData: [organizationSchema],
    },
    '/business_holdings/feed_mill': {
      title: 'Feed Mill in San Jose, Batangas',
      description:
        'Explore the EISHI Partners feed mill operation in San Jose, Batangas, supporting agricultural growth and integrated food production.',
      image: '/eishi/feed_mill/images/new-hero.jpeg',
      imageAlt: 'Feed mill in San Jose, Batangas',
      keywords:
        'feed mill Batangas, San Jose Batangas feed mill, Eishi agriculture, integrated food production Philippines',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/business_holdings/car_rental': {
      title: 'Car Rental Business in Metro Manila',
      description:
        'View the EISHI Partners car rental business serving Metro Manila with transport solutions as part of its diversified holdings.',
      image: '/eishi/car_rental/images/car01.png',
      imageAlt: 'EISHI Partners car rental business',
      keywords:
        'car rental Metro Manila, Eishi car rental, transport business Philippines, business holdings transport',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/business_holdings/batangas/poultry_farm': {
      title: 'Batangas Poultry Farm',
      description:
        'Learn about the EISHI Partners poultry farm in San Jose, Batangas and its role in sustainable agricultural production.',
      image: '/eishi/batangas_tokyo_farm/images/Gemini_Generated_Image_pamyzvpamyzvpamy.png',
      imageAlt: 'Batangas poultry farm',
      keywords:
        'Batangas poultry farm, San Jose Batangas agriculture, Eishi poultry farm, poultry investment Philippines',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/business_holdings/pangasinan_farm': {
      title: 'Pangasinan Farm',
      description:
        'Explore the Pangasinan farm property of EISHI Partners, a large agricultural asset supporting long-term development in Balungao.',
      image: '/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp',
      imageAlt: 'Pangasinan farm aerial view',
      keywords:
        'Pangasinan farm, Balungao Pangasinan property, Eishi farm Philippines, agricultural land Philippines',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/business_holdings/kalinga_residential': {
      title: 'Kalinga Residential Lands',
      description:
        'Discover EISHI Partners residential land holdings in Tabuk, Kalinga, positioned for long-term real estate development.',
      image: '/eishi/kalinga_residential/images/DJI_0595-min.webp',
      imageAlt: 'Kalinga residential lands',
      keywords:
        'Kalinga residential lands, Tabuk real estate, residential lots Kalinga, Eishi land development',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/business_holdings/cebu_condominium': {
      title: 'Cebu Condominium Holdings',
      description:
        'See the EISHI Partners condominium holdings in Cebu City, including centrally located units in a major urban growth corridor.',
      image: '/eishi/cebu_condo/images/20240626_094939.webp',
      imageAlt: 'Cebu condominium holdings',
      keywords:
        'Cebu condominium, Cebu City property investment, Eishi condo holdings, Philippines real estate Cebu',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/tour/cebu-condominium': {
      title: 'Cebu Condominium Virtual Tour',
      description:
        'Take a virtual tour of the EISHI Partners Cebu condominium property and explore the space, location, and development potential.',
      image: '/eishi/cebu_condo/images/20240626_094939.webp',
      imageAlt: 'Cebu condominium virtual tour',
      keywords:
        'Cebu condominium virtual tour, condo property tour Cebu, Eishi property tour',
      type: 'article',
      structuredData: [organizationSchema],
    },
    '/tour/batangas-poultry-farm': {
      title: 'Batangas Poultry Farm Virtual Tour',
      description:
        'Take a virtual tour of the EISHI Partners poultry farm in Batangas and review the site through video and immersive media.',
      image: '/eishi/batangas_tokyo_farm/images/Gemini_Generated_Image_pamyzvpamyzvpamy.png',
      imageAlt: 'Batangas poultry farm virtual tour',
      keywords:
        'Batangas farm virtual tour, poultry farm tour Philippines, Eishi virtual property tour',
      type: 'article',
      structuredData: [organizationSchema],
    },
  }

  return (
    routeMap[path] || {
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      image: DEFAULT_IMAGE,
      imageAlt: SITE_NAME,
      keywords: DEFAULT_KEYWORDS,
      structuredData: [organizationSchema],
    }
  )
}

export function useRouteSeo() {
  const route = useRoute()
  const runtimeConfig = useRuntimeConfig()

  useHead(() => {
    const baseUrl = getBaseUrl(runtimeConfig.public.siteUrl || '')
    const seo = buildRouteSeo(route.path, baseUrl)
    const canonicalUrl = baseUrl ? joinUrl(baseUrl, route.path) : route.path
    const imageUrl = baseUrl ? joinUrl(baseUrl, seo.image) : seo.image

    return {
      title: seo.title,
      titleTemplate: `%s | ${SITE_NAME}`,
      meta: [
        { name: 'description', content: seo.description },
        { name: 'keywords', content: seo.keywords || DEFAULT_KEYWORDS },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'author', content: SITE_NAME },
        { name: 'theme-color', content: '#0A1F44' },
        { name: 'format-detection', content: 'telephone=yes, email=yes, address=yes' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:type', content: seo.type || 'website' },
        { property: 'og:title', content: `${seo.title} | ${SITE_NAME}` },
        { property: 'og:description', content: seo.description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:image', content: imageUrl },
        { property: 'og:image:alt', content: seo.imageAlt },
        { property: 'og:locale', content: 'en_PH' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${seo.title} | ${SITE_NAME}` },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: imageUrl },
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl },
      ],
      script: (seo.structuredData || []).map((entry, index) => ({
        key: `ld-json-${route.path}-${index}`,
        type: 'application/ld+json',
        children: JSON.stringify(entry),
      })),
    }
  })
}
