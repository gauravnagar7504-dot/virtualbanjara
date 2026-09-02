import React from 'react';

export interface Story {
  id: string;
  slug: string;
  title: string;
  titleHindi?: string;
  category: string;
  location?: any;
  date?: string;
  publishedDate?: string;
  readTime?: string;
  author?: any;
  heroImage: string;
  excerpt?: string;
  content?: any;
  quote?: any;
  youtubeId?: string;
  gallery?: string[];
  featured?: boolean;
  relatedRecipeSlugs?: string[];
  relatedTrailSlug?: string;
}

export interface IngredientItem {
  name: string;
  hindiName?: string;
  amount: string;
  note?: string;
}

export interface IngredientSection {
  section?: string;
  items: IngredientItem[];
}

export interface RecipeMethodStep {
  step: number;
  title: string;
  instruction: string;
  chefTip?: string;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  titleHindi?: string;
  category: string;
  cuisine: string;
  region: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  difficulty?: string;
  dietary?: string;
  heroImage: string;
  gallery?: string[];
  story: string;
  ingredients: IngredientSection[];
  method: RecipeMethodStep[];
  equipment?: string[];
  notes?: string;
  youtubeId?: string;
  relatedStorySlug?: string;
  featured?: boolean;
}

export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  titleHindi?: string;
  category: string;
  duration: string;
  views?: string;
  publishedDate: string;
  thumbnail: string;
  description: string;
  location: string;
  featured?: boolean;
}

export interface TrailRecommendation {
  id: string;
  number: string;
  name: string;
  nameHindi?: string;
  category: string;
  diet?: 'Non-Veg' | 'Pure Veg' | 'Both' | string;
  experience?: string;
  city: string;
  region: string;
  image: string;
  whyVBRecommends: string;
  mustTry: string[];
  bestFor: string;
  vbNote?: string;
  area: string;
  mapUrl?: string;
  websiteUrl?: string;
  reservationUrl?: string;
  youtubeId?: string;
  videoTitle?: string;
  relatedRecipeSlug?: string;
}

export interface CityFoodTrail {
  id: string;
  slug: string;
  city: string;
  state: string;
  tagline: string;
  categoryTag: string;
  description: string;
  heroImage: string;
  picksCount: number;
  featured?: boolean;
  places: TrailRecommendation[];
  // Compatibility fields
  title?: string;
  titleHindi?: string;
  summary?: string;
  narrative?: string;
  stopsCount?: number;
  stops?: any[];
  relatedStorySlugs?: string[];
  relatedRecipeSlugs?: string[];
}

export type TrailStop = TrailRecommendation;
export type FoodTrail = CityFoodTrail;

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  location?: string;
  videoContext?: string;
}

export interface CollaborationService {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  icon: string;
}

export interface LeadEnquiryForm {
  brandName: string;
  contactPerson: string;
  email: string;
  phone: string;
  location: string;
  businessType: string;
  websiteSocial: string;
  projectScope: string;
  preferredPlatform: string[];
  budgetRange: string;
  preferredShootDate: string;
  message: string;
}

export type PageRoute = 
  | '/'
  | '/stories'
  | '/recipes'
  | '/videos'
  | '/food-trails'
  | '/about'
  | '/collaborate'
  | '/contact'
  | '/privacy-policy';
