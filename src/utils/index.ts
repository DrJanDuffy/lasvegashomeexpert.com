import { UserSegment, AnalyticsEvent, UserProfile } from '@/types'

// Analytics utilities
export const trackEvent = (event: Omit<AnalyticsEvent, 'timestamp'>) => {
  const analyticsEvent: AnalyticsEvent = {
    ...event,
    timestamp: new Date(),
  }
  
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      custom_map: {
        cd1: 'userType',
        cd2: 'widgetType',
        cd3: 'interactionDepth',
        cd4: 'conversionValue',
      },
      userType: event.customDimensions.cd1,
      widgetType: event.customDimensions.cd2,
      interactionDepth: event.customDimensions.cd3,
      conversionValue: event.customDimensions.cd4,
    })
  }
  
  // Send to custom analytics endpoint
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(analyticsEvent),
  }).catch(console.error)
  
  return analyticsEvent
}

// User segmentation utilities
export const determineUserSegment = (userProfile: Partial<UserProfile>): UserSegment => {
  if (!userProfile.preferences) return 'unknown'
  
  const { preferences, engagement } = userProfile
  
  // Price-sensitive: frequently uses price filters
  if (preferences.priceRange && engagement?.interactionDepth > 5) {
    return 'price-sensitive'
  }
  
  // Neighborhood-focused: searches specific areas
  if (preferences.neighborhoods && preferences.neighborhoods.length > 2) {
    return 'neighborhood-focused'
  }
  
  // Amenity-driven: focuses on property features
  if (preferences.amenities && preferences.amenities.length > 3) {
    return 'amenity-driven'
  }
  
  return 'unknown'
}

// Local storage utilities with expiry
export const setLocalStorageWithExpiry = (key: string, value: any, expiryDays: number = 30) => {
  const item = {
    value,
    expiry: new Date().getTime() + (expiryDays * 24 * 60 * 60 * 1000),
  }
  localStorage.setItem(key, JSON.stringify(item))
}

export const getLocalStorageWithExpiry = (key: string) => {
  const itemStr = localStorage.getItem(key)
  if (!itemStr) return null
  
  const item = JSON.parse(itemStr)
  if (new Date().getTime() > item.expiry) {
    localStorage.removeItem(key)
    return null
  }
  
  return item.value
}

// Debounce utility
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

// Format utilities
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

// Performance utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now()
  fn()
  const end = performance.now()
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name,
      value: Math.round(end - start),
    })
  }
  
  return end - start
}

// Error handling utilities
export const handleError = (error: Error, context: string) => {
  console.error(`Error in ${context}:`, error)
  
  trackEvent({
    event: 'error',
    category: 'error',
    action: 'error_occurred',
    label: context,
    customDimensions: {
      cd1: 'error',
      cd2: context,
      cd3: error.message,
      cd4: '0',
    },
  })
}

// Responsive utilities
export const getBreakpoint = (): 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' => {
  if (typeof window === 'undefined') return 'lg'
  
  const width = window.innerWidth
  
  if (width < 475) return 'xs'
  if (width < 576) return 'sm'
  if (width < 768) return 'md'
  if (width < 992) return 'lg'
  if (width < 1200) return 'xl'
  return '2xl'
}

// Intersection Observer utilities
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  if (typeof window === 'undefined') return null
  
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  }
  
  return new IntersectionObserver(callback, defaultOptions)
}

// Cookie utilities
export const setCookie = (name: string, value: string, days: number = 30) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000))
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`
}

export const getCookie = (name: string): string | null => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  
  return null
}

// A/B Testing utilities
export const getABTestVariant = (testId: string, variants: { id: string; weight: number }[]): string => {
  const cookieKey = `ab_test_${testId}`
  const existingVariant = getCookie(cookieKey)
  
  if (existingVariant) return existingVariant
  
  // Assign variant based on weights
  const totalWeight = variants.reduce((sum, variant) => sum + variant.weight, 0)
  let random = Math.random() * totalWeight
  
  for (const variant of variants) {
    random -= variant.weight
    if (random <= 0) {
      setCookie(cookieKey, variant.id, 30)
      return variant.id
    }
  }
  
  // Fallback to first variant
  const fallbackVariant = variants[0]?.id || 'default'
  setCookie(cookieKey, fallbackVariant, 30)
  return fallbackVariant
}
