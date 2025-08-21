// User segmentation types
export type UserSegment = 'price-sensitive' | 'neighborhood-focused' | 'amenity-driven' | 'unknown'

export interface UserProfile {
  id: string
  email?: string
  phone?: string
  segment: UserSegment
  preferences: {
    priceRange?: [number, number]
    neighborhoods?: string[]
    amenities?: string[]
    propertyType?: string[]
  }
  engagement: {
    lastVisit: Date
    visitCount: number
    interactionDepth: number
    conversionValue: number
  }
  createdAt: Date
  updatedAt: Date
}

// Widget types
export type WidgetType = 'realscout' | 'homebot' | 'cloudcma' | 'percy-ai' | 'hvs-autocomplete'

export interface WidgetConfig {
  type: WidgetType
  enabled: boolean
  config: Record<string, any>
  zIndex: number
  minHeight: number
}

// Analytics types
export interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
  customDimensions: {
    cd1: string // userType
    cd2: string // widgetType
    cd3: string // interactionDepth
    cd4: string // conversionValue
  }
  timestamp: Date
}

// Real estate specific types
export interface Property {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
  price: number
  bedrooms: number
  bathrooms: number
  squareFeet: number
  propertyType: string
  status: 'active' | 'pending' | 'sold' | 'off-market'
  images: string[]
  description: string
  features: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export interface Neighborhood {
  id: string
  name: string
  city: string
  state: string
  zipCode: string
  description: string
  amenities: string[]
  schools: string[]
  crimeRate: 'low' | 'medium' | 'high'
  walkScore: number
  transitScore: number
  coordinates: {
    lat: number
    lng: number
  }
  boundaries: number[][] // GeoJSON polygon coordinates
}

export interface MarketData {
  neighborhoodId: string
  averagePrice: number
  pricePerSqFt: number
  daysOnMarket: number
  inventoryCount: number
  priceTrend: 'increasing' | 'decreasing' | 'stable'
  lastUpdated: Date
}

// Form types
export interface ContactForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  interest: 'buying' | 'selling' | 'investing' | 'general'
  preferredContact: 'email' | 'phone' | 'text'
  timeline: 'immediate' | '3-months' | '6-months' | '1-year'
}

export interface SearchForm {
  location: string
  priceRange: [number, number]
  bedrooms: number
  bathrooms: number
  propertyType: string[]
  amenities: string[]
  keywords: string
}

// A/B Testing types
export interface ABTest {
  id: string
  name: string
  description: string
  variants: {
    id: string
    name: string
    weight: number
    config: Record<string, any>
  }[]
  trafficAllocation: number
  startDate: Date
  endDate?: Date
  status: 'active' | 'paused' | 'completed'
  metrics: {
    impressions: number
    conversions: number
    conversionRate: number
    confidence: number
  }
}

// Error boundary types
export interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
  retryCount: number
}

// Component props types
export interface SectionProps {
  className?: string
  children?: React.ReactNode
}

export interface WidgetProps {
  config: WidgetConfig
  className?: string
  onLoad?: () => void
  onError?: (error: Error) => void
}
