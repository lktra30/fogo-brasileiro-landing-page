// Google Tag Manager utilities

interface GTMDataLayer {
  event?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer: GTMDataLayer[];
  }
}

// Initialize dataLayer if it doesn't exist
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

/**
 * Send a custom event to Google Tag Manager
 * @param eventName - The name of the event
 * @param eventData - Additional data to send with the event
 */
export const gtmEvent = (eventName: string, eventData: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

/**
 * Track page views
 * @param pagePath - The path of the page being viewed
 * @param pageTitle - The title of the page
 */
export const gtmPageView = (pagePath: string, pageTitle?: string) => {
  gtmEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Track button clicks
 * @param buttonName - Name or identifier of the button
 * @param section - Section where the button is located
 */
export const gtmButtonClick = (buttonName: string, section?: string) => {
  gtmEvent('button_click', {
    button_name: buttonName,
    section: section,
  });
};

/**
 * Track menu item interactions
 * @param itemName - Name of the menu item
 * @param category - Category of the menu item
 */
export const gtmMenuInteraction = (itemName: string, category?: string) => {
  gtmEvent('menu_interaction', {
    item_name: itemName,
    category: category,
  });
};

/**
 * Track form submissions
 * @param formName - Name of the form
 * @param formType - Type of form (contact, reservation, etc.)
 */
export const gtmFormSubmit = (formName: string, formType?: string) => {
  gtmEvent('form_submit', {
    form_name: formName,
    form_type: formType,
  });
};

/**
 * Track scroll depth
 * @param percentage - Percentage of page scrolled
 */
export const gtmScrollDepth = (percentage: number) => {
  gtmEvent('scroll_depth', {
    scroll_percentage: percentage,
  });
};
